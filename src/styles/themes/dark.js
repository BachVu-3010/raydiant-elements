import { createMuiTheme } from 'material-ui/styles';
import commonStyles from './_common';

export const palette = {
  text: {
    primary: 'rgba(255, 255, 255, 1)',
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 1)',
    hint: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)',
    divider: 'rgba(255, 255, 255, 0.2)',
    lightDivider: 'rgba(255, 255, 255, 0.1)',
    anchor: '#5fb3ee',
  },
  input: {
    bottomLine: 'rgba(255, 255, 255, 1)',
    helperText: 'rgba(255, 255, 255, 0.7)',
    labelText: 'rgba(255, 255, 255, 0.7)',
    inputText: 'rgba(255, 255, 255, 1)',
    disabled: 'rgba(255, 255, 255, 0.5)',
  },
  action: {
    active: 'rgba(255, 255, 255, 1)',
    disabled: 'rgba(255, 255, 255, 1)',
  },
  background: {
    default: '#303141',
    paper: '#4A4B5B',
    appBar: '#171828',
    contentFrame: '#171828',
  },
};

export default createMuiTheme(commonStyles('dark', palette));
