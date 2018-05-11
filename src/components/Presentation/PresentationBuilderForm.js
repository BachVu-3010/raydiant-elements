import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import immutable from 'object-path-immutable';
import isEqualArray from 'array-equal';
import ThemeProvider from '../../styles/ThemeProvider';
import TextField from '../TextField';
import NumberField from '../NumberField';
import Anchor from '../Typography/Anchor';
import Row from '../Row';
import Column from '../Column';
import Button from '../Button';
import PopoverAnchor from '../PopoverAnchor';
import AlertIcon from '../AlertIcon';
import validatePresentation from './validatePresentation';
import hasPresentationChanged from './hasPresentationChanged';
import * as formInputs from './formInputs';
import createDefaultValue from './createDefaultValue';
import getCrumbProperties from './formInputs/utilities/getCrumbProperties';
import getCrumbValue from './formInputs/utilities/getCrumbValue';
import getErrorsPerProp from './getErrorsPerProp';

const formInputTypes = {
  array: formInputs.ArrayInput,
  topLevelArray: formInputs.ArrayInput,
  boolean: formInputs.BooleanInput,
  date: formInputs.DateInput,
  file: formInputs.FileInput,
  link: formInputs.LinkInput,
  number: formInputs.NumberInput,
  selection: formInputs.SelectionInput,
  string: formInputs.StringInput,
  text: formInputs.TextInput,
  theme: formInputs.SelectionInput,
};

