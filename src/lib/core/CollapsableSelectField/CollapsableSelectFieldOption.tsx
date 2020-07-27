import MUIExpansionPanel from '@material-ui/core/ExpansionPanel';
import MUIExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MUIExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import * as React from 'react';
import Row from '../../layout/Row';
import Checkbox from '../Checkbox';
import useStyles from './CollapsableSelectFieldOption.styles';
import CollapsableSelectFieldContext from './CollapsableSelectFieldContext';

export interface CollapsableSelectFieldOptionProps {
  className?: string;
  value: string;
  label: string;
  expanded?: boolean;
  onClick?: () => void;
}

export const CollapsableSelectFieldOption: React.FunctionComponent<
  CollapsableSelectFieldOptionProps
> = ({ className, value, label, expanded = false, onClick, children }) => {
  const classes = useStyles();

  const { isSelected, isDisabled, setSelected } = React.useContext(
    CollapsableSelectFieldContext,
  );

  return (
    <MUIExpansionPanel
      elevation={0}
      expanded={expanded}
      className={className}
      classes={{
        root: classes.root,
        expanded: classes.expanded,
      }}
    >
      <MUIExpansionPanelSummary
        expandIcon={<ArrowRightIcon />}
        classes={{
          root: classes.summary,
          expanded: classes.expanded,
          expandIcon: classes.expandedIcon,
          content: classes.content,
          focused: classes.focused,
        }}
        onClick={onClick}
      >
        <Row halfMargin center>
          <Checkbox
            checked={isSelected(value)}
            disabled={isDisabled()}
            onChange={selected => setSelected(value, selected)}
            onClick={event => event.stopPropagation()}
          />
          <span className={classes.label}>{label}</span>
        </Row>
      </MUIExpansionPanelSummary>
      <MUIExpansionPanelDetails className={classes.details}>
        {children}
      </MUIExpansionPanelDetails>
    </MUIExpansionPanel>
  );
};

export default CollapsableSelectFieldOption;
