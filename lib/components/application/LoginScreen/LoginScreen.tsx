import { withTheme } from '@material-ui/core/styles';
import * as React from 'react';
import { Theme as ThemeInterface } from '../../../theme';
import Theme from '../../core/Theme';
import withStyles, { WithStyles } from '../../core/withStyles';
import OneThirdLayout from '../OneThirdLayout';
import styles from './LoginScreen.styles';

interface LoginScreenProps extends WithStyles<typeof styles> {
  theme: ThemeInterface;
}

export const LoginScreen: React.SFC<LoginScreenProps> = ({
  theme,
  classes,
  children,
}) => (
  <OneThirdLayout>
    <Theme type="light">
      <OneThirdLayout.ColumnSmall>
        <div className={classes.contents}>{children}</div>
      </OneThirdLayout.ColumnSmall>
    </Theme>
    <Theme type="dark">
      <OneThirdLayout.ColumnLarge>
        <div className={classes.assetContainer}>
          <img className={classes.asset} src={theme.loginAsset.default} />
        </div>
      </OneThirdLayout.ColumnLarge>
    </Theme>
  </OneThirdLayout>
);

export default withStyles(styles)(withTheme()(LoginScreen));
