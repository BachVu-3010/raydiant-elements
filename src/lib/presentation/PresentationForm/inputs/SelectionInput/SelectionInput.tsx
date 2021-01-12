import * as React from 'react';
import * as isEqual from 'lodash.isequal';
import * as A from '../../../../application/ApplicationTypes';
import Link from '../../../../core/Link';
import MultiSelectField from '../../../../core/MultiSelectField';
import SelectField from '../../../../core/SelectField';
import replacePropNameWithValue from '../../../../helpers/replacePropNameWithValue';
import * as P from '../../../PresentationTypes';

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
    const { optionsUrl, parentValue } = this.props;

    if (optionsUrl) {
      const dependentProps = this.getDependentProps();
      // All dependencies must be not be undefined in order to fetch options.
      const shouldFetchOptions = dependentProps.every(
        propName => parentValue[propName] !== undefined,
      );

      if (shouldFetchOptions) {
        this.fetchOptions();
      }
    }
  }

  componentDidUpdate(prevProps: SelectionInputProps) {
    const { optionsUrl, parentValue } = this.props;

    if (optionsUrl) {
      // Re-fetch options when one of the properties that the options url
      // depends on has changed.
      const updatedDependentProps = this.getUpdatedDependentProps(
        prevProps.parentValue,
      );

      // All updated dependencies must be not be undefined in order to fetch options.
      const shouldFetchOptions =
        updatedDependentProps.length > 0 &&
        updatedDependentProps.every(
          propName => parentValue[propName] !== undefined,
        );

      if (shouldFetchOptions) {
        // When parent value is changed, set the value of current element back to default
        this.fetchOptions();
      }
    }
  }

  getDependentProps() {
    const { optionsUrl } = this.props;
    // Find the prop names that the URL depends on.
    const dependsOn: string[] = [];
    optionsUrl.replace(/\{\{(.*?)\}\}/g, (token, propName) => {
      dependsOn.push(propName);
      // We need to return something to appease TS but we don't actually
      // use the result of the replace.
      return token;
    });

    return dependsOn;
  }

  getUpdatedDependentProps(prevParentValue: P.ApplicationVariables) {
    const { parentValue } = this.props;
    return this.getDependentProps().filter(
      propName => !isEqual(parentValue[propName], prevParentValue[propName]),
    );
  }

  async fetchOptions() {
    const { optionsUrl, parentValue } = this.props;
    const defaultErrorMessage = 'Failed to load options.';
    const url = replacePropNameWithValue(optionsUrl, parentValue, true);

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

  getLabel(option: A.SelectionOption) {
    const { strings } = this.props;
    return strings[option.name] || option.name || option.label;
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
        >
          {options.map((opt, index) => (
            <MultiSelectField.Option
              key={index}
              value={opt.value}
              label={this.getLabel(opt)}
            />
          ))}
        </MultiSelectField>
      );
    }

    // Ensure it's not an array to appease TS.
    const singleSelectValue = Array.isArray(value) ? value[0] : value;
    const hasThumbnails = options.some(({ thumbnailUrl }) => !!thumbnailUrl);
    const selectValue =
      singleSelectValue || (options[0] ? options[0].value : '');

    const chosenOption = selectValue
      ? (options || []).find(option => option.value === selectValue)
      : undefined;
    const optionHelperText = chosenOption ? chosenOption.helperText : undefined;
    const optionHelperLink = chosenOption ? chosenOption.helperLink : undefined;
    const optionHelper = optionHelperLink ? (
      <Link target="_blank" href={optionHelperLink}>
        {optionHelperText || optionHelperLink}
      </Link>
    ) : (
      optionHelperText
    );
    const optionError = chosenOption ? chosenOption.error : false;

    return (
      <SelectField
        label={label}
        value={selectValue}
        onChange={onChange}
        helperText={optionHelper || helperText}
        error={optionError || error}
        disabled={disabled}
        native={!hasThumbnails}
      >
        {options.map((opt, index) =>
          hasThumbnails ? (
            <SelectField.Item
              key={index}
              value={opt.value}
              thumbnailUrl={opt.thumbnailUrl}
            >
              {this.getLabel(opt)}
            </SelectField.Item>
          ) : (
            <option key={index} value={opt.value}>
              {this.getLabel(opt)}
            </option>
          ),
        )}
      </SelectField>
    );
  }
}

export default SelectionInput;
