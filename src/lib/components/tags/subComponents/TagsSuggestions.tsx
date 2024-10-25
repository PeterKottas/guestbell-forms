import * as React from 'react';
import { ResourceTConstraint, Tag } from '..';
import { Button } from '../../button';
import Popper, { PopperProps } from '@mui/material/Popper';
import classNames from 'classnames';

export type RenderSuggestionTagProps<
  IdT extends number | string = number,
  T extends ResourceTConstraint<IdT> = Tag<IdT>
> = {
  tag: T;
  index: number;
  id?: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  isPreselected: boolean;
  getName: (tag: T) => string;
};

export type SuggestionsProps<
  IdT extends number | string = number,
  T extends ResourceTConstraint<IdT> = Tag<IdT>
> = {
  className?: string;
  innerRef: React.RefObject<HTMLDivElement>;
  anchorEl: HTMLElement;
  id?: string;
  preselectedSuggestion?: number;
  isVisible: boolean;
  isWaitingForMoreInput: boolean;
  tags: T[];
  getTagId?: (tag: T) => IdT;
  onSelected: (tag: T, lastSelected: boolean) => void;
  value: string;
  loading: boolean;
  LoadingComponent?: string | JSX.Element;
  EmptyComponent?: string | JSX.Element;
  EmptyAllowNewComponent?: string | JSX.Element;
  AddNewTagComponent?: JSX.Element;
  WaitingForMoreInputComponent?: string | JSX.Element;
  allowNew: boolean;
  popperProps?: Partial<PopperProps>;
  SuggestionTag?: React.ComponentType<RenderSuggestionTagProps<IdT, T>>;
  getName: (tag: T) => string;
  textIsFocused?: boolean;
};

type InjectedProps = {};

const popperModifiers: PopperProps['modifiers'] = [
  {
    name: 'flip',
    enabled: true,
  },
];

function DefaultSuggestionTag<
  IdT extends number | string = number,
  T extends ResourceTConstraint<IdT> = Tag<IdT>
>({
  index,
  tag,
  id,
  onClick,
  isPreselected,
  getName,
}: RenderSuggestionTagProps<IdT, T>) {
  return (
    <li key={index}>
      <Button
        {...(id && {
          id: id + '-suggestion-' + index.toString(),
        })}
        className={
          'w-100 tags-input__suggestion ' +
          (isPreselected ? 'tags-input__suggestion--preselected' : '')
        }
        onClick={onClick}
        dropdown={true}
      >
        {getName(tag)}
      </Button>
    </li>
  );
}

function Suggestions<
  IdT extends number | string = number,
  T extends ResourceTConstraint<IdT> = Tag<IdT>
>(props: SuggestionsProps<IdT, T> & InjectedProps) {
  const { onSelected } = props;
  const onSelectedFactory = React.useCallback(
    (tag: T, lastSelected: boolean) => (e: React.MouseEvent) => {
      onSelected(tag, lastSelected);
    },
    [onSelected]
  );
  const popperStyle = React.useMemo(
    () => ({
      width: props.anchorEl?.scrollWidth,
      zIndex: 10000,
    }),
    [props.anchorEl?.scrollWidth]
  );

  const { SuggestionTag = DefaultSuggestionTag } = props;
  return (
    props.anchorEl && (
      <Popper
        open={props.isVisible}
        anchorEl={props.anchorEl}
        style={popperStyle}
        placement="bottom-start"
        modifiers={popperModifiers}
        {...props.popperProps}
      >
        <div
          {...(props.id && {
            id: props.id,
          })}
          className={classNames('tags-input__suggestions', props.className, {
            'tags-input__suggestions--loading': props.loading,
          })}
          ref={props.innerRef}
        >
          <ul>
            {props.AddNewTagComponent}
            {props.loading && props.LoadingComponent}
            {props.isWaitingForMoreInput &&
              props.WaitingForMoreInputComponent && (
                <li className="w-100 text-center p-2">
                  {props.WaitingForMoreInputComponent}
                </li>
              )}
            {!props.isWaitingForMoreInput &&
              props.tags.map((tag, index) => (
                <SuggestionTag<IdT, T>
                  key={tag.id ?? this.props.getTagId?.(tag) ?? index}
                  index={index}
                  tag={tag}
                  onClick={onSelectedFactory(tag, props.tags.length === 1)}
                  id={props.id}
                  isPreselected={
                    props.preselectedSuggestion !== undefined &&
                    props.preselectedSuggestion === index
                  }
                  getName={props.getName}
                />
              ))}
            {props.EmptyComponent &&
              props.tags.length === 0 &&
              !props.allowNew &&
              !props.isWaitingForMoreInput && (
                <li className="w-100 text-center p-2">
                  {props.EmptyComponent}
                </li>
              )}
            {props.EmptyAllowNewComponent &&
              props.tags.length === 0 &&
              props.value.length === 0 &&
              props.allowNew &&
              props.textIsFocused && (
                <li className="w-100 text-center p-2">
                  {props.EmptyAllowNewComponent}
                </li>
              )}
          </ul>
        </div>
      </Popper>
    )
  );
}

const SuggestionsWrapped = Suggestions;

export default SuggestionsWrapped;
