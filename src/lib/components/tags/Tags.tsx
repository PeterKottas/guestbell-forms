// Libs
import * as React from 'react';
import { InputGroup } from '../inputGroup/InputGroup';
import { Text, TextProps, TextRaw } from '../text/Text';
import * as PlusIcon from 'material-design-icons/content/svg/production/ic_add_circle_outline_24px.svg';
import * as LeftArrowIcon from 'material-design-icons/navigation/svg/production/ic_arrow_back_24px.svg';
import {
  BaseInputProps,
  BaseInputState,
  BaseInput,
  ValidationError,
  defaultBaseTranslations,
} from '../base/input/BaseInput';
import { Button, ButtonComponentProps } from '../button/Button';
import TagsSuggestions, {
  RenderSuggestionTagProps,
} from './subComponents/TagsSuggestions';
import { withFormContext } from '../form/withFormContext';
import classNames from 'classnames';
import { withThemeContext } from '../themeProvider/withThemeContext';
import { PopperProps } from '@mui/material/Popper/Popper';
import LinearProgress from '@mui/material/LinearProgress';
import Portal from '@mui/material/Portal';

// Misc
export type Tag<T extends number | string = number> = {
  id: T;
  name: string;
};

export type ResourceTConstraint<IdT extends number | string> = { id: IdT } | {};

export const defaultTagsTranslations = {
  ...defaultBaseTranslations,
  addNew: 'Add new',
  valueNotAddedError: 'You forgot to add tag',
  maxTagsSurpassedError: 'Maximum number of tags surpassed',
  waitingForMoreInputComponent: 'Waiting for more input...',
  suggestionsEmptyComponent: 'No existing tags...',
  suggestionsEmptyAllowNewComponent: 'Type to create...',
};

export type TagsTranslations = Partial<typeof defaultTagsTranslations>;

export type TagsProps<
  IdT extends number | string = number,
  T extends ResourceTConstraint<IdT> = Tag<IdT>
> = {
  className?: string;
  tagsSuggestionsClassName?: string;
  disabled?: boolean;
  tags: T[];
  getTagId?: (tag: T) => IdT;
  existingTags?: T[];
  fetchExistingTags?: (text: string, tags: T[]) => Promise<T[]>;
  onTagsChanged: (newTags: T[]) => void;
  onNewTagAdded?: (newTagName: string) => Promise<T>;
  onTagClick?: (tag: T) => void;
  showChips?: boolean;
  allowNew?: boolean;
  addNewOnBlur?: boolean;
  textProps?: TextProps;
  readOnly?: boolean;
  readonlyEmptyPlaceholder?: string;
  maxTags?: number;
  valueNotAddedError?: string | JSX.Element;
  maxTagsSurpassedError?: string | JSX.Element;
  showSuggestions?: boolean;
  suggestionsLoadingComponent?: string | JSX.Element;
  suggestionsEmptyComponent?: string | JSX.Element | null;
  suggestionsEmptyAllowNewComponent?: string | JSX.Element | null;
  waitingForMoreInputComponent?: string | JSX.Element;
  loadingDelayMs?: number;
  filterExistingTags?: (
    text: string,
    existingTags: T[],
    selectedTags: T[]
  ) => T[];
  allowSameTagMultipleTimes?: boolean;
  maxSuggestions?: number;
  popperProps?: Partial<PopperProps>;
  minLettersToFetch?: number;
  mobileVersionEnabled?: boolean;
  isLoading?: boolean;
  closeSuggestionsAfterCreate?: boolean;
  SuggestionTag?: React.ComponentType<RenderSuggestionTagProps<IdT, T>>;
  getName?: (tag: T) => string;
  showTags?: boolean;
} & BaseInputProps<HTMLInputElement, TagsTranslations> &
  (T extends { id: IdT } ? {} : { getTagId: (tag: T) => IdT });

export interface TagsState<
  IdT extends number | string = number,
  T extends ResourceTConstraint<IdT> = Tag<IdT>
