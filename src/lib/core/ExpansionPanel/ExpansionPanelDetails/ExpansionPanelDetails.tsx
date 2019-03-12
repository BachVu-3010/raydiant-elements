import MUIExpansionPanelDetails from '@material-ui/core/ExpansionPanelSummary';
import * as React from 'react';

import withStyles, { WithStyles } from '../../withStyles';
import styles from './ExpansionPanelDetails.styles';

export interface ExpansionPanelDetailsProps extends WithStyles<typeof styles>{
  onClick?: (event: React.MouseEvent<any>) => any;
}

export const ExpansionPanelSummary: React.SFC<ExpansionPanelDetailsProps> = ({
  children,
  onClick = () => {
    return;
  },
  ...props
}) => (
  <MUIExpansionPanelDetails {...props} onClick={onClick}>  
    {children}    
  </MUIExpansionPanelDetails>
);

// muiName tag is used by Material UI to recognise child components
// https://material-ui.com/guides/composition/
export default Object.assign(withStyles(styles)(ExpansionPanelSummary), {
  muiName: 'ExpansionPanelDetails',
});
