import * as React from 'react';
import useStyles from './ActionBar.styles';
import ActionBarAction from './ActionBarAction';
import ActionBarSelect from './ActionBarSelect';
import ActionBarSelectOption from './ActionBarSelectOption';
import ActionBarInput from './ActionBarInput';

interface ActionBarProps {}

export const ActionBar: React.FunctionComponent<ActionBarProps> = ({
  children,
}) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export default Object.assign(ActionBar, {
  Action: ActionBarAction,
  Select: ActionBarSelect,
  SelectOption: ActionBarSelectOption,
  Input: ActionBarInput,
});