> extends BaseInputState {
  textIsFocused: boolean;
  textErrors: ValidationError[];
  textIsValid: boolean;
  suggestionsVisible: boolean;
  fetchedExistingTags: T[];
  fetchingExistingTags: boolean;
  preselectedSuggestion?: number;
}

type InjectedProps = {};

const TagButtonComponent: React.FC<ButtonComponentProps> = (p) => (
  <a className={p.className} id={p.id} onClick={p.onClick}>
    {p.children}
  </a>
);

export class TagsRaw<
  IdT extends number | string = number,
  T extends ResourceTConstraint<IdT> = Tag<IdT>
> extends BaseInput<
  TagsProps<IdT, T> & InjectedProps,
  TagsState<IdT, T>,
  HTMLInputElement,
  TagsTranslations
> {
  public static defaultProps: TagsProps = {
    ...BaseInput.defaultProps,
    disabled: false,
    className: '',
    tags: [],
    existingTags: [],
    maxTags: 1000,
    onTagsChanged: () => undefined,
    onNewTagAdded: (newTagName) =>
      Promise.resolve({ name: newTagName, id: new Date().getTime() }),
    showSuggestions: true,
    suggestionsLoadingComponent: (
      <LinearProgress className="tags-input__suggestions__defaultLoading" />
    ),
    loadingDelayMs: 0,
    filterExistingTags: (text, tags) =>
      tags.filter((tag) => tag.name && tag.name.toLowerCase().startsWith(text)),
    maxSuggestions: 5,
    addNewOnBlur: false,
    translations: defaultTagsTranslations,
    minLettersToFetch: 0,
    mobileVersionEnabled: true,
    closeSuggestionsAfterCreate: false,
    getName: (tag) => tag.name,
    showTags: true,
  };

  private textRef: React.RefObject<TextRaw>;
  private suggestionsRef: React.RefObject<HTMLDivElement>;
  private isMobile: boolean = false;

  constructor(props: TagsProps<IdT, T> & InjectedProps) {
    super(props);
    this.state = {
      ...this.state,
      textErrors: [],
      textIsFocused: false,
      suggestionsVisible: false,
      fetchingExistingTags: false,
      textIsValid: false,
      fetchedExistingTags: [],
    };
    this.textRef = React.createRef();
    this.suggestionsRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleLeaveMobileClick = this.handleLeaveMobileClick.bind(this);
    if (props.mobileVersionEnabled) {
      this.isMobile = require('react-device-detect')?.isMobile;
    }
  }

  public focus() {
    if (this.textRef.current) {
      this.textRef.current.focus();
    }
  }

  public componentDidUpdate(oldProps: TagsProps<IdT, T> & InjectedProps) {
    if (
      oldProps.tags !== this.props.tags ||
      oldProps.validators !== this.props.validators ||
      oldProps.customValidators !== this.props.customValidators ||
      oldProps.required !== this.props.required
    ) {
      this.handleErrors(this.props.tags);
    }
  }

  public handleLeaveMobileClick() {
    this.setState({
      textIsFocused: false,
      suggestionsVisible: false,
      preselectedSuggestion: undefined,
    });
  }

  public handleClickOutside(e: MouseEvent) {
    if (
      !this.containerRef.current ||
      this.containerRef.current
        .querySelector('.tags-input__tag__wrapper')
        ?.contains(e.target as HTMLDivElement) ||
      this.containerRef.current
        .querySelector('.tags-input__text-input')
        ?.contains(e.target as HTMLDivElement) ||
      !this.suggestionsRef.current ||
      this.suggestionsRef.current.contains(e.target as HTMLDivElement)
    ) {
      return;
    }
    if (this.state.suggestionsVisible) {
      this.props.onSuggestionsClosed?.();
    }
    this.setState({
      suggestionsVisible: false,
      preselectedSuggestion: undefined,
    });
    if (this.props.addNewOnBlur && this.state.value) {
      const suggestions = this.getSuggestions();
      const existing = suggestions.find(
        (s) => this.props.getName(s) === this.state.value
      );
      if (existing) {
        this.onSuggestionSelected(existing, suggestions.length === 1);
      } else if (this.props.allowNew) {
        this.addNewTag();
      }
    } /* else if (this.state.value) {
      this.setState({ value: '' });
    }*/
  }

  public componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    document.addEventListener('touchstart', this.handleClickOutside);
    this.handleErrors(this.props.tags);
  }

  public componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    document.removeEventListener('touchstart', this.handleClickOutside);
    super.componentWillUnmount();
  }

  public render() {
    const translations = this.getTranslations(defaultTagsTranslations);
    const textProps = this.props.textProps
      ? this.props.textProps
      : ({} as TextProps);
    const suggestions = this.getSuggestions();
    const showMobileVersion =
      this.props.mobileVersionEnabled &&
      this.isMobile &&
      (this.state.textIsFocused || this.state.suggestionsVisible);
    const LeaveMobileButton = showMobileVersion ? (
      <Button
        className="tags-input__leaveMobileTagsButton line-height--0"
        onClick={this.handleLeaveMobileClick}
        noShadow={true}
        unobtrusive={true}
      >
        <LeftArrowIcon />
      </Button>
    ) : undefined;
    const showInput = Boolean(
      (!this.props.maxTags ||
        this.props.maxTags > (this.props.tags && this.props.tags.length)) &&
        !this.props.readOnly
    );
    return (
      <Portal container={document.body} disablePortal={!showMobileVersion}>
        <InputGroup title={this.props.title} tooltip={this.props.tooltip}>
          <div
            {...(this.props.id && {
              id: this.props.id,
            })}
            className={classNames(
              'input__base tags-input',
              this.getValidationClass(),
              this.props.className,
              {
                'tags-input--readOnly': this.props.readOnly,
                'tags-input--hasPlaceholder':
                  this.props.textProps && this.props.textProps.placeholder,
                'tags-input--mobile': showMobileVersion,
              }
            )}
            ref={this.containerRef}
          >
            {showMobileVersion && (
              <div className="tags-input__mobileBackdrop" />
            )}
            {this.props.showTags && (
              <div className="tags-input__tags__wrapper">
                {!showInput && showMobileVersion && LeaveMobileButton}
                {this.props.tags && this.props.tags.length > 0 ? (
                  <div className="tags-input__tag__wrapper">
                    {this.props.tags.map((item, index) =>
                      this.renderTag(item, index)
                    )}
                  </div>
                ) : (
                  this.props.readOnly && (
                    <div className="tags-input__tag__wrapper">
                      <div className="tags-input__tag">
                        {this.props.readonlyEmptyPlaceholder}
                      </div>
                    </div>
                  )
                )}
              </div>
            )}
            {showInput && (
              <div
                className={
                  'tags-input__tags__wrapper ' +
                  (this.props.readOnly ? 'filled ' : '')
                }
              >
                <Text
                  showClearButton={true}
                  {...textProps}
                  {...(this.props.id && {
                    id: this.props.id + '-text-input',
                  })}
                  ref={this.textRef}
                  required={
                    this.props.tags.length > 0 ? false : this.props.required
                  }
                  className={
                    'tags-input__text-input ' +
                    (textProps.className ? textProps.className : '')
                  }
                  onKeyDown={this.onKeyDown(suggestions)}
                  onErrorsChanged={this.onTextErrorsChanged}
                  onChange={this.onTextChanged}
                  onFocus={this.onFocus}
                  onBlur={this.onBlur}
                  value={this.state.value}
                  readOnly={this.props.readOnly}
                  showValidation={false}
                  ignoreContext={true}
                  validators={this.props.validators}
                  customValidators={this.props.customValidators}
                  before={LeaveMobileButton}
                />
                {this.state.suggestionsVisible &&
                  this.props.showSuggestions && (
                    <TagsSuggestions<IdT, T>
                      {...(this.props.id && {
                        id: this.props.id + '-text-input',
                      })}
                      className={classNames(
                        this.props.tagsSuggestionsClassName
                      )}
                      innerRef={this.suggestionsRef}
                      anchorEl={this.containerRef.current}
                      allowNew={this.props.allowNew}
                      preselectedSuggestion={this.state.preselectedSuggestion}
                      loading={
                        this.state.fetchingExistingTags || this.props.isLoading
                      }
                      LoadingComponent={this.props.suggestionsLoadingComponent}
                      isVisible={this.state.suggestionsVisible}
                      EmptyComponent={
                        this.props.suggestionsEmptyComponent ??
                        translations.suggestionsEmptyComponent
                      }
                      EmptyAllowNewComponent={
                        this.props.suggestionsEmptyAllowNewComponent ??
                        translations.suggestionsEmptyAllowNewComponent
                      }
                      WaitingForMoreInputComponent={
                        this.props.waitingForMoreInputComponent ??
                        translations.waitingForMoreInputComponent
                      }
                      isWaitingForMoreInput={
                        this.state.value.length < this.props.minLettersToFetch
                      }
                      tags={suggestions}
                      getTagId={this.props.getTagId}
                      onSelected={this.onSuggestionSelected}
                      value={this.state.value}
                      AddNewTagComponent={
                        this.props.allowNew &&
                        this.state.value !== '' &&
                        (!this.props.existingTags ||
                          !this.props.existingTags.find(
                            (e) => this.props.getName(e) === this.state.value
                          )) &&
                        (!this.state.fetchedExistingTags ||
                          !this.state.fetchedExistingTags.find(
                            (e) => this.props.getName(e) === this.state.value
                          )) &&
                        this.state.textIsValid && (
                          <Button
                            {...(this.props.id && {
                              id: this.props.id + '-add-new-button',
                            })}
                            className="tags-input__suggestion tags-input__add-new"
                            dropdown={true}
                            onClick={this.addNewTag}
                          >
                            {translations.addNew} "{this.state.value}"
                          </Button>
                        )
                      }
                      SuggestionTag={this.props.SuggestionTag}
                      popperProps={this.props.popperProps}
                      getName={this.props.getName}
                      textIsFocused={this.state.textIsFocused}
                    />
                  )}
              </div>
            )}
            {this.renderDefaultValidation()}
            {this.props.label && (
              <label
                className={
                  this.state.value !== '' ||
                  this.state.textIsFocused ||
                  this.props.readOnly ||
                  this.props.tags.length >= this.props.maxTags ||
                  showMobileVersion
                    ? 'label--focused'
                    : ''
                }
              >
                {this.renderLabel()}
              </label>
            )}
          </div>
        </InputGroup>
      </Portal>
    );
  }

  private onTextErrorsChanged = (textErrors: ValidationError[]) =>
    this.setState(
      () => ({ textErrors }),
      () => this.handleErrors()
    );

  private onFocus = () => {
    this.props.onFocus?.();
    if (!this.state.suggestionsVisible) {
      this.props.onSuggestionsOpened?.();
    }
    this.fetchExistingTags(this.state.value);
    this.setState(
      () => ({ textIsFocused: true, suggestionsVisible: true, touched: true }),
      () => this.handleErrors()
    );
    const showMobileVersion =
      this.props.mobileVersionEnabled &&
      this.isMobile &&
      (this.state.textIsFocused || this.state.suggestionsVisible);
    if (
      !showMobileVersion &&
      this.props.mobileVersionEnabled &&
      this.isMobile
    ) {
      setTimeout(() => this.textRef.current?.focus(), 100);
    }
  };

  private onKeyDown = (suggestions: T[]) => async (e: React.KeyboardEvent) => {
    if (e.key === 'Tab') {
      this.setState({
        suggestionsVisible: false,
        preselectedSuggestion: undefined,
      });
    }
    if (
      e.key === 'Enter' &&
      (this.state.value !== '' ||
        this.state.preselectedSuggestion !== undefined) &&
      this.state.textErrors.length === 0
    ) {
      e.preventDefault();
      e.stopPropagation();
      const existingTag =
        this.props.existingTags &&
        this.props.existingTags.find(
          (et) => this.props.getName(et) === this.state.value
        );
      if (this.state.preselectedSuggestion !== undefined) {
        this.props.onTagsChanged(
          this.props.tags.concat(suggestions[this.state.preselectedSuggestion])
        );
        this.setState({ value: '', preselectedSuggestion: undefined }, () => {
          this.fetchExistingTags();
          this.handleErrors();
        });
      } else if (existingTag) {
        this.props.onTagsChanged(this.props.tags.concat(existingTag));
        this.setState({ value: '' }, () => {
          this.fetchExistingTags();
          this.handleErrors();
        });
      } else if (this.props.allowNew) {
        await this.addNewTag();
        this.handleErrors();
      }
    }
    if (suggestions.length > 0 && this.state.suggestionsVisible) {
      if (e.key === 'ArrowUp') {
        const preselectedSuggestion =
          this.state.preselectedSuggestion === undefined
            ? suggestions.length - 1
            : this.state.preselectedSuggestion === 0
            ? suggestions.length - 1
            : this.state.preselectedSuggestion - 1;
        this.setState({ preselectedSuggestion });
      } else if (e.key === 'ArrowDown') {
        const preselectedSuggestion =
          this.state.preselectedSuggestion === undefined
            ? 0
            : this.state.preselectedSuggestion === suggestions.length - 1
            ? 0
            : this.state.preselectedSuggestion + 1;
        this.setState({ preselectedSuggestion });
      } else {
        this.setState({ preselectedSuggestion: undefined });
      }
    }
  };

  private addNewTag = async () => {
    const newTag = await this.props.onNewTagAdded(this.state.value);
    this.setState({
      suggestionsVisible: this.props.closeSuggestionsAfterCreate
        ? false
        : this.state.suggestionsVisible,
    });
    if (newTag) {
      this.props.onTagsChanged(
        this.props.tags ? this.props.tags.concat(newTag) : [newTag]
      );
    }
    this.setState({ value: '', textErrors: [] }, () => {
      this.fetchExistingTags();
      this.handleErrors();
    });
  };

  private onSuggestionSelected = (tag: T, lastSelected: boolean) => {
    const newTags = this.props.tags.concat(tag);
    this.props.onTagsChanged(newTags);
    const isMax = newTags.length === this.props.maxTags;
    const finalValue =
      !this.props.allowNew && !isMax && !lastSelected ? this.state.value : '';
    this.setState(
      {
        value: finalValue,
        suggestionsVisible:
          isMax || this.props.closeSuggestionsAfterCreate
            ? false
            : this.state.suggestionsVisible,
        preselectedSuggestion: undefined,
        textErrors: [],
      },
      () => {
        /*if (
          !this.props.maxTags ||
          this.props.tags.length + 1 < this.props.maxTags
        ) {
          this.fetchExistingTags(finalValue);
        }*/
        this.handleErrors();
        this.textRef.current?.focus();
      }
    );
  };

  private onBlur = () => {
    this.props.onBlur?.();
    this.setState(
      {
        textIsFocused: false,
        preselectedSuggestion: undefined,
      },
      () => this.handleErrors()
    );
  };

  private onTextChanged = (
    e: React.ChangeEvent<HTMLInputElement>,
    isValid: boolean
  ) => {
    const value = e.target.value;
    this.setState(
      () => ({
        value,
        isValid: isValid,
        textIsValid: isValid,
        suggestionsVisible: true,
      }),
      () => this.handleErrors()
    );
    this.fetchExistingTags(e.target.value);
  };

  private handleErrors = (tags: T[] = this.props.tags) => {
    let errors = this.getErrors(tags);
    if (errors.length > 0) {
      this.setInvalid(errors);
    } else {
      this.setValid();
    }
  };

  private getErrors(tags: T[]) {
    const translations = this.getTranslations(defaultTagsTranslations);
    let errors = [];
    if (tags.length < this.props.maxTags) {
      errors = errors.concat(this.state.textErrors);
    }
    if (this.state.value !== '' && tags.length === 0 && this.props.required) {
      errors = errors.concat(translations.required);
    }
    const valueNotAddedError =
      this.props.valueNotAddedError ?? translations.valueNotAddedError;
    if (
      this.state.value &&
      this.props.allowNew &&
      !this.state.textIsFocused &&
      valueNotAddedError
    ) {
      errors = errors.concat(valueNotAddedError);
    }
    const maxTagsSurpassedError =
      this.props.maxTagsSurpassedError ?? translations.maxTagsSurpassedError;
    if (
      this.props.maxTags < (this.props.tags && this.props.tags.length) &&
      maxTagsSurpassedError
    ) {
      errors = errors.concat(maxTagsSurpassedError);
    }
    return errors.filter((i) => i);
  }

  private fetchExistingTags(startsWith: string = '') {
    if (
      this.props.fetchExistingTags &&
      startsWith.length >= this.props.minLettersToFetch
    ) {
      const timer = setTimeout(
        () => this.setState(() => ({ fetchingExistingTags: true })),
        this.props.loadingDelayMs
      );
      this.props
        .fetchExistingTags(startsWith, this.props.tags)
        .then((fetchedExistingTags) => {
          clearTimeout(timer);
          this.setState(() => ({
            fetchedExistingTags,
            fetchingExistingTags: false,
          }));
        });
    }
  }

  private getSuggestions() {
    const existingTags: T[] = []
      .concat(this.props.existingTags ? this.props.existingTags : [])
      .concat(
        this.state.fetchedExistingTags ? this.state.fetchedExistingTags : []
      );
    const filteredTags = this.props.filterExistingTags(
      this.state.value ? this.state.value.toLowerCase() : '',
      existingTags,
      this.props.tags
    );
    let suggestions = filteredTags
      .filter(
        (tag) =>
          this.props.allowSameTagMultipleTimes ||
          !this.props.tags.some(
            (t) =>
              ((t as { id: IdT }).id ?? this.props.getTagId?.(t)) ===
              ((tag as { id: IdT }).id ?? this.props.getTagId?.(tag))
          )
      )
      .slice(0, this.props.maxSuggestions);
    return suggestions;
  }

  private renderTag(tag: T, index: number) {
    const body = (
      <>
        {this.props.getName(tag)}
        {!this.props.readOnly && (
          <Button
            {...(this.props.id && {
              id: this.props.id + '-tag-' + index.toString(),
            })}
            circular={true}
            blank={true}
            onClick={this.tagRemoveClick(tag)}
            className="ml-1 transform-rotate--45 line-height--0 p-0"
            Component={TagButtonComponent}
            preventsDefault={false}
          >
            <PlusIcon />
          </Button>
        )}
      </>
    );
    const className = classNames('tags-input__tag', {
      'tags-input__tag-chip': this.props.showChips,
    });
    if (this.props.onTagClick) {
      return (
        <Button
          onClick={this.tagClick(tag)}
          small={true}
          className={className}
          key={index}
        >
          {body}
        </Button>
      );
    }
    return (
      <div onClick={this.tagClick(tag)} className={className} key={index}>
        {body}
      </div>
    );
  }

  private tagClick = (tag: T) => () => {
    this.props.onTagClick && this.props.onTagClick(tag);
  };

  private tagRemoveClick = (tag: T) => (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    const newTags = this.props.tags.filter(
      (sv) =>
        ((sv as { id: IdT }).id ?? this.props.getTagId?.(sv)) !==
        ((tag as { id: IdT }).id ?? this.props.getTagId?.(tag))
    );
    /*if (newTags.length === 0) {
      setTimeout(() => this.focus(), 50);
    }
    this.setState({
      suggestionsVisible: false,
    });*/
    this.props.onTagsChanged && this.props.onTagsChanged(newTags);
    this.handleErrors(newTags);
    // this.fetchExistingTags();
    this.textRef.current?.focus();
  };
}

interface TagsFinal {
  <
    IdT extends number | string = number,
    T extends ResourceTConstraint<IdT> = Tag<IdT>
  >(
    item: TagsProps<IdT, T> & { ref?: React.Ref<TagsRaw<IdT, T>> }
  ): React.ReactElement;
  defaultProps?: Partial<TagsProps<any, any>>;
}

export const Tags = withThemeContext<TagsProps, InstanceType<typeof TagsRaw>>(
  // tslint:disable-next-line: no-any
  withFormContext<TagsProps>(TagsRaw),
  'tags'
) as unknown as TagsFinal;

export default Tags;
