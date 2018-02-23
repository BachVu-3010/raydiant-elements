// TODO: Remove this once all app have been updated to use helper_link
import React from 'react';
import { withStyles } from 'material-ui/styles';
import Anchor from '../../Typography/Anchor';
import { propTypes, defaultProps } from './propTypes';

const LinkInput = ({ name, url, label, classes }) => (
  <Anchor key={name} className={classes.link} href={url} target="_blank">
    {label}
  </Anchor>
);

LinkInput.propTypes = propTypes;
LinkInput.defaultProps = defaultProps;

const styles = {
  link: {
    // Hack to make link types appear as helper text for
    // the previous presentation property
    marginTop: '-26px !important',
    position: 'relative',
    fontSize: 12,
  },
};

export default withStyles(styles)(LinkInput);
