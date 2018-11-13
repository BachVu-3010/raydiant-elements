import {
  createStyles,
  StyleRules,
  StyleRulesCallback,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';

export { createStyles, WithStyles };

export type Styles = StyleRulesCallback | StyleRules;

// the index option to withStyles ensures stylesheets for our elements appear
// after MUI stylesheets — more info here: https://stackoverflow.com/a/51068885
const defaultOptions = {
  index: 1,
};
export default (styles: Styles, options = defaultOptions) =>
  withStyles(styles, options);
