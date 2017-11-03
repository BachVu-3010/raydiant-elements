import { createMuiTheme } from 'material-ui/styles';
import commonStyles from './_common';
import { palette as lightPalette } from './light';

export const palette = {
  ...lightPalette,
  background: {
    ...lightPalette.background,
    default: '#e8eaee',
  },
};
const theme = commonStyles('light', palette);
theme.overrides.MuiInput.root.background = 'white';
export default createMuiTheme(theme);
