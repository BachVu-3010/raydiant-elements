import * as React from 'react';
import * as tinycolor from 'tinycolor2';
import Paper from '@material-ui/core/Paper';
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

  // State

  const [hex, setHex] = React.useState(tinycolor(value).toHexString());

  const [opacity, setOpacity] = React.useState(
    tinycolor(value).getAlpha() * 100,
  );

  // Refs

  const originalValue = React.useRef(value);

  // Memoizers

  const { hsl, hsv } = React.useMemo(
    () => {
      const color = tinycolor(hex);
      color.setAlpha(opacity / 100);
      return {
        hsl: color.toHsl(),
        hsv: color.toHsv(),
      };
    },
    [hex, opacity],
  );

  // Callbacks

  const handleSaturationChange = React.useCallback((updatedHsv: HSV) => {
    const color = tinycolor(updatedHsv);
    setHex(color.toHexString());
  }, []);

  const handleHueChange = React.useCallback((updatedHsl: HSL) => {
    const color = tinycolor(updatedHsl);
    setHex(color.toHexString());
  }, []);

  const handleCancel = React.useCallback(
    () => {
      const color = tinycolor(originalValue.current);
      setHex(color.toHexString());
      setOpacity(color.getAlpha() * 100);
      onClose();
    },
    [onChange, onClose],
  );

  // Effects

  // Trigger onChange handler when hex or opacity changes.
  React.useEffect(
    () => {
      const color = tinycolor(hex);
      color.setAlpha(opacity / 100);

      if (color.isValid()) {
        if (color.getAlpha() < 1) {
          onChange(color.toRgbString());
        } else {
          onChange(color.toHexString());
        }
      }
    },
    [hex, opacity, onChange],
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
            onChange={handleSaturationChange}
          />
        </div>

        <div>
          <InputLabel>Hue</InputLabel>
          <div className={classes.slider}>
            <Hue
              hsl={hsl}
              hsv={hsv}
              pointer={ChromePointer}
              onChange={handleHueChange}
            />
          </div>
        </div>

        <TextField label="Hex" value={hex} onChange={setHex} />

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
