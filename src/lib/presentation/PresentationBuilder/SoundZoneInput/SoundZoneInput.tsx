import * as React from 'react';
import SelectField from '../../../core/SelectField';
import * as P from '../../PresentationTypes';

interface SoundZoneProps {
  label: string;
  value: string;
  soundZones: P.SoundZone[];
  helperText: React.ReactNode;
  error?: boolean;
  onChange: (value: string) => any;
  onBlur: React.FocusEventHandler<any>;
}

class SoundZone extends React.Component<SoundZoneProps> {
  componentDidMount() {
    this.checkDefaultValue();
  }

  componentDidUpdate(prevProps: SoundZoneProps) {
    const { soundZones } = this.props;

    const didSoundZonesChange =
      soundZones.length !== prevProps.soundZones.length ||
      soundZones.some((sz, i) => sz.id !== prevProps.soundZones[i].id);

    if (didSoundZonesChange) {
      this.checkDefaultValue();
    }
  }

  checkDefaultValue() {
    const { value, soundZones, onChange } = this.props;
    // Default to first sound zone if value is not set.
    if (!value && soundZones.length > 0) {
      onChange(soundZones[0].id);
    }
  }

  render() {
    const {
      label,
      value,
      soundZones,
      helperText,
      error,
      onChange,
      onBlur,
    } = this.props;

    const options = soundZones.map(soundZone => ({
      value: soundZone.id,
      name: soundZone.name,
    }));

    return (
      <SelectField
        label={label}
        value={value || (options[0] ? options[0].value : '')}
        onChange={onChange}
        onBlur={onBlur}
        helperText={helperText}
        error={error}
      >
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.name}
          </option>
        ))}
        {options.length === 0 && (
          <option disabled>No paired zones found</option>
        )}
      </SelectField>
    );
  }
}

export default SoundZone;
