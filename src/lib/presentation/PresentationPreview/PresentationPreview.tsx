import * as cn from 'classnames';
import * as debounce from 'debounce';
import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import * as T from '../PresentationTypes';
import styles from './PresentationPreview.styles';

interface PresentationPreviewProps extends WithStyles<typeof styles> {
  previewMode: T.PreviewMode;
  error?: React.ReactNode;
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
    const { showBorder, previewMode, children, classes, error } = this.props;
    const { containerWidth, containerHeight } = this.state;

    const isLandscape = previewMode === T.PreviewMode.Horizontal;
    const width = isLandscape ? 1920 : 1080;
    const height = isLandscape ? 1080 : 1920;
    const scaleX = containerWidth / width;
    const scaleY = containerHeight / height;
    const scale = Math.min(scaleX, scaleY);
    const marginTop = -(height / 2) * scale;
    const marginLeft = -(width / 2) * scale;
    const layoutProps = error
      ? {
          width: width * scale,
          height: height * scale,
          marginTop,
          marginLeft,
        }
      : {
          width,
          height,
          marginTop,
          marginLeft,
          transform: `scale(${scale})`,
        };

    return (
      <div ref={this.initPreview} className={classes.root}>
        <div
          className={cn(
            classes.preview,
            showBorder && classes.border,
            error && classes.error,
          )}
          style={layoutProps}
        >
          {error || children}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PresentationPreview);
