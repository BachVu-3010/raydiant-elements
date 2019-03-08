import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import { testAttr } from '../../helpers';
import PresentationPreview from '../../presentation/PresentationPreview';
import * as P from '../../presentation/PresentationTypes';
import * as D from '../DeviceTypes';
import styles from './ScreenPreview.styles';

interface ScreenPreviewProps extends WithStyles<typeof styles> {
  name: string;
  orientation: D.ScreenOrientation;
  presentation?: P.Presentation;
}

export const ScreenPreview: React.SFC<ScreenPreviewProps> = ({
  name,
  orientation,
  presentation,
  children,
  classes,
}) => (
  <div className={classes.root}>
    <div className={classes.header}>
      <h1 className={classes.screenName}>{name}</h1>
    </div>
    <div className={classes.preview}>
      <PresentationPreview
        showBorder
        previewMode={
          orientation === 'normal'
            ? P.PreviewMode.Horizontal
            : P.PreviewMode.Vertical
        }
      >
        {children}
      </PresentationPreview>
    </div>
    <div className={classes.footer}>
      {presentation && (
        <>
          <div
            className={classes.presentationName}
            {...testAttr('presentation-preview-presentation-name')}
          >
            {presentation.name}
          </div>
          <div
            className={classes.applicationName}
            {...testAttr('presentation-preview-application-name')}
          >
            {presentation.applicationName}
          </div>
        </>
      )}
    </div>
  </div>
);

export default withStyles(styles)(ScreenPreview);
