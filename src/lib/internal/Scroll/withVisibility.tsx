import * as React from 'react';
import stateChanged from '../../helpers/stateChanged';
import { ScrollConsumerProps } from './ScrollContext';
import withScrollConsumer from './withScrollConsumer';

interface ComponentWithVisibilityState {
  isTopVisible: boolean;
  isBottomVisible: boolean;
  isLeftVisible: boolean;
  isRightVisible: boolean;
  isFullyVisible: boolean;
  isPartiallyVisible: boolean;
  isNotVisible: boolean;
}

interface VisibilityProps {
  isTopVisible: boolean;
  isBottomVisible: boolean;
  isLeftVisible: boolean;
  isRightVisible: boolean;
  isFullyVisible: boolean;
  isPartiallyVisible: boolean;
  isNotVisible: boolean;
  visibleElementRef: React.RefObject<HTMLElement>;
}

const withVisibility = <ComponentProps extends object>(
  Component: React.ComponentType<ComponentProps & Partial<VisibilityProps>>,
) => {
  class ComponentWithVisibility extends React.Component<
    ComponentProps & ScrollConsumerProps
  > {
    ref: React.RefObject<HTMLElement> = React.createRef();

    state: ComponentWithVisibilityState = {
      isTopVisible: false,
      isBottomVisible: false,
      isLeftVisible: false,
      isRightVisible: false,
      isFullyVisible: false,
      isPartiallyVisible: false,
      isNotVisible: false,
    };

    computeVisibilityProps() {
      const containerBounds = {
        top: this.props.scrollTop,
        bottom: this.props.scrollTop + this.props.offsetHeight,
        left: this.props.scrollLeft,
        right: this.props.scrollLeft + this.props.offsetWidth,
      };

      const elementBounds = {
        top: this.ref.current.offsetTop,
        bottom: this.ref.current.offsetTop + this.ref.current.scrollHeight,
        left: this.ref.current.offsetLeft,
        right: this.ref.current.offsetLeft + this.ref.current.scrollWidth,
      };

      const isAboveVisibleArea = elementBounds.bottom < containerBounds.top;
      const isBelowVisibleArea = elementBounds.top > containerBounds.bottom;
      const isLeftOfVisibleArea = elementBounds.right < containerBounds.left;
      const isRightOfVisibleArea = elementBounds.left > containerBounds.right;

      const isNotVisible =
        isAboveVisibleArea ||
        isBelowVisibleArea ||
        isLeftOfVisibleArea ||
        isRightOfVisibleArea;

      const isPartiallyVisible = !isNotVisible;

      const isHorizontallyOutOfBounds =
        isLeftOfVisibleArea || isRightOfVisibleArea;

      const isVerticallyOutOfBounds = isAboveVisibleArea || isBelowVisibleArea;

      const isTopVisible =
        !isBelowVisibleArea &&
        !isHorizontallyOutOfBounds &&
        elementBounds.top >= containerBounds.top;

      const isBottomVisible =
        !isAboveVisibleArea &&
        !isHorizontallyOutOfBounds &&
        elementBounds.bottom <= containerBounds.bottom;

      const isLeftVisible =
        !isRightOfVisibleArea &&
        !isVerticallyOutOfBounds &&
        elementBounds.left >= elementBounds.left;

      const isRightVisible =
        !isLeftOfVisibleArea &&
        !isVerticallyOutOfBounds &&
        elementBounds.right <= elementBounds.right;

      const isFullyVisible =
        isTopVisible && isBottomVisible && isLeftVisible && isRightVisible;

      const state = {
        isTopVisible,
        isBottomVisible,
        isLeftVisible,
        isRightVisible,
        isFullyVisible,
        isPartiallyVisible,
        isNotVisible,
      };

      if (stateChanged(state, this.state)) this.setState(state);
    }

    componentDidMount() {
      this.computeVisibilityProps();
    }

    componentDidUpdate() {
      this.computeVisibilityProps();
    }

    render() {
      const {
        isTopVisible,
        isLeftVisible,
        isRightVisible,
        isBottomVisible,
        isFullyVisible,
        isPartiallyVisible,
        isNotVisible,
      } = this.state;

      return (
        <Component
          isTopVisible={isTopVisible}
          isLeftVisible={isLeftVisible}
          isRightVisible={isRightVisible}
          isBottomVisible={isBottomVisible}
          isPartiallyVisible={isPartiallyVisible}
          isFullyVisible={isFullyVisible}
          isNotVisible={isNotVisible}
          visibleElementRef={this.ref}
          {...this.props}
        />
      );
    }
  }

  return withScrollConsumer(ComponentWithVisibility);
};

export default withVisibility;
