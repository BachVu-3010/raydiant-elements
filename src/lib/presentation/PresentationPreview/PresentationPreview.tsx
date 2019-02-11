import * as cn from 'classnames';
import * as debounce from 'debounce';
import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import * as T from '../PresentationTypes';
import getLayoutProperties from './getLayoutProperties';
import styles from './PresentationPreview.styles';

interface PresentationPreviewProps extends WithStyles<typeof styles> {
  previewMode: T.PreviewMode;
  showBorder?: boolean;
}

interface PresentationPreviewState {
  containerWidth: number;
  containerHeight: number;
}

export class PresentationPreview extends React.Component<
  PresentationPreviewProps,
  PresentationPreviewState
> {
  previewRef: HTMLElement;
  updateBoundsDebounced: any;

  state = {
    containerWidth: 0,
    containerHeight: 0,
  };

  constructor(props: PresentationPreviewProps) {
    super(props);
    this.updateBoundsDebounced = debounce(this.updateBounds, 20);
  }

  updateBounds = () => {
    const {
      width: containerWidth,
      height: containerHeight,
    } = this.previewRef.getBoundingClientRect();

    this.setState({ containerWidth, containerHeight });
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateBoundsDebounced);
    window.addEventListener('orientationchange', this.updateBoundsDebounced);
  }

  componentDidUpdate(prevProps: PresentationPreviewProps) {
    if (prevProps.previewMode !== this.props.previewMode) {
      this.updateBounds();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateBoundsDebounced);
    window.removeEventListener('orientationchange', this.updateBoundsDebounced);
  }

  initPreview = (el: HTMLElement) => {
    this.previewRef = el;
    if (this.previewRef) {
      this.updateBounds();
    }
  };

  render() {
    const { showBorder, previewMode, children, classes } = this.props;
    const { containerWidth, containerHeight } = this.state;
    const layoutProps = getLayoutProperties(
      containerWidth,
      containerHeight,
      previewMode,
    );

    return (
      <div ref={this.initPreview} className={classes.root}>
        <div
          className={cn(classes.preview, showBorder && classes.border)}
          style={layoutProps}
        >
          {children}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PresentationPreview);
