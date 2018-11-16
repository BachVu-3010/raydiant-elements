import * as React from 'react';
import Icon from '../../../core/Icon';
import withStyles, { WithStyles } from '../../../core/withStyles';
import styles from './RemoveButton.styles';

interface RemoveButtonProps extends WithStyles<typeof styles> {
  onClick: () => any;
}

const RemoveButton: React.SFC<RemoveButtonProps> = ({ classes, onClick }) => (
  <button className={classes.root} onClick={onClick}>
    <Icon icon="trash" />
  </button>
);

export default withStyles(styles)(RemoveButton);
