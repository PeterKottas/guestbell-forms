//Styles
import './tags.scss';

//Libs
import onClickOutside, { InjectedOnClickOutProps } from 'react-onclickoutside';
import * as React from 'react';
import * as BaseInput from '../base/BaseInput';
import { InputGroup } from '../inputGroup/InputGroup';
import { Text } from '../text/Text';
import { TextProps } from './../text/Text.d';
import { Button } from '../../../buttons/Button';
import * as PlusIcon from 'material-design-icons/content/svg/production/ic_add_circle_outline_24px.svg';

//Misc
export type Tag = {
    id: number | string;
    name: string;
};

export type TagsProps = {
    className?: string;
    disabled?: boolean;
    tags: Tag[];
    existingTags?: Tag[];
    onTagsChanged: (newTags: Tag[]) => void;
    onNewTagAdded?: (newTagName: string) => Tag;
    allowNew?: boolean;
    textProps?: TextProps;
    readOnly?: boolean;
    readonlyEmptyPlaceholder?: string;
    maxTags?: number;
    valueNotAddedError?: (string | JSX.Element);
} & BaseInput.BaseInputProps;

export interface TagsState extends BaseInput.BaseInputState {
    textIsFocused: boolean;
    suggestionsVisible: boolean;
}

type SuggestionsProps = {
    isVisible: boolean;
    tags: Tag[];
    onSelected: (tag: Tag) => void;
    onClickOutside: () => void;
    value: string;
};

type InjectedProps = InjectedOnClickOutProps;
class Suggestions extends React.Component<SuggestionsProps & InjectedProps> {
    public render() {
        return this.props.isVisible ? (
            <div className="tags-input__suggestions">
                <ul>
                    {this.props.tags.map((tag, index) => (
                        <li key={index}>
                            <Button
                                className="w-100"
                                type="dropdown"
                                onClick={e => this.props.onSelected(tag)}
                            >
                                {tag.name}
                            </Button>
                        </li>
                    ))}
                    {(this.props.tags.length === 0) && <li className="w-100 text-center p-2">No existing tags</li>}
                </ul>
            </div>
        ) : null;
    }

    public handleClickOutside(evt) {
        this.props.onClickOutside();
    }
};

const SuggestionsWrapped = onClickOutside<SuggestionsProps>(Suggestions);

export class Tags extends BaseInput.BaseInput<TagsProps, TagsState>  {
    public static defaultProps: TagsProps = {
        disabled: false,
        className: '',
        tags: [],
        existingTags: [],
        maxTags: 1000,
        onTagsChanged: () => undefined,
        onNewTagAdded: (newTagName) => ({ name: newTagName, id: new Date().getTime() }),
        valueNotAddedError: <span>Press <b>ENTER</b> to confirm</span>
    }

    constructor(props: TagsProps) {
        super(props);
        this.state = { ...this.state, textIsFocused: false, suggestionsVisible: false };
    }

    public render() {
        const textProps = this.props.textProps ? this.props.textProps : {};
        const suggestions = this.props.existingTags ? this.props.existingTags.
            filter(tag => tag.name && tag.name.toLowerCase().startsWith(this.state.value ? this.state.value.toLowerCase() : '')).
            filter(tag => !this.props.tags.some(t => t.id === tag.id)).
            slice(0, 5) : [];
        return (
            <InputGroup title={this.props.title}>
                <div className={'input__base tags-input ' + this.getValidationClass() + (this.props.className ? ' ' + this.props.className : '') + ' ' + (this.props.readOnly ? 'readonly' : '')}>
                    {this.renderTags()}
                    {(!this.props.maxTags || (this.props.maxTags > (this.props.tags && this.props.tags.length))) && !this.props.readOnly &&
                        <div className="tags-input__tags__wrapper">
                            <Text
                                {...textProps}
                                className="tags-input__text-input"
                                onKeyDown={e => {
                                    if (e.key === 'Enter' && this.state.value !== '' && this.state.valid) {
                                        e.preventDefault();
                                        e.stopPropagation();

                                        if (this.props.allowNew) {
                                            this.props.onTagsChanged(this.props.tags.concat(this.props.onNewTagAdded(this.state.value)));
                                            this.setState({ value: '' });
                                        }
                                    }
                                }}
                                onChange={(e, isValid) => {
                                    this.setState({ suggestionsVisible: true });
                                    this.handleChange(e);
                                    if (!isValid) {
                                        this.setInvalid();
                                    } else {
                                        this.setValid();
                                    }
                                }}
                                onFocus={e => {
                                    this.setState({ textIsFocused: true });
                                    if (this.props.existingTags && this.props.existingTags.length > 0) {
                                        this.setState({ suggestionsVisible: true });
                                    }
                                }}
                                onBlur={() => this.setState({ textIsFocused: false })}
                                value={this.state.value}
                                readOnly={this.props.readOnly}
                                errors={this.state.value ? this.props.errors.concat(this.props.valueNotAddedError) : this.props.errors}
                            />
                            {this.props.existingTags && this.props.existingTags.length > 0 && <SuggestionsWrapped
                                isVisible={this.state.suggestionsVisible}
                                tags={suggestions}
                                onSelected={tag => {
                                    this.props.onTagsChanged(this.props.tags.concat(tag));
                                    this.setState({ value: '' });
                                }}
                                onClickOutside={() => this.setState({ suggestionsVisible: false })}
                                value={this.state.value}
                            />}
                        </div >
                    }
                    {this.props.label && <label className={((this.state.value !== '')
                        || (this.state.textIsFocused) || (this.props.tags.length >= this.props.maxTags)) ? 'label--focused' : ''}
                    >{this.props.label}</label>}
                </div>
            </InputGroup >
        );
    }

    private renderTag(tag: Tag, index: number) {
        return (
            <div
                className="tags-input__tag"
                key={index}
            >
                {tag.name}
                {!this.props.readOnly && <Button
                    circular={true}
                    type={'blank--light'}
                    onClick={() => this.props.onTagsChanged && this.props.onTagsChanged(this.props.tags.filter(sv => sv.id !== tag.id))}
                    className="ml-1 transform-rotate--45 line-height--0 p-0"
                >
                    <PlusIcon />
                </Button>}
            </div>
        );
    }

    private renderTags() {
        return this.props.tags && this.props.tags.length > 0 ?
            <div className="tags-input__tag__wrapper">{this.props.tags.map((item, index) => (
                this.renderTag(item, index)
            ))}
            </div>
            :
            this.props.readOnly && <div className="tags-input__tag__wrapper">
                <div className="tags-input__tag">
                    {this.props.readonlyEmptyPlaceholder}
                </div>
            </div>
    }
}
export default Tags;
