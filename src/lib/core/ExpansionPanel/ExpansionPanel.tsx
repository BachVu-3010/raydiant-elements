import MUIExpansionPanel from '@material-ui/core/ExpansionPanel';
import MUIExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import MUIExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MUIExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as cn from 'classnames';
import * as React from 'react';
import { testAttr } from '../../helpers';
import withThemeSelector from '../../core/withThemeSelector';
import withStyles, { WithStyles } from '../withStyles';
import styles from './ExpansionPanel.styles';

interface ExpansionPanelProps extends WithStyles<typeof styles> {
  summary: any;
  details: any;
  raised?: boolean;
  disabled?: boolean;
  expandIcon?: object;
  onChange?: (event: React.FormEvent<EventTarget>, expanded: boolean) => any;
  testId?: string;
}

export const ExpansionPanel: React.SFC<ExpansionPanelProps> = ({
  summary,
  details,
  disabled = false,
  raised = false,
  onChange = () => {
    return;
  },
  classes,
  expandIcon,
  testId
}) => {
  return (
    <MUIExpansionPanel
      elevation={raised ? 1 : 0}
      disabled={disabled}
      onChange={onChange}
      classes={{
        root: cn(classes.expansionPanel),
      }}
    >
      <MUIExpansionPanelSummary
        expandIcon={
          expandIcon !== undefined ? expandIcon : <MUIExpandMoreIcon />
        }
        {...testAttr(testId)}
      >
        {summary}
      </MUIExpansionPanelSummary>
      <MUIExpansionPanelDetails>{details}</MUIExpansionPanelDetails>
    </MUIExpansionPanel>
  );
};

export default withThemeSelector(withStyles(styles)(ExpansionPanel));
