import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import ThemeProvider from '../../styles/ThemeProvider';
import Tabs from '../Tabs';
import Tab from '../Tab';
import PresentationPreview from './PresentationPreview';

class PresentationBuilderPreview extends React.Component {
  static propTypes = {
    /** Class name(s) */
    className: PropTypes.string,
    /** The application definition */
    application: PropTypes.shape({
      name: PropTypes.string,
      icon_url: PropTypes.string,
      strings: PropTypes.shape({
        description: PropTypes.string,
      }),
    }).isRequired,
    /** The preview layout */
    previewMode: PropTypes.oneOf(['horizontal', 'vertical']),
    /** The node to render inside the preview */
    children: PropTypes.node,
    /** Called when the preview mode has changed */
    onPreviewModeChange: PropTypes.func.isRequired,
    /** @ignore injected by withStyles */
    classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  };

  static defaultProps = {
    className: '',
    application: null,
    previewMode: 'horizontal',
    disablePreview: false,
    children: null,
  };

  state = {
    previewBounds: null,
  };

  render() {
    const {
      className,
      application,
      previewMode,
      children,
      onPreviewModeChange,
      classes,
    } = this.props;

    return (
      <ThemeProvider theme="dark">
        <div className={classnames(classes.container, className)}>
          <div className={classes.previewContainer}>
            <PresentationPreview previewMode={previewMode}>
              {children}
            </PresentationPreview>
          </div>
          <div className={classes.footer}>
            <div className={classes.app}>
              <div
                className={classes.icon}
                style={{
                  backgroundImage: `url(${application.icon_url})`,
                }}
              />
              {application.name && (
                <div>
                  <div className={classes.appName}>{application.name}</div>
                  <div className={classes.appDescription}>
                    {application.strings.description}
                  </div>
                </div>
              )}
            </div>
            <Tabs>
              <Tab
                icon="horizontalScreen"
                label="Horizontal"
                active={previewMode === 'horizontal'}
                onClick={() => onPreviewModeChange('horizontal')}
              />
              <Tab
                icon="verticalScreen"
                label="Vertical"
                active={previewMode === 'vertical'}
                onClick={() => onPreviewModeChange('vertical')}
              />
            </Tabs>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

const styles = theme => ({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.primary[800],
    color: '#fff',
  },

  previewContainer: {
    flex: 1,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
  },

  footer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    padding: '0 16px',
  },

  app: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '14px 20px 14px 0',
  },

  icon: {
    flexShrink: 0,
    height: 48,
    width: 48,
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 12,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: '#000',
    // Fixes webkit bug with overflow hidden and border-radius
    // https://stackoverflow.com/a/37614307/1249098
    transform: 'translateY(0)',
  },

  appName: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize,
    lineHeight: 1.71,
    color: 'rgba(255, 255, 255, 0.7)',
  },

  appDescription: {
    fontFamily: theme.typography.fontFamily,
    fontSize: 12,
  },
});

export default withStyles(styles)(PresentationBuilderPreview);
