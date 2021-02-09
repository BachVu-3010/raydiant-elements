import * as React from 'react';
import ChromePicker from 'react-color/lib/Chrome';

interface Color {
  hex: string;
  rgb: {
    r: number;
    g: number;
    b: number;
    a: number;
  };
}

export interface ColorPickerProps {
  value: string;
  onChange: (value: string) => void;
  onClose?: () => void;
}

export const ColorPicker = ({ value, onChange, onClose }: ColorPickerProps) => {
  const handleChange = React.useCallback(
    ({ rgb, hex }: Color) => {
      const isRGBA = rgb.a < 1;
      onChange(isRGBA ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})` : hex);
    },
    [onChange],
  );
  return (
    <ChromePicker
      color={value || 'transparent'}
      onChange={handleChange}
      onClose={onClose}
    />
  );
};

export default ColorPicker;
