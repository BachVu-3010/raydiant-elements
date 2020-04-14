import * as React from 'react';
import ScrollContext, { ScrollConsumerProps } from './ScrollContext';

const withScrollConsumer = <ComponentProps extends object>(
  Component: React.ComponentType<ComponentProps & ScrollConsumerProps>,
) =>
  (class extends React.Component<ComponentProps> {
    render() {
      return (
        <ScrollContext.Consumer>
          {({ scrollTop, scrollLeft, offsetHeight, offsetWidth }) => (
            <Component
              scrollTop={scrollTop}
              scrollLeft={scrollLeft}
              offsetHeight={offsetHeight}
              offsetWidth={offsetWidth}
              {...this.props}
            />
          )}
        </ScrollContext.Consumer>
      );
    }
  });

export default withScrollConsumer;
