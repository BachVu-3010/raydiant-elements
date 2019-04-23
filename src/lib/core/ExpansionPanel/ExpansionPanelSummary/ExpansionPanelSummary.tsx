import MUIExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import * as React from 'react';
import { testAttr } from '../../../helpers';
import Icon from '../../Icon';
import withStyles, { WithStyles } from '../../withStyles';
import styles from './ExpansionPanelSummary.styles';

export interface ExpansionPanelSummaryProps extends WithStyles<typeof styles> {
  onClick?: (event: React.MouseEvent<any>) => any;
  testId?: string;
}

export const ExpansionPanelSummary: React.SFC<ExpansionPanelSummaryProps> = ({
  children,
  onClick,
  testId,
  ...props
}) => (
  <MUIExpansionPanelSummary
    onClick={onClick}
    expandIcon={<Icon icon="chevronDown" />}
    {...props}
    {...testAttr(testId)}
  >
    {children}
  </MUIExpansionPanelSummary>
);

// muiName tag is used by Material UI to recognise child components
// https://material-ui.com/guides/composition/
export default Object.assign(withStyles(styles)(ExpansionPanelSummary), {
  muiName: 'ExpansionPanelSummary',
});
