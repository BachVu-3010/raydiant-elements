import MomentUtils from '@date-io/moment';
import * as moment from 'moment';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import Popover from '@material-ui/core/Popover';
import TodaySharpIcon from '@material-ui/icons/TodaySharp';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import * as React from 'react';
import { makeStyles, createStyles } from '../../styles';
import { Theme } from '../../theme';
import Row from '../../layout/Row';
import Spacer from '../../layout/Spacer';
import TextField from '../TextField';
import ActionBar from '../ActionBar/v2';

interface DateFieldProps {
  value: string | null;
  onChange: (date: string) => void;
  onBlur?: React.FocusEventHandler<any>;
  label?: string;
  placeholder?: string;
  helperText?: React.ReactNode;
  error?: boolean;
  disabled?: boolean;
  maxDate?: string | Date;
  minDate?: string | Date;
  dateFormat?: string;
  testId?: string;
}

export const DateField = ({
  value,
  onChange,
  onBlur,
  label,
  placeholder,
  helperText,
  error,
  disabled,
  minDate,
  maxDate,
  dateFormat = 'MMM DD YYYY',
}: DateFieldProps) => {
  const classes = useStyles();

  const valueToMoment = React.useCallback(
    () => (value === null ? moment() : moment(value)),
    [],
  );

  // State

  const [date, setDate] = React.useState<moment.Moment>(valueToMoment);
  const [open, setOpen] = React.useState(false);

  // Refs

  const inputRef = React.useRef<HTMLInputElement | null>(null);

  // Memoizers

  const isDirty = React.useMemo(
    () => {
      return !date.isSame(value);
    },
    [date, value],
  );

  // Callbacks

  const handleClose = React.useCallback(
    () => {
      setDate(moment(value));
      setOpen(false);
    },
    [value],
  );

  const handleDone = React.useCallback(
    () => {
      onChange(date.format(dateFormat));
      setOpen(false);
    },
    [onChange, date],
  );

  // Effects

  // Update state when value changes.
  React.useEffect(
    () => {
      setDate(valueToMoment);
    },
    [valueToMoment],
  );

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <TextField
        readOnly
        ref={inputRef}
        icon={<TodaySharpIcon onClick={() => setOpen(true)} />}
        label={label}
        placeholder={placeholder}
        value={value === null ? '' : date.format(dateFormat)}
        onClick={() => setOpen(true)}
        onBlur={onBlur}
        helperText={helperText}
        error={error}
      />

      <Popover
        open={open}
        anchorEl={inputRef.current}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <DatePicker
          variant="static"
          value={date}
          onChange={setDate}
          disabled={disabled}
          format="MM/DD/YYYY"
          minDate={minDate}
          maxDate={maxDate}
        />
        <div className={classes.actionsContainer}>
          <Row className={classes.actions}>
            <ActionBar.Action
              icon={<CancelIcon />}
              color="error"
              label="Cancel"
              onClick={handleClose}
            />
            <Spacer />
            <ActionBar.Action
              icon={<CheckCircleIcon />}
              color="success"
              label="Done"
              disabled={!isDirty}
              onClick={handleDone}
            />
          </Row>
        </div>
      </Popover>
    </MuiPickersUtilsProvider>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    actionsContainer: {
      padding: theme.spacing(3),
      paddingTop: 0,
    },

    actions: {
      paddingTop: theme.spacing(3),
      borderTop: `1px solid ${theme.actionBar.border}`,
    },
  }),
);

export default DateField;
