import * as React from 'react';
import Button from '../../core/Button';
import Form from '../../core/Form';
import TextField from '../../core/TextField';
import withStyles, { createStyles, WithStyles } from '../../core/withStyles';
import Column from '../../layout/Column';
import { Theme } from '../../theme';

export const AddDeviceMinHeight = 400;
const heightUpBp = `@media screen and (min-height: ${AddDeviceMinHeight}px)`;

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',

      [heightUpBp]: {
        flexDirection: 'column',
        maxWidth: 400,
      },
    },
    cta: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingRight: theme.spacing.unit * 2,

      [heightUpBp]: {
        marginBottom: theme.spacing.unit * 2,
      },
    },
    form: {
      width: '100%',
      minWidth: 240,

      [heightUpBp]: {
        minWidth: 'none',
      },
    },
    subHeading: {
      fontWeight: 500,
      fontSize: theme.fontSizes.lg,
      whiteSpace: 'nowrap',
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
      boxShadow: theme.shadows[1],
    },
  });

export interface AddDeviceProps {
  headingText: string;
  onRegister: (
    { activationCode, name }: { activationCode: string; name: string },
  ) => void;
  loading?: boolean;
  error?: string;
}

interface AddDevicePropsWithStyles
  extends AddDeviceProps,
    WithStyles<typeof styles> {}

interface AddDeviceState {
  activationCode: string;
  name: string;
}

export class AddDevice extends React.Component<
  AddDevicePropsWithStyles,
  AddDeviceState
> {
  state = {
    activationCode: '',
    name: '',
  };
  handleSubmitRegisterDeviceForm = () => {
    const { onRegister } = this.props;
    const { activationCode, name } = this.state;
    onRegister({ activationCode, name });
  };
  render() {
    const { classes, headingText, loading, error } = this.props;
    const { activationCode, name } = this.state;
    return (
      <div className={classes.root}>
        <Column className={classes.cta}>
          <span className={classes.heading}>{headingText}</span>
          <div className={classes.screen}>
            <span>WORD 1 - WORD 2</span>
          </div>
          <div className={classes.subHeading}>
            Enter the code shown on your TV
          </div>
        </Column>
        <Form
          className={classes.form}
          onSubmit={this.handleSubmitRegisterDeviceForm}
        >
          <Column>
            <TextField
              label="Activation Code"
              value={activationCode}
              onChange={value => this.setState({ activationCode: value })}
              error={!!error}
              helperText={error}
              mask={(value = '') => {
                const maskArray = [];

                // suppress tslint warning for for loops
                // tslint:disable-next-line
                for (let i = 0; i < value.length; i += 1) {
                  maskArray.push(/[a-zA-Z\-]/);
                }

                return maskArray;
              }}
              pipe={(value = '') => value.toUpperCase()}
            />
            <TextField
              label="Name (Optional)"
              value={name}
              onChange={value => this.setState({ name: value })}
            />
            <Button
              type="submit"
              label="Activate"
              color="progress"
              disabled={!activationCode.match(/^[A-Z]+-[A-Z]+$/) || loading}
            />
          </Column>
        </Form>
      </div>
    );
  }
}

export default withStyles(styles)(AddDevice);
