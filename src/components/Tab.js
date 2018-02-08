import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Icon from './Icon';

const propTypes = {
  /** Class name(s) */
  className: PropTypes.string,
  /** The label of the tab */
  label: PropTypes.string,
  /** The icon of the tab */
  icon: PropTypes.string,
  /** Set to true when the tab is selected */
  active: PropTypes.bool,
  /** Set href to render an anchor  */
  href: PropTypes.string,
  /** Called when the tab is clicked */
  onClick: PropTypes.func.isRequired,
  /** @ignore injected by withStyles */
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const defaultProps = {
  className: '',
  label: '',
  icon: '',
  active: false,
  href: '',
};

const Tab = ({ classes, className, label, icon, active, href, onClick }) => {
  const TabElement = href ? 'a' : 'button';
  return (
    <TabElement
      className={classnames(classes.tab, active && classes.active, className)}
      href={href}
      onClick={onClick}
    >
      {icon && <Icon icon={icon} className={classes.icon} />}
      {label}
    </TabElement>
  );
};

Tab.propTypes = propTypes;
Tab.defaultProps = defaultProps;

const styles = theme => ({
  tab: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize,
    fontWeight: 500,
    lineHeight: 1.33,
    padding: '8px 16px',
    color: theme.palette.tab ? theme.palette.tab.textColor : '',
    backgroundColor: 'transparent',
    borderBottom: '3px solid transparent',
    borderTop: 0,
    borderRight: 0,
    borderLeft: 0,
    cursor: 'pointer',
    textDecoration: 'none',
  },

  active: {
    borderBottom: `3px solid ${
      theme.palette.tab ? theme.palette.tab.highlightColor : ''
    }`,
  },

  icon: {
    margin: `${theme.spacing.unit}px auto`,
  },
});

export default withStyles(styles)(Tab);
