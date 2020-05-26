import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import CloseIcon from '@material-ui/icons/Close';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import * as React from 'react';
import withStyles, { WithStyles } from '../withStyles';
import ActionBarAction from './ActionBarAction';
import styles from './ActionBarSelect.styles';

export interface ActionBarSelectProps extends WithStyles<typeof styles> {
  icon: React.ReactNode;
  label?: string;
  disabled?: boolean;
  open?: boolean;
  onOpen?: (open: boolean) => void;
}

export const ActionBarSelect: React.SFC<ActionBarSelectProps> = ({
  classes,
  icon,
  label,
  disabled,
  open,
  onOpen,
  children,
}) => {
  const anchorRef = React.useRef(null);

  const prevOpen = React.useRef(open);
  React.useEffect(
    () => {
      if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
      }

      prevOpen.current = open;
    },
    [open],
  );

  return (
    <>
      <ActionBarAction
        ref={anchorRef}
        icon={open ? <CloseIcon /> : icon}
        label={label}
        disabled={disabled}
        selected={open}
        onClick={() => onOpen(!open)}
      />
      <Popper
        className={classes.dropdown}
        open={open}
        anchorEl={anchorRef.current}
        placement="bottom"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper className={classes.paper} elevation={3}>
              <ClickAwayListener onClickAway={() => onOpen(false)}>
                <MenuList className={classes.menuList} autoFocusItem={open}>
                  {children}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default withStyles(styles)(ActionBarSelect);
