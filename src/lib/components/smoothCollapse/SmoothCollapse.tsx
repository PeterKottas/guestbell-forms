// lib copied from https://github.com/StreakYC/react-smooth-collapse because the npm package they provide didn't work with webpack 4

import * as React from 'react';
import Kefir from 'kefir';
import kefirBus from 'kefir-bus';

import getTransitionTimeMs from './getTransitionTimeMs';

export type SmoothCollapseProps = {
  expanded: boolean;
  onChangeEnd?: () => void;
  collapsedHeight?: string;
  heightTransition?: string;
  className?: string;
  allowOverflowWhenOpen?: boolean;
  allowDisplayWhenClosed?: boolean;
};
type State = {
  hasBeenVisibleBefore: boolean;
  fullyClosed: boolean;
  height: string;
};

export class SmoothCollapse extends React.PureComponent<
  SmoothCollapseProps,
  State
> {
  static defaultProps = {
    collapsedHeight: '0',
    heightTransition: '.25s ease',
    className: '',
    allowOverflowWhenOpen: false,
  };
  _resetter = kefirBus();
  _mainEl: HTMLElement = null;
  _innerEl: HTMLElement = null;

  constructor(props: SmoothCollapseProps) {
    super(props);
    this.state = {
      hasBeenVisibleBefore: props.expanded || this._visibleWhenClosed(props),
      fullyClosed: !props.expanded,
      height: props.expanded ? 'auto' : props.collapsedHeight,
    };
  }
  _mainElSetter = (el?: HTMLElement) => {
    this._mainEl = el;
  };
  _innerElSetter = (el?: HTMLElement) => {
    this._innerEl = el;
  };

  _visibleWhenClosed(props?: SmoothCollapseProps) {
    if (!props) {
      props = this.props;
    }
    return (
      parseFloat(props.collapsedHeight) !== 0 || props.allowDisplayWhenClosed
    );
  }

  componentWillUnmount() {
    this._resetter.emit(null);
  }

  componentDidUpdate(oldProps: SmoothCollapseProps) {
    if (!oldProps.expanded && this.props.expanded) {
      this._resetter.emit(null);

      // In order to expand, we need to know the height of the children, so we
      // need to setState first so they get rendered before we continue.

      this.setState(
        {
          fullyClosed: false,
          hasBeenVisibleBefore: true,
        },
        () => {
          const mainEl = this._mainEl;
          const innerEl = this._innerEl;
          if (!mainEl || !innerEl) {
            throw new Error('Should not happen');
          }

          // Set the collapser to the target height instead of auto so that it
          // animates correctly. Then switch it to 'auto' after the animation so
          // that it flows correctly if the page is resized.
          const targetHeight = `${innerEl.clientHeight}px`;
          this.setState({
            height: targetHeight,
          });

          // Wait until the transitionend event, or until a timer goes off in
          // case the event doesn't fire because the browser doesn't support it
          // or the element is hidden before it happens. The timer is a little
          // longer than the transition is supposed to take to make sure we don't
          // cut the animation early while it's still going if the browser is
          // running it just a little slow.
          Kefir.fromEvents(mainEl, 'transitionend')
            .merge(
              Kefir.later(
                getTransitionTimeMs(this.props.heightTransition) * 1.1 + 500
              )
            )
            .takeUntilBy(this._resetter)
            .take(1)
            .onValue(() => {
              this.setState(
                {
                  height: 'auto',
                },
                () => {
                  if (this.props.onChangeEnd) {
                    this.props.onChangeEnd();
                  }
                }
              );
            });
        }
      );
    } else if (oldProps.expanded && !this.props.expanded) {
      this._resetter.emit(null);

      if (!this._innerEl) {
        throw new Error('Should not happen');
      }
      this.setState(
        {
          height: `${this._innerEl.clientHeight}px`,
        },
        () => {
          const mainEl = this._mainEl;
          if (!mainEl) {
            throw new Error('Should not happen');
          }

          // tslint:disable-next-line:no-unused-expression
          mainEl.clientHeight; // force the page layout
          this.setState({
            height: this.props.collapsedHeight,
          });

          // See comment above about previous use of transitionend event.
          Kefir.fromEvents(mainEl, 'transitionend')
            .merge(
              Kefir.later(
                getTransitionTimeMs(this.props.heightTransition) * 1.1 + 500
              )
            )
            .takeUntilBy(this._resetter)
            .take(1)
            .onValue(() => {
              this.setState({
                fullyClosed: true,
              });
              if (this.props.onChangeEnd) {
                this.props.onChangeEnd();
              }
            });
        }
      );
    } else if (
      !this.props.expanded &&
      this.props.collapsedHeight !== oldProps.collapsedHeight
    ) {
      this.setState({
        hasBeenVisibleBefore:
          this.state.hasBeenVisibleBefore || this._visibleWhenClosed(oldProps),
        height: this.props.collapsedHeight,
      });
    }
  }

  render() {
    const visibleWhenClosed = this._visibleWhenClosed();
    const { allowOverflowWhenOpen } = this.props;
    const { height, fullyClosed, hasBeenVisibleBefore } = this.state;
    const innerEl = hasBeenVisibleBefore ? (
      <div
        ref={this._innerElSetter}
        style={{
          overflow:
            allowOverflowWhenOpen && height === 'auto' ? 'visible' : 'hidden',
        }}
      >
        {this.props.children}
      </div>
    ) : null;

    return (
      <div
        ref={this._mainElSetter}
        className={this.props.className}
        style={{
          height,
          overflow:
            allowOverflowWhenOpen && height === 'auto' ? 'visible' : 'hidden',
          display: fullyClosed && !visibleWhenClosed ? 'none' : null,
          transition: `height ${this.props.heightTransition}`,
          position: 'relative',
        }}
      >
        {innerEl}
      </div>
    );
  }
}

export default SmoothCollapse;
