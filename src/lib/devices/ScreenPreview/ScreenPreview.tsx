import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import { testAttr } from '../../helpers';
import * as P from '../../presentation/PresentationTypes';
import styles from './ScreenPreview.styles';

interface ScreenPreviewProps extends WithStyles<typeof styles> {
  name?: string;
  presentation?: P.Presentation;
}

export const ScreenPreview: React.SFC<ScreenPreviewProps> = ({
  name,
  presentation,
  children,
  classes,
}) => (
  <div className={classes.root}>
    {name && (
      <div className={classes.header}>
        <h1 className={classes.screenName}>{name}</h1>
      </div>
    )}
    <div className={classes.preview}>{children}</div>
    {presentation && (
      <div className={classes.footer}>
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
      </div>
    )}
  </div>
);

export default withStyles(styles)(ScreenPreview);
