import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import debounce from 'debounce';
import { withStyles } from 'material-ui/styles';

export function getLayoutProperties(
  containerWidth,
  containerHeight,
  previewMode
) {
  const isLandscape = previewMode === 'horizontal';
  const width = isLandscape ? 1920 : 1080;
  const height = isLandscape ? 1080 : 1920;
  const scaleX = containerWidth / width;
  const scaleY = containerHeight / height;
  const scale = Math.min(scaleX, scaleY);
  const marginTop = -(height / 2) * scale;
  const marginLeft = -(width / 2) * scale;

  return {
    width,
    height,
    marginTop,
    marginLeft,
    transform: `scale(${scale})`,
  };
}

class PresentationPreview extends React.Component {
  static propTypes = {
    /** Class name(s) */
    className: PropTypes.string,
    /** The preview layout */
    previewMode: PropTypes.oneOf(['horizontal', 'vertical']),
    /** The node to render inside the preview */
    children: PropTypes.node,
    /** @ignore injected by withStyles */
    classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  };

  static defaultProps = {
    className: '',
    children: null,
    previewMode: 'horizontal',
  };

  state = {
    previewBounds: { width: 0, height: 0 },
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateBoundsDebounced);
    window.addEventListener('orientationchange', this.updateBoundsDebounced);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.previewMode !== this.props.previewMode) {
      this.updateBounds();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateBoundsDebounced);
    window.removeEventListener('orientationchange', this.updateBoundsDebounced);
  }

  updateBounds = () => {
    this.setState({
      previewBounds: this.previewRef.getBoundingClientRect(),
    });
  };

  updateBoundsDebounced = debounce(this.updateBounds, 20);

  initPreview = el => {
    this.previewRef = el;
    if (this.previewRef) {
      this.updateBounds();
    }
  };

  render() {
    const { className, previewMode, children, classes } = this.props;
    const { previewBounds } = this.state;

    const layoutProps = getLayoutProperties(
      previewBounds.width,
      previewBounds.height,
      previewMode
    );

    return (
      <div ref={this.initPreview} className={classes.container}>
        <div
          className={classnames(classes.preview, className)}
          style={layoutProps}
        >
          {children}
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },

  preview: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    background: '#000',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
    transformOrigin: 'top left',
  },
};

export default withStyles(styles)(PresentationPreview);
