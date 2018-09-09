import { withTheme } from '@material-ui/core/styles';
import * as React from 'react';
import { Theme } from '../../../theme';
import ThemeSelector from '../../core/ThemeSelector';
import withStyles, { WithStyles } from '../../core/withStyles';
import OneThirdLayout from '../../layout/OneThirdLayout';
import styles from './LoginScreen.styles';
import LoginScreenContent from './LoginScreenContent';
import LoginScreenHeader from './LoginScreenHeader';

interface LoginScreenProps extends WithStyles<typeof styles> {
  theme: Theme;
}

export const LoginScreen: React.SFC<LoginScreenProps> = ({
  theme,
  classes,
  children,
}) => (
  <OneThirdLayout>
    <ThemeSelector type="light">
      <OneThirdLayout.ColumnSmall className={classes.contents}>
        {children}
      </OneThirdLayout.ColumnSmall>
    </ThemeSelector>
    <ThemeSelector type="dark">
      <OneThirdLayout.ColumnLarge>
        <div className={classes.assetContainer}>
          <img className={classes.asset} src={theme.loginAsset.default} />
        </div>
      </OneThirdLayout.ColumnLarge>
    </ThemeSelector>
  </OneThirdLayout>
);

export default Object.assign(withStyles(styles)(withTheme()(LoginScreen)), {
  Header: LoginScreenHeader,
  Content: LoginScreenContent,
});
