import * as React from 'react';
import * as A from '../../application/ApplicationTypes';
import Tabs from '../../core/Tabs/Tabs';
import withStyles, { WithStyles } from '../../core/withStyles';
import withThemeSelector from '../../core/withThemeSelector';
import Hidden from '../../layout/Hidden';
import PresentationPreview from '../PresentationPreview';
import * as P from '../PresentationTypes';
import styles from './PresentationBuilderPreview.styles';

interface PresentationBuilderPreviewProps extends WithStyles<typeof styles> {
  appVersion?: A.AppVersion;
  previewMode: P.PreviewMode;
  onPreviewModeChange: (previewMode: P.PreviewMode) => any;
}
interface PresentationBuilderPreviewState {}

class PresentationBuilderPreview extends React.Component<
  PresentationBuilderPreviewProps,
  PresentationBuilderPreviewState
> {
  static defaultProps = {
    appVersion: {
      name: '',
      iconUrl: '',
      strings: { description: '' },
    },
  };

  render() {
    const {
      classes,
      appVersion,
      previewMode,
      onPreviewModeChange,
      children,
    } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.preview}>
          <PresentationPreview previewMode={previewMode}>
            {children}
          </PresentationPreview>
        </div>
        <div className={classes.footer}>
          <div className={classes.app}>
            <div
              className={classes.appIcon}
              style={{
                backgroundImage: appVersion.iconUrl
                  ? `url(${appVersion.iconUrl})`
                  : '',
              }}
            />
            {appVersion.name && (
              <div>
                <div className={classes.appName}>{appVersion.name}</div>
                <div className={classes.appDescription}>
                  {/* This is the reason why we can't have a presentation property with the name 'description' */}
                  {appVersion.strings.description}
                </div>
              </div>
            )}
          </div>
          <Hidden smDown>
            <Tabs inline>
              <Tabs.Item
                icon="horizontalScreen"
                label="Horizontal"
                active={previewMode === P.PreviewMode.Horizontal}
                onClick={() => onPreviewModeChange(P.PreviewMode.Horizontal)}
              />
              <Tabs.Item
                icon="verticalScreen"
                label="Vertical"
                active={previewMode === P.PreviewMode.Vertical}
                onClick={() => onPreviewModeChange(P.PreviewMode.Vertical)}
              />
            </Tabs>
          </Hidden>
        </div>
      </div>
    );
  }
}

export default withThemeSelector(
  withStyles(styles)(PresentationBuilderPreview),
);
