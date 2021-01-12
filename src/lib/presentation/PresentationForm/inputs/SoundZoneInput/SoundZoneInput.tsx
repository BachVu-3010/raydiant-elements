import * as React from 'react';
import SelectField from '../../../../core/SelectField';
import * as P from '../../../PresentationTypes';

interface SoundZoneProps {
  label: string;
  value: string;
  soundZones: P.SoundZone[];
  helperText: React.ReactNode;
  error?: boolean;
  disabled?: boolean;
  onChange: (value: string) => any;
}

class SoundZone extends React.Component<SoundZoneProps> {
  onChangeTimeout: number;

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
      this.onChangeTimeout = setTimeout(() => {
        onChange(soundZones[0].id);
      });
    }
  }

  componentWillUnmount() {
    clearTimeout(this.onChangeTimeout);
  }

  render() {
    const {
      label,
      value,
      soundZones,
      helperText,
      error,
      disabled,
      onChange,
    } = this.props;

    const soundZone = soundZones.find(sz => sz.id === value);
    // Assume the soundzone was assigned by an admin if there is a soundzone id but we can't
    // find it in the current user's soundzones. This is a workaround, ideally the API would return
    // the basic information about the assigned soundzone if the current user doesn't have access to it.
    const isAdminAssigned = value && !soundZone;

    const options = soundZones.map(sz => ({
      value: sz.id,
      name: sz.name,
    }));

    return (
      <SelectField
        label={label}
        value={value || (options[0] ? options[0].value : '')}
        onChange={onChange}
        helperText={helperText}
        error={error}
        disabled={disabled}
      >
        {isAdminAssigned && (
          <option value={value}> Administrator assigned sound zone</option>
        )}
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
