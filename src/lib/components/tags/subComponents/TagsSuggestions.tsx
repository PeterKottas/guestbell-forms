import * as React from 'react';
import onClickOutside, { InjectedOnClickOutProps } from 'react-onclickoutside';
import { Tag } from '..';
import { Button } from '../../..';
import Popper, { PopperProps } from '@material-ui/core/Popper';

export type SuggestionsProps = {
  anchorEl: HTMLElement;
  id?: string;
  preselectedSuggestion?: number;
  isVisible: boolean;
  tags: Tag[];
  onSelected: (tag: Tag) => void;
  onClickOutside: () => void;
  value: string;
  loading: boolean;
  LoadingComponent?: string | JSX.Element;
  EmptyComponent?: string | JSX.Element;
  AddNewTagComponent?: JSX.Element;
  allowNew: boolean;
  popperProps?: Partial<PopperProps>;
};

interface SuggestionsState {
  key: number;
}

type InjectedProps = InjectedOnClickOutProps;
class Suggestions extends React.Component<
  SuggestionsProps & InjectedProps,
  SuggestionsState
> {
  constructor(props: SuggestionsProps & InjectedProps) {
    super(props);
    this.state = { key: 0 };
    this.onSelected = this.onSelected.bind(this);
  }
  public render() {
    return (
      <Popper
        key={this.state.key}
        open={this.props.isVisible}
        anchorEl={this.props.anchorEl}
        style={{ width: this.props.anchorEl?.scrollWidth, zIndex: 10000 }}
        placement="bottom-start"
        modifiers={{ flip: { enabled: false } }}
        {...this.props.popperProps}
      >
        <div
          {...(this.props.id && {
            id: this.props.id,
          })}
          className="tags-input__suggestions"
        >
          <ul>
            {this.props.AddNewTagComponent}
            {this.props.loading && this.props.LoadingComponent && (
              <li className="w-100 text-center p-2">
                {this.props.LoadingComponent}
              </li>
            )}
            {!this.props.loading &&
              this.props.tags.map((tag, index) => (
                <li key={index}>
                  <Button
                    {...(this.props.id && {
                      id: this.props.id + '-suggestion-' + index.toString(),
                    })}
                    className={
                      'w-100 tags-input__suggestion ' +
                      (this.props.preselectedSuggestion !== undefined &&
                      this.props.preselectedSuggestion === index
                        ? 'tags-input__suggestion--preselected'
                        : '')
                    }
                    onClick={this.onSelected(tag)}
                    dropdown={true}
                  >
                    {tag.name}
                  </Button>
                </li>
              ))}
            {!this.props.loading &&
              this.props.EmptyComponent &&
              this.props.tags.length === 0 &&
              !this.props.allowNew && (
                <li className="w-100 text-center p-2">
                  {this.props.EmptyComponent}
                </li>
              )}
          </ul>
        </div>
      </Popper>
    );
  }

  public handleClickOutside() {
    this.props.onClickOutside();
  }

  private onSelected = (tag: Tag) => () => {
    this.setState({ key: this.state.key + 1 });
    this.props.onSelected(tag);
  };
}

const SuggestionsWrapped = onClickOutside(Suggestions);

export default SuggestionsWrapped;
