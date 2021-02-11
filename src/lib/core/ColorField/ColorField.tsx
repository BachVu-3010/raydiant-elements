import * as React from 'react';
import * as Color from 'color';
import Popover from '@material-ui/core/Popover';
import ColorPicker from '../ColorPicker';
import InputLabel from '../InputLabel';
import { makeStyles, createStyles } from '../../styles';
import { Theme } from '../../theme';
import { buttonReset } from '../../mixins';

export interface ColorFieldProps {
  label?: React.ReactNode;
  value?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  onClose?: () => void;
}

export const ColorField = ({
  label,
  value,
  onChange,
  onClose,
}: ColorFieldProps) => {
  const classes = useStyles();

  // State

  const [isColorSelectorOpen, setIsColorSelectorOpen] = React.useState(false);

  // Refs

  const colorSelectorRef = React.useRef<HTMLButtonElement | null>(null);

  // Memoizers

  const styles = React.useMemo(
    () => {
      if (!value) {
        return {
          backgroundColor: 'inherit',
          color: 'inherit',
        };
      }

      const color = Color(value);
      const isDark = color.isDark();

      return {
        backgroundColor: value,
        color: isDark ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.9)',
      };
    },
    [value],
  );

  return (
    <div className={classes.root}>
      <InputLabel>{label}</InputLabel>
      <button
        ref={colorSelectorRef}
        className={classes.button}
        style={styles}
        onClick={() => setIsColorSelectorOpen(true)}
      >
        {value}
      </button>

      <Popover
        anchorEl={colorSelectorRef.current}
        open={isColorSelectorOpen}
        onClose={() => setIsColorSelectorOpen(false)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <ColorPicker value={value} onChange={onChange} onClose={onClose} />
      </Popover>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},

    button: {
      ...buttonReset(),
      cursor: 'pointer',
      width: '100%',
      height: 40,
      padding: theme.spacing(1, 2),
      fontSize: theme.fontSizes.md,
      borderRadius: theme.borderRadius.sm,
    },
  }),
);

export default ColorField;
