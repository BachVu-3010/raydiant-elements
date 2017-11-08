import { createMuiTheme } from 'material-ui/styles';
import commonStyles from './_common';

export const palette = {
  text: {
    primary: 'rgba(41, 40, 52, 1)',
    secondary: 'rgba(41, 40, 52, 0.7)',
    disabled: 'rgba(41, 40, 52, 0.5)',
    hint: 'rgba(41, 40, 52, 0.6)',
    icon: 'rgba(41, 40, 52, 0.7)',
    divider: 'rgba(41, 40, 52, 0.2)',
    lightDivider: 'rgba(0, 0, 0, 0.1)',
    anchor: '#0683d4',
  },
  input: {
    bottomLine: 'rgba(41, 40, 52, 1)',
    helperText: 'rgba(41, 40, 52, 0.7)',
    labelText: 'rgba(41, 40, 52, 0.7)',
    inputText: 'rgba(41, 40, 52, 1)',
    disabled: 'rgba(41, 40, 52, 0.7)',
  },
  action: {
    active: 'rgba(41, 40, 52, 0.7)',
    disabled: 'rgba(41, 40, 52, 0.7)',
  },
  background: {
    default: '#f3f4f6',
    paper: '#ffffff',
    appBar: '#d8d8d8',
    contentFrame: '#d8d8d8',
  },
};
export default createMuiTheme(commonStyles('light', palette));
