import * as React from 'react';
import Button from '../../core/Button';
import TextField from '../../core/TextField';
import withStyles, { createStyles, WithStyles } from '../../core/withStyles';
import Column from '../../layout/Column';
import { Theme } from '../../theme';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      width: '100%',
    },
    subHeading: {
      fontWeight: 500,
      fontSize: theme.fontSizes.lg,
    },
    heading: {
      fontSize: theme.fontSizes.lg,
    },
    screen: {
      backgroundColor: '#292834',
      fontSize: theme.fontSizes.lg,
      color: 'white',
      display: 'flex',
      marginLeft: 'auto',
      marginRight: 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      width: '192px',
      height: '108px',
      boxShadow: '0 1px 3px 0 rgba(0,0,0,.2)',
    },
  });

export interface AddDeviceProps extends WithStyles<typeof styles> {
  headingText: string;
}

const AddDevice: React.SFC<AddDeviceProps> = props => {
  const { classes, headingText } = props;
  return (
    <Column className={classes.root}>
      <div>
        <span className={classes.heading}>{headingText}</span>
      </div>
      <div className={classes.screen}>
        <span>WORD 1 - WORD 2</span>
      </div>
      <div className={classes.subHeading}>Enter the code shown on your TV</div>
      <TextField label="Activation Code" />
      <TextField label="Name (Optional)" />
      <Button label="Activate" color="progress" disabled={true} />
    </Column>
  );
};

export default withStyles(styles)(AddDevice);
