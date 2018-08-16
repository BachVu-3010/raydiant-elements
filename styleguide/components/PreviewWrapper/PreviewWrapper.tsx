import * as React from 'react';
import withStyles, { WithStyles } from '../../../components/withStyles';
import styles from './PreviewWrapper.styles';

interface PreviewWrapperProps extends WithStyles<typeof styles> {}

const PreviewWrapper: React.SFC<PreviewWrapperProps> = ({
  children,
  classes,
}) => <div className={classes.root}>{children}</div>;

export default withStyles(styles)(PreviewWrapper);
