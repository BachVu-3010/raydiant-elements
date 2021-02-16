import * as React from 'react';
import * as cn from 'classnames';
import useStyles from './ActionBar.styles';
import ActionBarAction from './ActionBarAction';
import ActionBarSelect from './ActionBarSelect';
import ActionBarSelectOption from './ActionBarSelectOption';
import ActionBarInput from './ActionBarInput';

interface ActionBarProps {
  className?: string;
  variant?: '' | 'footer';
}

export const ActionBar: React.FunctionComponent<ActionBarProps> = ({
  className,
  variant = '',
  children,
}) => {
  const classes = useStyles();
  return (
    <div
      className={cn(
        classes.root,
        variant === 'footer' && classes.footer,
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Object.assign(ActionBar, {
  Action: ActionBarAction,
  Select: ActionBarSelect,
  SelectOption: ActionBarSelectOption,
  Input: ActionBarInput,
});
