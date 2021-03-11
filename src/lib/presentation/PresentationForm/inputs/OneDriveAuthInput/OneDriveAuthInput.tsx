import * as React from 'react';
import Icon from '../../../../core/Icon';
import withStyles, {
  createStyles,
  WithStyles,
} from '../../../../core/withStyles';
import createTheme from '../../../../theme/createTheme';
import OAuthInput, { OAuthInputProps } from '../OAuthInput';

interface OneDriveAuthInputProps
  extends OAuthInputProps,
    WithStyles<typeof styles> {}

const styles = createStyles({
  icon: {
    color: '#ffffff',
    height: '100%',
    width: 36,
    display: 'flex',
    alignItems: 'center',
    '& > svg': {
      height: 36,
      width: 36,
    },
  },
});

const OneDriveAuthInput: React.SFC<OneDriveAuthInputProps> = ({
  classes,
  ...props
}) => (
  <OAuthInput
    {...props}
    theme={outerTheme =>
      createTheme({
        ...outerTheme,
        palette: {
          ...outerTheme.palette,
          primary: {
            main: '#0947AA',
            dark: '#073988',
            contrastText: '#ffffff',
          },
        },
        button: {
          ...outerTheme.button,
          background: '#7E9ED0',
          foregroundMuted: '#ffffff',
        },
      })
    }
    label="Connect to OneDrive"
    icon={
      <div className={classes.icon}>
        <Icon icon="onedrive" />
      </div>
    }
  />
);

export default withStyles(styles)(OneDriveAuthInput);
