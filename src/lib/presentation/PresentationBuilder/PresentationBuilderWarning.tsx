import * as React from 'react';
import AlertIcon from '../../core/AlertIcon';
import withStyles, { WithStyles } from '../../core/withStyles';
import withThemeSelector from '../../core/withThemeSelector';
import styles from './PresentationBuilderWarning.styles';

interface PresentationBuilderWarningProps extends WithStyles<typeof styles> {}

const PresentationBuilderWarning: React.SFC<
  PresentationBuilderWarningProps
> = ({ classes, children }) => (
  <div className={classes.root}>
    <AlertIcon color="default" className={classes.icon} />
    {children}
  </div>
);

export default withThemeSelector(
  withStyles(styles)(PresentationBuilderWarning),
);
