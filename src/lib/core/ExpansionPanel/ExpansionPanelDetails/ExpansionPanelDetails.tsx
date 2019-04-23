import MUIExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import * as React from 'react';
import withStyles, { WithStyles } from '../../withStyles';
import styles from './ExpansionPanelDetails.styles';

export interface ExpansionPanelDetailsProps extends WithStyles<typeof styles> {
  onClick?: (event: React.MouseEvent<any>) => any;
}

export const ExpansionPanelDetails: React.SFC<ExpansionPanelDetailsProps> = ({
  children,
  onClick,
  ...props
}) => (
  <MUIExpansionPanelDetails {...props} onClick={onClick}>
    {children}
  </MUIExpansionPanelDetails>
);

// muiName tag is used by Material UI to recognise child components
// https://material-ui.com/guides/composition/
export default Object.assign(withStyles(styles)(ExpansionPanelDetails), {
  muiName: 'ExpansionPanelDetails',
});
