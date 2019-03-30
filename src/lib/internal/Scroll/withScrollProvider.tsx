import * as React from 'react';
import rafThrottle from '../../helpers/rafThrottle';
import ScrollContext from './ScrollContext';

export interface ScrollProviderProps {
  onScroll: React.ReactEventHandler<HTMLElement>;
}

export interface ScrollProviderState {
  scrollTop?: number;
  scrollLeft?: number;
  offsetHeight?: number;
  offsetWidth?: number;
}

const withScrollProvider = <ComponentProps extends object>(
  Component: React.ComponentType<ComponentProps & ScrollProviderProps>,
) =>
  class extends React.Component<ComponentProps, ScrollProviderState> {
    ref: React.RefObject<HTMLElement> = React.createRef();

    state: ScrollProviderState = {
      scrollTop: 0,
      scrollLeft: 0,
      offsetHeight: 0,
      offsetWidth: 0,
    };

    handleScroll: React.ReactEventHandler<HTMLElement> = rafThrottle(
      ({
        currentTarget: { scrollTop, scrollLeft, offsetHeight, offsetWidth },
      }) => {
        this.setState({
          scrollTop,
          scrollLeft,
          offsetHeight,
          offsetWidth,
        });
      },
    );

    render() {
      const { scrollTop, scrollLeft, offsetHeight, offsetWidth } = this.state;
      return (
        <ScrollContext.Provider
          value={{
            scrollTop,
            scrollLeft,
            offsetHeight,
            offsetWidth,
          }}
        >
          <Component onScroll={this.handleScroll} {...this.props} />
        </ScrollContext.Provider>
      );
    }
  };

export default withScrollProvider;
