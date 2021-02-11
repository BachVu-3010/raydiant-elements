import * as React from 'react';
import cn from 'classnames';
import Check from '@material-ui/icons/Check';
import RoundIndeterminateCheck from '@material-ui/icons/IndeterminateCheckBoxRounded';
import IndeterminateCheck from '@material-ui/icons/IndeterminateCheckBoxSharp';
import useStyles from './CheckboxIcon.styles';

interface CheckIconProps {
  indeterminate?: boolean;
  round?: boolean;
}

const CheckIcon: React.FC<CheckIconProps> = ({
  indeterminate = false,
  round = false,
}) => {
  const classes = useStyles();
  const className = cn(classes.icon, {
    [classes.indeterminate]: indeterminate,
  });

  if (indeterminate) {
    if (round) return <RoundIndeterminateCheck className={className} />;
    return <IndeterminateCheck className={className} />;
  }
  return <Check className={className} />;
};

export default CheckIcon;
