import * as React from 'react';
import * as A from '../../../application/ApplicationTypes';
import ToggleButtonGroup from '../../../core/ToggleButtonGroup';

interface ToggleButtonGroupInputProps {
  label: string;
  value: string | string[];
  options?: A.SelectionOption[];
  onChange: (value: string | string[]) => any;
  onBlur: React.FocusEventHandler<any>;
  // TODO: Don't like that we need to pass in the strings object. Strings likely isn't
  // the correct way to i18n and we should remove it in the future.
  strings: A.Strings;
  exclusive?: boolean;
}

class ToggleButtonGroupInput extends React.Component<
  ToggleButtonGroupInputProps
> {
  static defaultProps = {
    options: [] as A.SelectionOption[],
    exclusive: false,
  };

  render() {
    const { label, value, onChange, onBlur, options, exclusive } = this.props;

    return (
      <ToggleButtonGroup
        label={label}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        exclusive={exclusive}
      >
        {options.map((opt, index) => (
          <ToggleButtonGroup.Button
            key={index}
            value={opt.value}
            disabled={opt.disabled}
          >
            {opt.thumbnailUrl ? <img src={opt.thumbnailUrl} /> : opt.label}
          </ToggleButtonGroup.Button>
        ))}
      </ToggleButtonGroup>
    );
  }
}

export default ToggleButtonGroupInput;
