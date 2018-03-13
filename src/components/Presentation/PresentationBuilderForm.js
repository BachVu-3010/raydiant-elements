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
import PathTracker from './formInputs/PathTracker';

const formInputTypes = {
  array: formInputs.ArrayInput,
  topLevelArray: PathTracker(formInputs.ArrayInput),
  boolean: formInputs.BooleanInput,
  date: formInputs.DateInput,
  file: formInputs.FileInput,
  link: formInputs.LinkInput,
  number: formInputs.NumberInput,
  selection: formInputs.SelectionInput,
  string: formInputs.StringInput,
  text: formInputs.TextInput,
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
    }).isRequired,
    /** The application definition */
    application: PropTypes.shape({
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
    onSubmit: PropTypes.func.isRequired,
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
    onCancel: null,
    saveButtonPopover: null,
    warnings: [],
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      presentation: props.presentation,
      errors: [],
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

  setAppVar = (path, value, prop) => {
    const presentation = immutable.set(this.state.presentation, path, value);

    this.setPresentation(presentation);
    this.props.onChange(presentation, prop, path, value);
  };

  setPresentation(presentation) {
    const { application, minDuration } = this.props;

    if (this.shouldValidateOnUpdate) {
      this.setState({
        presentation,
        errors: validatePresentation(presentation, application, minDuration),
      });
    } else {
      this.setState({ presentation });
    }
  }

  removeAppVar = (path, prop) => {
    const presentation = immutable.del(this.state.presentation, path);

    this.setPresentation(presentation);
    this.props.onChange(presentation, prop, path);
  };

  addAppVar = (path, prop) => {
    const newValue = createDefaultValue(prop.properties);
    const presentation = immutable.push(
      this.state.presentation,
      path,
      newValue
    );

    this.setPresentation(presentation);
    this.props.onChange(presentation, prop, path, newValue);
  };

  handleSubmit = () => {
    const { application, minDuration, onSubmit } = this.props;
    const { presentation } = this.state;
    const errors = validatePresentation(presentation, application, minDuration);

    this.shouldValidateOnUpdate = true;
    this.setState({ errors });

    // Execute the submit callback when there are no validation errors.
    if (errors.length === 0) {
      onSubmit(presentation);
    }
  };

  renderAppVars = (appVars, appProperties, strings, path, context = {}) => {
    const { onBlur, onFile } = this.props;
    const { errors } = this.state;

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
      const value = vars[name];
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

      // Set focus to the first property at the selected path.
      const autoFocus = index === 0;

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
        onChange: newValue => this.setAppVar(propPath, newValue, prop),
        onFile: file => onFile(name, file),
        onBlur,
        url: prop.url, // Link
        optional: prop.optional,
        options: prop.options, // Selection
        singularLabel, // Array
        childErrors, // Array
        properties: prop.properties, // Array
        propPath, // Array
        onAdd: addPath => this.addAppVar(addPath, prop), // Array
        onRemove: removePath => this.removeAppVar(removePath, prop), // Array and File
        renderAppVars: this.renderAppVars, // Array
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
      application,
      minDuration,
      classes,
      onCancel,
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
      application
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
                onChange={evt =>
                  this.setPresentation({
                    ...presentation,
                    name: evt.target.value,
                  })
                }
              />
              {this.renderAppVars(
                presentation.application_vars,
                application.presentation_properties,
                application.strings,
                ['application_vars']
              )}
              {application.configurable_duration && (
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
            size="dynamic-padded"
            color="primary"
            border="top"
            alignItems="center"
          >
            {onCancel && <Button label="Cancel" onClick={onCancel} />}
            {onCancel && <div className={classes.spacer} />}
            <PopoverAnchor>
              <Button
                color="progress"
                label="Save"
                onClick={this.handleSubmit}
                disabled={shouldDisableSave}
              />
              {saveButtonPopover}
            </PopoverAnchor>
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
});

export default withStyles(styles)(PresentationBuilderForm);
