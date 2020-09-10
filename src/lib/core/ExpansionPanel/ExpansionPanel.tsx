import MUIExpansionPanel from '@material-ui/core/ExpansionPanel';
import * as cn from 'classnames';
import * as React from 'react';

import withThemeSelector from '../../core/withThemeSelector';
import withStyles, { WithStyles } from '../withStyles';
import styles from './ExpansionPanel.styles';
import ExpansionPanelDetails from './ExpansionPanelDetails';
import ExpansionPanelSummary from './ExpansionPanelSummary';

interface ExpansionPanelProps extends WithStyles<typeof styles> {
  raised?: boolean;
  disabled?: boolean;
  onChange?: (event: React.FormEvent<EventTarget>, expanded: boolean) => any;
}

export const ExpansionPanel: React.SFC<ExpansionPanelProps> = ({
  children,
  disabled = false,
  raised = false,
  onChange = () => {
    return;
  },
  classes,
}) => {
  return (
    <MUIExpansionPanel
      elevation={raised ? 1 : 0}
      disabled={disabled}
      onChange={onChange}
      TransitionProps={{ unmountOnExit: true }}
      classes={{
        root: cn(classes.expansionPanel),
      }}
    >
      {children}
    </MUIExpansionPanel>
  );
};

export default Object.assign(
  withThemeSelector(withStyles(styles)(ExpansionPanel)),
  {
    Details: ExpansionPanelDetails,
    Summary: ExpansionPanelSummary,
  },
);
