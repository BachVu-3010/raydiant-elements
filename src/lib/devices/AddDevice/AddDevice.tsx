import * as React from 'react';
import Media from 'react-media';
import Button from '../../core/Button';
import Form from '../../core/Form';
import RadioGroup from '../../core/RadioGroup';
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
        paddingRight: 0,
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
    audioOnly: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    audioOnlyLabel: {
      marginRight: theme.spacing.unit * 2,
    },
  });

export interface AddDeviceProps {
  headingText: string;
  onRegister: (
    props: { activationCode: string; name: string; isAudioOnly: boolean },
  ) => void;
  loading?: boolean;
  error?: string;
  hideAudioOnly?: boolean;
}

interface AddDevicePropsWithStyles
  extends AddDeviceProps,
    WithStyles<typeof styles> {
  testId?: string;
}

interface AddDeviceState {
  activationCode: string;
  name: string;
  isAudioOnly: boolean;
}

export class AddDevice extends React.Component<
  AddDevicePropsWithStyles,
  AddDeviceState
> {
  state = {
    activationCode: '',
    name: '',
    isAudioOnly: false,
  };
  handleSubmitRegisterDeviceForm = () => {
    const { onRegister } = this.props;
    const { activationCode, name, isAudioOnly } = this.state;
    onRegister({ activationCode, name, isAudioOnly });
  };
  renderAudioOnly() {
    const { classes, testId, hideAudioOnly } = this.props;
    const { isAudioOnly } = this.state;

    if (hideAudioOnly) return null;

    return (
      <div className={classes.audioOnly}>
        <span className={classes.audioOnlyLabel}>
          Is this an audio-only device?
        </span>
        <RadioGroup
          inline
          value={isAudioOnly ? 'yes' : 'no'}
          onChange={value => this.setState({ isAudioOnly: value === 'yes' })}
          testId={`${testId}-audio-only`}
        >
          <RadioGroup.Option
            value="yes"
            label="Yes"
            testId={`${testId}-audio-only-yes`}
          />
          <RadioGroup.Option
            value="no"
            label="No"
            testId={`${testId}-audio-only-no`}
          />
        </RadioGroup>
      </div>
    );
  }
  render() {
    const { classes, headingText, loading, error, testId } = this.props;
    const { activationCode, name } = this.state;
    return (
      <div className={classes.root}>
        <Column className={classes.cta}>
          <span className={classes.heading}>{headingText}</span>
          <Media query={`(min-height: ${AddDeviceMinHeight}px)`}>
            {matches => (matches ? this.renderAudioOnly() : null)}
          </Media>
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
            <Media query={`(min-height: ${AddDeviceMinHeight}px)`}>
              {matches => (matches ? null : this.renderAudioOnly())}
            </Media>
            <TextField
              label="Activation Code"
              value={activationCode}
              onChange={value => this.setState({ activationCode: value })}
              error={!!error}
              helperText={error}
              mask={(value = '') => value.split('').map(() => /[a-zA-Z\-\s]/g)}
              pipe={(value = '') => {
                const newValue = value.toUpperCase().replace(' ', '-');
                return {
                  value: newValue,
                  indexesOfPipedChars: [newValue.indexOf('-') - 1],
                };
              }}
              testId={`${testId}-activation-code`}
            />
            <TextField
              label="Name (Optional)"
              value={name}
              onChange={value => this.setState({ name: value })}
              testId={`${testId}-name`}
            />
            <Button
              type="submit"
              label="Activate"
              color="progress"
              disabled={!activationCode.match(/^[A-Z]+-[A-Z]+$/) || loading}
              testId={`${testId}-submit`}
            />
          </Column>
        </Form>
      </div>
    );
  }
}

export default withStyles(styles)(AddDevice);
