import React, { Children } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Breadcrumb from './Breadcrumb';
import Icon from './Icon';

const propTypes = {
  /** Class name(s) */
  className: PropTypes.string,
  /** The breadcrumbs to render */
  children: PropTypes.node.isRequired,
  /** Called when the user clicks the back button */
  onBack: PropTypes.func.isRequired,
  /** @ignore injected by withStyles */
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const defaultProps = {
  className: '',
};

const Breadcrumbs = ({ className, children, onBack, classes }) => {
  const numberOfChildren = Children.count(children);
  if (numberOfChildren <= 1) {
    return (
      <div className={classnames(classes.breadcrumbs, className)}>
        {children}
      </div>
    );
  }

  const crumbs = [
    <Breadcrumb key="back" onClick={onBack} className={classes.back}>
      <Icon icon="arrowLeft" className={classes.backIcon} />
    </Breadcrumb>,
  ];

  Children.forEach(children, (child, index) => {
    crumbs.push(child);
    if (index !== numberOfChildren - 1) {
      crumbs.push(
        <span key={`sep-${index}`} className={classes.separator}>
          /
        </span>
      );
    }
  });

  return (
    <div className={classnames(classes.breadcrumbs, className)}>{crumbs}</div>
  );
};

Breadcrumbs.propTypes = propTypes;
Breadcrumbs.defaultProps = defaultProps;

const styles = theme => ({
  breadcrumbs: {
    height: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.unit / 2,
  },
  back: {
    flexShrink: 0,
    marginRight: theme.spacing.unit / 2,
  },
  backIcon: {
    height: 16,
    width: 16,
    marginLeft: -2, // Compensate for padding in SVG.
  },
  separator: {
    marginLeft: theme.spacing.unit / 2,
    marginRight: theme.spacing.unit / 2,
  },
});

export default withStyles(styles)(Breadcrumbs);
