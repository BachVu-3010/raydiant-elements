import React from 'react';
import Switch from '../../Switch';
import { propTypes, defaultProps } from './propTypes';

const BooleanInput = ({ label, value, helperText, onChange, onBlur }) => (
  <Switch
    checked={value}
    helperText={helperText}
    onChange={evt => onChange(evt.target.checked)}
    onBlur={onBlur}
  >
    {label}
  </Switch>
);

BooleanInput.propTypes = propTypes;
BooleanInput.defaultProps = defaultProps;

export default BooleanInput;
