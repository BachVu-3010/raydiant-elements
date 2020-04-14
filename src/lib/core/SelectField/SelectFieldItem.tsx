import MUIMenuItem from '@material-ui/core/MenuItem';
import * as React from 'react';
import withStyles, { WithStyles } from '../withStyles';
import styles from './SelectFieldItem.styles';

export interface SeletFieldItemProps extends WithStyles<typeof styles> {
  thumbnailUrl?: string;
  value: string;
}

export class SeletFieldItem extends React.Component<SeletFieldItemProps> {
  render() {
    const { children, thumbnailUrl, classes, ...rest } = this.props;
    return (
      <MUIMenuItem {...rest}>
        {thumbnailUrl && (
          <img className={classes.thumbnail} src={thumbnailUrl} />
        )}
        <span>{children}</span>
      </MUIMenuItem>
    );
  }
}

export default withStyles(styles)(SeletFieldItem);
