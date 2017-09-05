import SwitchBase from './SwitchBase';

const styles = theme => ({
  default: {
    '&:before': {
      display: 'block',
      boxSizing: 'border-box',
      content: '""',
      height: '20px',
      width: '20px',
      borderRadius: '10px',
      border: `1px solid ${theme.palette.text.primary}`,
      backgroundColor: theme.palette.checkbox ? theme.palette.checkbox.background : '',
    },
    '&:after': {
      position: 'absolute',
      display: 'block',
      opacity: 0.5,
      transform: 'scale(0)',
      boxSizing: 'border-box',
      content: '""',
      width: '10px',
      height: '10px',
      borderRadius: '5px',
      left: '5px',
      top: '5px',
      backgroundColor: theme.palette.checkbox ? theme.palette.checkbox.backgroundChecked : '',
      transition: 'transform 0.1s ease-out',
    },
    '&:hover:before': {
      boxShadow: `0 0 0 1px ${theme.palette.text.primary}`,
    },
  },
  checked: {
    '&:after': {
      opacity: 1,
      transform: 'scale(1)',
    },
  },
  disabled: {
    '&:after': {
      backgroundColor: theme.palette.text.primary,
    },
  },
});

const RadioInput = SwitchBase({ type: 'radio', styles, inputType: 'radio' });

export default RadioInput;
