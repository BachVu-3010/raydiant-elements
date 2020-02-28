import * as React from 'react';
import * as A from '../../../application/ApplicationTypes';
import MultiSelectField from '../../../core/MultiSelectField';
import SelectField from '../../../core/SelectField';
import * as P from '../../PresentationTypes';

interface SelectionInputProps {
  label: string;
  value: string | string[];
  multiple?: boolean;
  options?: A.SelectionOption[];
  optionsUrl?: string;
  helperText?: React.ReactNode;
  error?: boolean;
  disabled?: boolean;
  onChange: (value: string | string[]) => any;
  onBlur: React.FocusEventHandler<any>;
  // TODO: Don't like that we need to pass in the strings object. Strings likely isn't
  // the correct way to i18n and we should remove it in the future.
  strings: A.Strings;
  parentValue: P.ApplicationVariables;
}

interface SelectionInputState {
  options: A.SelectionOption[] | null;
  optionsError: string;
}

class SelectionInput extends React.Component<
  SelectionInputProps,
  SelectionInputState
> {
  static defaultProps = {
    multiple: false,
    options: [] as A.SelectionOption[],
    optionsUrl: '',
  };

  state = {
    options: null as A.SelectionOption[],
    optionsError: '',
  };

  componentDidMount() {
    if (this.props.optionsUrl) {
      this.fetchOptions();
    }
  }

  componentDidUpdate(prevProps: SelectionInputProps) {
    const { optionsUrl, parentValue } = this.props;

    if (optionsUrl) {
      // Find the prop names that the URL depends on.
      const dependsOn: string[] = [];
      optionsUrl.replace(/\{\{(.*?)\}\}/g, (token, propName) => {
        dependsOn.push(propName);
        // We need to return something to appease TS but we don't actually
        // use the result of the replace.
        return token;
      });

      // Re-fetch options when one of the properties that the options url
      // depends on has changed.
      const shouldFetchOptions = dependsOn.some(
        propName => parentValue[propName] !== prevProps.parentValue[propName],
      );

      if (shouldFetchOptions) {
        this.fetchOptions();
      }
    }
  }

  async fetchOptions() {
    const { optionsUrl, parentValue } = this.props;
    const defaultErrorMessage = 'Failed to load options.';

    // Replace {{propName}} with the prop values in the URL.
    //   ie. ?access_token={{accessToken}} => ?access_token=abc123
    const url = optionsUrl.replace(
      /\{\{(.*?)\}\}/g,
      (_, propName) => parentValue[propName] || '',
    );

    const resp = await fetch(url);
    if (resp.ok) {
      try {
        const options = await resp.json();
        // Set the default value before the options. This fixes an issue with
        // multi-selects not ordering the selected items to the top of the list.
        this.checkDefaultOptions(options);
        this.setState({ options });
      } catch (err) {
        this.setState({ optionsError: defaultErrorMessage });
      }
    } else {
      try {
        const error = await resp.json();
        this.setState({ optionsError: error.message || defaultErrorMessage });
      } catch (err) {
        this.setState({ optionsError: defaultErrorMessage });
      }
    }
  }

  checkDefaultOptions(options: A.SelectionOption[]) {
    const { value, multiple, onChange } = this.props;
    const isValueUnset = value === null || value === undefined;
    const hasOptions = options.length > 0;

    const isValueInOptions = multiple
      ? Array.isArray(value) &&
        value.length > 0 &&
        value.every(v => options.some(opt => opt.value === v))
      : options.some(opt => opt.value === value);

    const shouldSetValueToDefault = isValueUnset || !isValueInOptions;

    if (shouldSetValueToDefault && hasOptions) {
      const defaultValue = options
        .filter(opt => opt.default)
        .map(opt => opt.value);

      if (defaultValue.length > 0) {
        if (multiple) {
          onChange(defaultValue);
        } else {
          onChange(defaultValue[0]);
        }
      }
    }
  }

  render() {
    const {
      label,
      value,
      multiple,
      helperText,
      error,
      disabled,
      onChange,
      onBlur,
      strings,
    } = this.props;

    const options = this.state.options || this.props.options;

    if (multiple) {
      // Ensure it's an array to appease TS.
      const multiSelectValue = Array.isArray(value)
        ? value
        : Array.from(value || []);

      return (
        <MultiSelectField
          label={label}
          value={multiSelectValue}
          helperText={helperText}
          error={error}
          disabled={disabled}
          onChange={onChange}
          onBlur={onBlur}
        >
          {options.map((opt, index) => (
            <MultiSelectField.Option
              key={index}
              value={opt.value}
              label={strings[opt.name] || opt.name || opt.label}
            />
          ))}
        </MultiSelectField>
      );
    }

    // Ensure it's not an array to appease TS.
    const singleSelectValue = Array.isArray(value) ? value[0] : value;

    return (
      <SelectField
        label={label}
        value={singleSelectValue || (options[0] ? options[0].value : '')}
        onChange={onChange}
        onBlur={onBlur}
        helperText={helperText}
        error={error}
        disabled={disabled}
      >
        {options.map((opt, index) => (
          <option key={index} value={opt.value}>
            {strings[opt.name] || opt.name || opt.label}
          </option>
        ))}
      </SelectField>
    );
  }
}

export default SelectionInput;
