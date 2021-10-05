import * as React from 'react';
import { Tag } from '..';
import { Button } from '../../..';
import Popper, { PopperProps } from '@material-ui/core/Popper';
import classNames from 'classnames';

export type SuggestionsProps = {
  className?: string;
  innerRef: React.RefObject<HTMLDivElement>;
  anchorEl: HTMLElement;
  id?: string;
  preselectedSuggestion?: number;
  isVisible: boolean;
  isWaitingForMoreInput: boolean;
  tags: Tag[];
  onSelected: (tag: Tag, lastSelected: boolean) => void;
  value: string;
  loading: boolean;
  LoadingComponent?: string | JSX.Element;
  EmptyComponent?: string | JSX.Element;
  AddNewTagComponent?: JSX.Element;
  WaitingForMoreInputComponent?: string | JSX.Element;
  allowNew: boolean;
  popperProps?: Partial<PopperProps>;
};

type InjectedProps = {};

const popperModifiers = { flip: { enabled: false } };

const Suggestions: React.FC<SuggestionsProps & InjectedProps> = props => {
  const { onSelected } = props;
  const onSelectedFactory = React.useCallback(
    (tag: Tag, lastSelected: boolean) => (e: React.MouseEvent) => {
      onSelected(tag, lastSelected);
    },
    [onSelected]
  );
  const popperStyle = React.useMemo(
    () => ({ width: props.anchorEl?.scrollWidth, zIndex: 10000 }),
    [props.anchorEl?.scrollWidth]
  );
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
                <li key={index}>
                  <Button
                    {...(props.id && {
                      id: props.id + '-suggestion-' + index.toString(),
                    })}
                    className={
                      'w-100 tags-input__suggestion ' +
                      (props.preselectedSuggestion !== undefined &&
                      props.preselectedSuggestion === index
                        ? 'tags-input__suggestion--preselected'
                        : '')
                    }
                    onClick={onSelectedFactory(tag, props.tags.length === 1)}
                    dropdown={true}
                  >
                    {tag.name}
                  </Button>
                </li>
              ))}
            {props.EmptyComponent &&
              props.tags.length === 0 &&
              !props.allowNew &&
              !props.isWaitingForMoreInput && (
                <li className="w-100 text-center p-2">
                  {props.EmptyComponent}
                </li>
              )}
          </ul>
        </div>
      </Popper>
    )
  );
};

const SuggestionsWrapped = Suggestions;

export default SuggestionsWrapped;