class PresentationBuilderForm extends React.Component {
  static propTypes = {
    /** Class name(s) */
    className: PropTypes.string,
    /** The presentation details */
    presentation: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      duration: PropTypes.number,
      application_vars: PropTypes.object,
      theme_id: PropTypes.string,
    }).isRequired,
    /** The appVersion definition */
    appVersion: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      configurable_duration: PropTypes.bool,
      presentation_properties: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.string,
          name: PropTypes.string,
          default: PropTypes.any,
          optional: PropTypes.bool,
          url: PropTypes.string,
          exclusive: PropTypes.bool,
          options: PropTypes.arrayOf(
            PropTypes.shape({ name: PropTypes.string, value: PropTypes.any })
          ),
          constraints: PropTypes.shape({
            'content-types': PropTypes.arrayOf(PropTypes.string),
            'content-length': PropTypes.number,
            maxlength: PropTypes.number,
            min: PropTypes.number,
            max: PropTypes.number,
          }),
        })
      ),
      strings: PropTypes.object,
    }).isRequired,
    /** The themes to inject if a theme property is provided */
    themes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
      })
    ),
    /** The minimum duration */
    minDuration: PropTypes.number,
    /** Called when a presentation has changed */
    onChange: PropTypes.func.isRequired,
    /** Called when a presentation property no longer has focus */
    onBlur: PropTypes.func,
    /** Called when a new file has been selected */
    onFile: PropTypes.func,
    /** Optional callback, will render a Cancel button if provided */
    onCancel: PropTypes.func,
    /** Called on submit when the presentation is valid */
    onSubmit: PropTypes.func,
    /** Optional popover that anchors to the save button */
    saveButtonPopover: PropTypes.node,
    /** Optional warnings to render */
    warnings: PropTypes.arrayOf(PropTypes.node),
    /** @ignore injected by withStyles */
    classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  };

  static defaultProps = {
    className: '',
    minDuration: 5,
    validate: false,
    onBlur: () => {},
    onFile: () => {},
    onError: () => {},
    onCancel: null,
    onSubmit: null,
    saveButtonPopover: null,
    warnings: [],
    themes: [],
  };

  // Expose the validation function to parent components.
  static validate = validatePresentation;

  constructor(props, context) {
    super(props, context);

    this.state = {
      presentation: props.presentation,
      errors: [],
      selectedPaths: {},
    };

    // When set to true we will validate whenever a presentation is updated.
    this.shouldValidateOnUpdate = false;
  }

  componentWillReceiveProps(nextProps) {
    // Reset the form when the presentation changes.
    if (nextProps.presentation.id !== this.props.presentation.id) {
      this.setState({
        presentation: nextProps.presentation,
        errors: [],
      });
    }
  }

  getSelectedPathForProp(propPath) {
    // We only want to maintain selectedPaths for the top-most array input.
    // The key at 0 is `application_variables`, the key at 1 is the root prop name.
    const rootPropName = propPath[1];
    // Return empty array if it doesn't exist.
    return this.state.selectedPaths[rootPropName] || [];
  }

  setSelectedPathForProp(propPath, path) {
    const rootPropName = propPath[1];
    // If rootPropName doesn't exist, that means the propPath isn't an array type.
    if (rootPropName) {
      this.setState({
        selectedPaths: {
          ...this.state.selectedPaths,
          [rootPropName]: path,
        },
      });
    }
  }

  setAppVar = (path, value, prop) => {
    const presentation = immutable.set(this.state.presentation, path, value);
    this.handleChange(presentation, prop, path, value);
  };

  setTheme = themeId => {
    const path = ['theme_id'];
    const presentation = immutable.set(this.state.presentation, path, themeId);
    this.handleChange(presentation, { type: 'theme' }, path, themeId);
  };

  setName = name => {
    const path = ['name'];
    const presentation = immutable.set(this.state.presentation, path, name);
    this.handleChange(presentation, { type: 'string' }, path, name);
  };

  setPresentation(presentation) {
    const { appVersion, minDuration } = this.props;

    if (this.shouldValidateOnUpdate) {
      this.setState({
        presentation,
        errors: validatePresentation(presentation, appVersion, minDuration),
      });
    } else {
      this.setState({ presentation });
    }
  }

  removeAppVar = (path, prop) => {
    const presentation = immutable.del(this.state.presentation, path);
    this.handleChange(presentation, prop, path);
  };

  addAppVar = (path, prop) => {
    const newValue = createDefaultValue(prop.properties);
    const presentation = immutable.push(
      this.state.presentation,
      path,
      newValue
    );
    this.handleChange(presentation, prop, path, newValue);
  };

  handleChange(presentation, prop, path, newValue) {
    const { appVersion, minDuration } = this.props;
    const errors = validatePresentation(presentation, appVersion, minDuration);
    // Update state regardless if it's a valid presentation or not.
    this.setPresentation(presentation);
    // Only call the onChange handler with valid presentations.
    if (errors.length === 0) {
      this.props.onChange(presentation, prop, path, newValue);
    }
  }

  handleSubmit = () => {
    const { appVersion, minDuration, onSubmit } = this.props;
    const { presentation } = this.state;
    const errors = validatePresentation(presentation, appVersion, minDuration);
    const propErrors = getErrorsPerProp(errors);
    // If there are prop errors where the error path is longer than the prop path,
    // set the selected path to make the error visible.
    const selectedPaths = { ...this.state.selectedPaths };
    propErrors.forEach(({ propPath, errorPath }) => {
      if (propPath.length < errorPath.length) {
        const rootPropName = propPath[1];
        // The error path contains the input that has the error. We want to set the
        // selected path to the item that contains the field (the input's parent).
        const itemPath = errorPath.slice(0, errorPath.length - 1);
        selectedPaths[rootPropName] = itemPath;
      }
    });

    this.shouldValidateOnUpdate = true;
    this.setState({ errors, selectedPaths });

    // Execute the submit callback when there are no validation errors.
    if (errors.length === 0) {
      onSubmit(presentation);
    }
  };

  renderAppVars = (appVars, appProperties, strings, path, context = {}) => {
    const { themes, onBlur, onFile } = this.props;
    const { presentation, errors } = this.state;

    const topLevel = path.length < 2;

    const properties = getCrumbProperties(appProperties, path).properties;
    const vars = getCrumbValue(appVars, path) || {};

    const inputTypes = { ...formInputTypes };
    if (topLevel) {
      // Top-level array inputs should track their selected path
      inputTypes.array = formInputTypes.topLevelArray;
    }

    return properties.map((prop, index) => {
      const name = prop.name;
      const label = strings[name] || name;
      const singularLabel =
        strings[prop.singular_name] || prop.singular_name || 'Item';
      const propPath = [...path, name];
      const propError = errors.filter(err =>
        isEqualArray(err.path, propPath)
      )[0];
      // Find all errors that start with the prop path.
      const childErrors = errors.filter(err =>
        propPath.every((pathPart, i) => err.path[i] === pathPart)
      );
      const hasError = !!propError;

      // Set focus to the first property at the selected path
      // unless it's the root path.
      const autoFocus = index === 0 && path.length > 1;

      let helperText = hasError
        ? propError.message
        : strings[prop.helper_text] || prop.helper_text;

      if (!hasError && prop.helper_link && helperText) {
        helperText = (
          <Anchor target="_blank" href={prop.helper_link}>
            {helperText}
          </Anchor>
        );
      }

      let value = vars[name];
      let options = prop.options;
      let onChange = newValue => this.setAppVar(propPath, newValue, prop);
      if (prop.type === 'theme') {
        // Override selection options with user themes.
        options = themes.map(theme => ({
          value: theme.id,
          name: theme.name,
        }));
        // Override selection value with presentation.theme_id.
        const defaultValue = themes.length > 0 ? themes[0].id : '';
        value = presentation.theme_id || defaultValue;
        // Override onChange handler to set presentation.theme_id.
        onChange = newValue => this.setTheme(newValue);
      }

      // Allocate space whether there is helperText or not when rendering
      // the main presentation properties, not list field properties.
      if (!helperText && topLevel) {
        helperText = ' ';
      }

      const inputProps = {
        key: name,
        ...context,
        appVars,
        appProperties,
        name,
        value,
        label,
        helperText,
        hasError,
        autoFocus,
        strings,
        constraints: prop.constraints,
        onChange,
        onFile: file => onFile(name, file),
        onBlur,
        url: prop.url, // Link
        optional: prop.optional,
        options, // Selection
        singularLabel, // Array
        childErrors, // Array
        properties: prop.properties, // Array
        propPath, // Array
        onAdd: addPath => this.addAppVar(addPath, prop), // Array
        onRemove: removePath => this.removeAppVar(removePath, prop), // Array and File
        renderAppVars: this.renderAppVars, // Array
        selectedPath: this.getSelectedPathForProp(propPath),
        setSelectedPath: selectedPath =>
          this.setSelectedPathForProp(propPath, selectedPath),
      };

      return React.createElement(inputTypes[prop.type], inputProps);
    });
  };

  renderWarnings() {
    const { warnings, classes } = this.props;
    /* eslint-disable react/no-array-index-key */
    return warnings.map((warning, i) => (
      <div key={i} className={classes.warning}>
        <AlertIcon color="white" className={classes.warningIcon} />
        {warning}
      </div>
    ));
    /* eslint-enable react/no-array-index-key */
  }

  render() {
    const {
      className,
      presentation: originalPresentation,
      appVersion,
      minDuration,
      classes,
      onCancel,
      onSubmit,
      saveButtonPopover,
    } = this.props;
    const { presentation, errors } = this.state;
    const nameError = errors.filter(err => isEqualArray(err.path, ['name']))[0];
    const durationError = errors.filter(err =>
      isEqualArray(err.path, ['duration'])
    )[0];
    const shouldDisableSave = !hasPresentationChanged(
      originalPresentation,
      presentation,
      appVersion
    );

    return (
      <ThemeProvider theme="gray">
        <div className={classnames(classes.container, className)}>
          <div className={classes.inputs}>
            <div className={classes.title}>Presentation Details</div>
            <Column>
              <TextField
                label="Name"
                value={presentation.name}
                error={!!nameError}
                helperText={nameError ? nameError.message : ' '}
                onChange={evt => this.setName(evt.target.value)}
              />
              {this.renderAppVars(
                presentation.application_vars,
                appVersion.presentation_properties,
                appVersion.strings,
                ['application_vars']
              )}
              {appVersion.configurable_duration && (
                <NumberField
                  label="Duration"
                  min={minDuration}
                  value={presentation.duration || minDuration}
                  error={!!durationError}
                  helperText={
                    durationError ? durationError.message : 'Time in seconds.'
                  }
                  onChange={evt =>
                    this.setPresentation({
                      ...presentation,
                      duration: parseInt(evt.target.value, 10),
                    })
                  }
                />
              )}
            </Column>
          </div>
          {this.renderWarnings()}
          <Row
            className={classes.formActions}
            size="dynamic-padded"
            color="primary"
            border="top"
            alignItems="center"
          >
            {onCancel && <Button label="Cancel" onClick={onCancel} />}
            {onCancel && onSubmit && <div className={classes.spacer} />}
            {onSubmit && (
              <PopoverAnchor>
                <Button
                  color="progress"
                  label="Save"
                  onClick={this.handleSubmit}
                  disabled={shouldDisableSave}
                />
                {saveButtonPopover}
              </PopoverAnchor>
            )}
          </Row>
        </div>
      </ThemeProvider>
    );
  }
}

const styles = theme => ({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0,
  },

  inputs: {
    flex: 1,
    padding: 16,
    overflowY: 'auto',
  },

  title: {
    color: theme.palette.text.secondary,
    marginBottom: 25,
  },

  spacer: {
    flex: 1,
  },

  warning: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 16px',
    backgroundColor: theme.palette.warning ? theme.palette.warning[500] : '',
  },

  warningIcon: {
    marginRight: 8,
  },

  formActions: {
    // Compensate for no cancel or submit button
    minHeight: 73,
    boxSizing: 'border-box',
  },
});

export default withStyles(styles)(PresentationBuilderForm);
