import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'material-ui/styles';

const CONTRAST_STR = 'contrastDefaultColor';

const Palette = ({ intent, theme }) => {
  const colors = theme.palette[intent];
  const contrast = colors[CONTRAST_STR];
  const textColor = contrast === 'light' ? 'white' : 'black';
  const colorDivs = Object.keys(colors).map(c => {
    if (c === CONTRAST_STR) {
      return null;
    }
    return <div key={c} style={{ background: colors[c], color: textColor }}>{c}</div>;
  });
  return <div>{colorDivs}</div>;
};

export default withTheme(Palette);
