import ButtonBase from '@material-ui/core/ButtonBase';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useTheme } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import * as React from 'react';
import * as cn from 'classnames';
import withStyles, { WithStyles } from '../../core/withStyles';
import Spacer from '../../layout/Spacer';
import { Theme } from '../../theme';
import styles from './TreeViewItemLabel.styles';

export interface TreeViewItemLabelProps extends WithStyles<typeof styles> {
  icon: React.ReactNode;
  label: string;
  indent?: number;
  isExpandable?: boolean;
  isExpanded?: boolean;
  isLoading?: boolean;
  isDragging?: boolean;
  onClick?: React.MouseEventHandler<any>;
  onExpansion?: React.MouseEventHandler<any>;
}

export const TreeViewItemLabel: React.FunctionComponent<
  TreeViewItemLabelProps
> = (
  {
    icon,
    label,
    indent = 0,
    isExpanded = false,
    isExpandable = false,
    isLoading = false,
    isDragging = false,
    onExpansion,
    onClick,
    classes,
  },
  ref,
) => {
  const theme = useTheme<Theme>();
  return (
    <div
      ref={ref}
      className={cn(classes.root, isDragging && classes.dragging)}
      onClick={onClick}
    >
      <div
        className={classes.icon}
        style={{ paddingLeft: theme.spacing(indent) }}
      >
        {icon}
      </div>
      <div className={classes.labelText}>{label}</div>
      <Spacer />
      {isLoading && <CircularProgress size={12} />}
      {isExpandable && (
        <ButtonBase
          className={classes.toggleExpand}
          disableRipple
          onClick={onExpansion}
        >
          <div className={classes.toggleExpandHitArea} />
          {isExpanded ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
        </ButtonBase>
      )}
    </div>
  );
};

export default withStyles(styles)(React.forwardRef(TreeViewItemLabel));
