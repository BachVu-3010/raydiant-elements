import * as React from 'react';
import * as tinycolor from 'tinycolor2';
import { Hue, Saturation } from 'react-color/lib/components/common';
import ChromePointer from 'react-color/lib/components/chrome/ChromePointer';
import ChromePointerCircle from 'react-color/lib/components/chrome/ChromePointerCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { makeStyles, createStyles } from '../../styles';
import { Theme } from '../../theme';
import Column from '../../layout/Column';
import Row from '../../layout/Row';
import Spacer from '../../layout/Spacer';
import ActionBar from '../ActionBar/v2';
import InputLabel from '../InputLabel';
import TextField from '../TextField';
import NumberField from '../NumberField';

interface HSV {
  h: number;
  s: number;
  v: number;
  a: number;
}

interface HSL {
  h: number;
  s: number;
  l: number;
  a: number;
}

export interface ColorPickerProps {
  value: string;
  onChange: (value: string) => void;
  onClose: () => void;
}

export const ColorPicker = ({ value, onChange, onClose }: ColorPickerProps) => {
  const classes = useStyles();

  // Refs

  const originalColor = React.useRef(tinycolor(value));

  // State

  const [hex, setHex] = React.useState(originalColor.current.toHex());
  const [hsl, setHsl] = React.useState(originalColor.current.toHsl());
  const [hsv, setHsv] = React.useState(originalColor.current.toHsv());
  const [opacity, setOpacity] = React.useState(
    originalColor.current.getAlpha() * 100,
  );

  // Memoizers

  const updatedColor = React.useMemo(
    () => {
      const color = tinycolor(hex);
      color.setAlpha(opacity / 100);
      return color;
    },
    [hex, opacity],
  );

  const isDirty = React.useMemo(
    () => {
      return (
        updatedColor.toHex() !== originalColor.current.toHex() ||
        updatedColor.getAlpha() !== originalColor.current.getAlpha()
      );
    },
    [updatedColor],
  );

  // Callbacks

  const handleColorChange = React.useCallback((data: HSV | HSL | string) => {
    const color = tinycolor(data);

    const updatedHsl = color.toHsl();
    const updatedHsv = color.toHsv();
    const updatedHex = color.toHex();

    if (typeof data === 'string') {
      // Hex text field was updated, always save current value in state.
      setHex(data);
      // Don't update the sliders if the color isn't valid.
      if (color.isValid()) {
        setHsl(updatedHsl);
        setHsv(updatedHsv);
      }
    } else {
      // The sliders were updated, reset the hue value from data to fix an issue
      // where the hue slider doesn't update when the color is #ffffff.
      updatedHsl.h = data.h;
      updatedHsv.h = data.h;
      setHsl(updatedHsl);
      setHsv(updatedHsv);
      setHex(updatedHex);
    }
  }, []);

  const handleCancel = React.useCallback(
    () => {
      setHex(originalColor.current.toHex());
      setHsl(originalColor.current.toHsl());
      setHsv(originalColor.current.toHsv());
      setOpacity(originalColor.current.getAlpha() * 100);
      onClose();
    },
    [onChange, onClose],
  );

  // Effects

  // Trigger onChange handler when hex or opacity changes.
  React.useEffect(
    () => {
      if (updatedColor.isValid()) {
        if (updatedColor.getAlpha() < 1) {
          onChange(updatedColor.toRgbString());
        } else {
          onChange(updatedColor.toHexString());
        }
      }
    },
    [updatedColor, opacity, onChange],
  );

  // Render

  return (
    <div className={classes.root}>
      <Column>
        <div className={classes.saturation}>
          <Saturation
            hsl={hsl}
            hsv={hsv}
            pointer={ChromePointerCircle}
            onChange={handleColorChange}
          />
        </div>

        <div>
          <InputLabel>Hue</InputLabel>
          <div className={classes.slider}>
            <Hue
              hsl={hsl}
              hsv={hsv}
              pointer={ChromePointer}
              onChange={handleColorChange}
            />
          </div>
        </div>

        <TextField label="Hex" value={hex} onChange={handleColorChange} />

        <NumberField
          label="Opacity"
          value={opacity}
          min={0}
          max={100}
          onChange={setOpacity}
        />
      </Column>

      <Row className={classes.actions}>
        <ActionBar.Action
          icon={<CancelIcon />}
          color="error"
          label="Cancel"
          onClick={handleCancel}
        />
        <Spacer />
        <ActionBar.Action
          icon={<CheckCircleIcon />}
          color="success"
          label="Done"
          disabled={!isDirty}
          onClick={onClose}
        />
      </Row>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3),
      maxWidth: 240,
    },

    saturation: {
      position: 'relative',
      width: '100%',
      height: 100,
    },

    slider: {
      position: 'relative',
      width: '100%',
      height: 10,
    },

    actions: {
      marginTop: theme.spacing(3),
      paddingTop: theme.spacing(3),
      borderTop: `1px solid ${theme.actionBar.border}`,
    },
  }),
);

export default ColorPicker;
