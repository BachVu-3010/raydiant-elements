import cn from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import styles from './Text.styles';

interface TextProps extends WithStyles<typeof styles> {
  muted?: boolean;
}

export const Text: React.SFC<TextProps> = ({ muted, children, classes }) => (
  <span className={cn(classes.root, muted && classes.muted)}>{children}</span>
);

export default withStyles(styles)(Text);
