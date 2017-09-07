import SwitchBase from './SwitchBase';

const styles = theme => ({
  default: {
    color: theme.palette.checkbox
      ? theme.palette.checkbox.backgroundChecked
      : '', // ripple
    verticalAlign: 'middle',
    '&:before': {
      display: 'block',
      boxSizing: 'border-box',
      content: '""',
      height: '20px',
      width: '20px',
      borderRadius: '3px',
      border: `1px solid ${theme.palette.text.primary}`,
      backgroundColor: theme.palette.checkbox
        ? theme.palette.checkbox.background
        : '',
      transition: 'background-color 0.2s ease-out',
    },
    '&:after': {
      position: 'absolute',
      display: 'block',
      opacity: 0,
      boxSizing: 'border-box',
      content: '""',
      width: '0',
      height: '0',
      left: '5px',
      top: '11px',
      transform: 'rotate(-45deg)',
      transformOrigin: 'top left', // Make sure our width/height animations start from 0,0
      borderColor: theme.palette.checkbox
        ? theme.palette.checkbox.colorChecked
        : '',
      borderWidth: '2px',
      borderLeftStyle: 'solid',
      borderBottomStyle: 'solid',
    },
    '&:hover:before': {
      boxShadow: `0 0 0 1px ${theme.palette.text.primary}`,
    },
  },
  checked: {
    '&:before': {
      backgroundColor: theme.palette.checkbox
        ? theme.palette.checkbox.backgroundChecked
        : '',
    },
    '&:after': {
      opacity: 1,
      width: '10px',
      height: '5px',
      transition: 'height 0.1s 0.1s, width 0.1s 0.2s',
    },
  },
  disabled: {
    '&:before': {
      background: theme.palette.text.primary,
    },
    '&:after': {
      borderColor: theme.palette.background.default,
    },
  },
  // variant round
  round: {
    '&:before': {
      borderRadius: '10px',
    },
  },
});

const CheckboxInput = SwitchBase({
  type: 'checkbox',
  styles,
  inputType: 'checkbox',
});

export default CheckboxInput;
