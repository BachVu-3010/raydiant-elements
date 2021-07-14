import * as React from 'react';
import * as cn from 'classnames';
import useStyles from './ActionBar.styles';
import ActionBarAction from './ActionBarAction';
import ActionBarSelect from './ActionBarSelect';
import ActionBarSelectOption from './ActionBarSelectOption';
import ActionBarInput from './ActionBarInput';

interface ActionBarProps {
  className?: string;
  variant?: 'default' | 'footer' | 'floating' | 'floating-actions';
  size?: 'default' | 'large';
}

export const ActionBar: React.FunctionComponent<ActionBarProps> = ({
  className,
  variant = 'default',
  size = 'default',
  children,
}) => {
  const classes = useStyles();
  return (
    <div
      className={cn(
        classes.root,
        variant === 'footer' && classes.footer,
        variant === 'floating' && classes.floating,
        size === 'large' && classes.large,
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
