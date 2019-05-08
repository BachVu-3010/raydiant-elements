import { createStyles } from '../../core/withStyles';
import { responsiveContainer, scrollable } from '../../mixins';
import { Theme } from '../../theme';
const assetWidth = 1128;

const styles = (theme: Theme) =>
  createStyles({
    contents: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      ...responsiveContainer(theme),
      ...scrollable(),
    },
    assetContainer: {
      flex: 1,
      backgroundImage: theme.palette.background.gradient,
      padding: theme.spacing.unit * 5,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    asset: {
      // We're unable to simply use `maxWidth: 100%` here as
      // the value is ignored in IE11 (see here: https://github.com/philipwalton/flexbugs#11-min-and-max-size-declarations-are-ignored-when-wrapping-flex-items)
      width: '100%',
      maxWidth: assetWidth,
    },
  });

export default styles;
