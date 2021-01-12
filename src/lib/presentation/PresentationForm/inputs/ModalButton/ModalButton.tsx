import * as React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Button from '../../../../core/Button';
import Modal from '../../../../core/Modal';
import replacePropNameWithValue from '../../../../helpers/replacePropNameWithValue';
import createTheme, { Theme } from '../../../../theme/createTheme';
import FormHelperText from '../../../../internal/FormHelperText';
import * as P from '../../../PresentationTypes';
import EmbeddedFrame from './EmbeddedFrame';

interface ModalButtonProps {
  label: string;
  sourceUrl: string;
  parentValue?: P.ApplicationVariables;
  helperText?: React.ReactNode;
  backgroundColor?: string;
  hoveredBackgroundColor?: string;
  textColor?: string;
  disabled?: boolean;
  onChange?: (value?: object) => any;
}

interface ModalButtonState {
  open: boolean;
}

class ModalButton extends React.Component<ModalButtonProps, ModalButtonState> {
  static defaultProps: ModalButtonProps = {
    label: '',
    sourceUrl: '',
  };

  state = {
    open: false,
  };

  close = () => {
    this.setState({ open: false });
  };

  handleMessage = (type: string, payload: object) => {
    switch (type) {
      case 'update':
        this.props.onChange({ open: this.state.open, value: payload });
        break;
      case 'close':
        this.close();
        this.props.onChange({ open: false, value: payload });
        break;
    }
  };

  handleOnClick = () => {
    this.setState({ open: true });
    this.props.onChange({ open: true });
  };

  handleOverlayClick = () => {
    this.close();
    this.props.onChange({ open: false });
  };

  render() {
    const {
      label,
      sourceUrl,
      disabled,
      parentValue,
      helperText,
      backgroundColor,
      hoveredBackgroundColor,
      textColor,
    } = this.props;

    const theme = (outerTheme: Theme) =>
      createTheme({
        ...outerTheme,
        modal: {
          ...outerTheme.modal,
          maxWidth: '90%',
          maxHeight: '90%',
        },
        palette: {
          ...outerTheme.palette,
          primary: {
            main: backgroundColor || outerTheme.palette.primary.main,
            dark: hoveredBackgroundColor || outerTheme.palette.primary.dark,
            contrastText: textColor || outerTheme.palette.primary.contrastText,
          },
        },
      });

    const url = replacePropNameWithValue(sourceUrl, parentValue, true);
    return (
      <ThemeProvider<Theme> theme={theme}>
        <div>
          <Button
            fullWidth
            color="primary"
            label={label}
            disabled={disabled}
            onClick={this.handleOnClick}
          />
          {helperText && (
            <FormHelperText disabled={disabled}>{helperText}</FormHelperText>
          )}
        </div>
        <Modal open={this.state.open} onOverlayClick={this.handleOverlayClick}>
          <EmbeddedFrame src={url} onMessage={this.handleMessage} />
        </Modal>
      </ThemeProvider>
    );
  }
}

export default ModalButton;
