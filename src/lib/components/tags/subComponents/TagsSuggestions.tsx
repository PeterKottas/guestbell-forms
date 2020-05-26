import * as React from 'react';
import onClickOutside, { InjectedOnClickOutProps } from 'react-onclickoutside';
import { Tag } from '..';
import { Button } from '../../..';

export type SuggestionsProps = {
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
};

type InjectedProps = InjectedOnClickOutProps;
class Suggestions extends React.PureComponent<
  SuggestionsProps & InjectedProps
> {
  public render() {
    return this.props.isVisible ? (
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
    ) : null;
  }

  public handleClickOutside() {
    this.props.onClickOutside();
  }

  private onSelected = (tag: Tag) => () => this.props.onSelected(tag);
}

const SuggestionsWrapped = onClickOutside(Suggestions);

export default SuggestionsWrapped;
