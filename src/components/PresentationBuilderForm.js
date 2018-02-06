import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import validatePresentation from '../utilities/validatePresentation';
import hasPresentationChanged from '../utilities/hasPresentationChanged';
import ThemeProvider from '../styles/ThemeProvider';
import TextField from './TextField';
import NumberField from './NumberField';
import Switch from './Switch';
import FileField from './FileField';
import Anchor from './Typography/Anchor';
import SelectField from './SelectField';
import DatePicker from './DatePicker';
import Row from './Row';
import Column from './Column';
import Button from './Button';
import PopoverAnchor from './PopoverAnchor';
import AlertIcon from './AlertIcon';

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
      errors: {},
    };

    // When set to true we will validate whenever a presentation is updated.
    this.shouldValidateOnUpdate = false;
  }

  componentWillReceiveProps(nextProps) {
    // Reset the form when the presentation changes.
    if (nextProps.presentation.id !== this.props.presentation.id) {
      this.setState({
        presentation: nextProps.presentation,
        errors: {},
      });
    }
  }

  setAppVar = (prop, value) => {
    const presentation = this.setPresentation({
      application_vars: {
        ...this.state.presentation.application_vars,
        [prop.name]: value,
      },
    });

    this.props.onChange(presentation, prop, value);
  };

  setPresentation(props) {
    const { application, minDuration } = this.props;
    const presentation = {
      ...this.state.presentation,
      ...props,
    };

    if (this.shouldValidateOnUpdate) {
      this.setState({
        presentation,
        errors: validatePresentation(presentation, application, minDuration),
      });
    } else {
      this.setState({ presentation });
    }

    return presentation;
  }

  handleSubmit = () => {
    const { application, minDuration, onSubmit } = this.props;
    const { presentation } = this.state;
    const errors = validatePresentation(presentation, application, minDuration);

    this.shouldValidateOnUpdate = true;
    this.setState({ errors });

    // Execute the submit callback when there are no validation errors.
    if (Object.keys(errors).length === 0) {
      onSubmit(presentation);
    }
  };

  renderAppVars() {
    const { application, classes, onBlur, onFile } = this.props;
    const { presentation, errors } = this.state;

    return application.presentation_properties.map(prop => {
      const value = presentation.application_vars[prop.name];
      const label = application.strings[prop.name] || prop.name;
      const hasError = !!errors[prop.name];
      let helperText =
        errors[prop.name] ||
        application.strings[prop.helperText] ||
        prop.helperText;

      if (prop.helperLink && helperText) {
        helperText = (
          <Anchor target="_blank" href={prop.helperLink}>
            {helperText}
          </Anchor>
        );
      }

      // Always allocate space whether there is helperText or not.
      helperText = helperText || ' ';

      let input;

      if (prop.type === 'boolean') {
        input = (
          <Switch
            key={prop.name}
            checked={value}
            helperText={helperText}
            onChange={evt => this.setAppVar(prop, evt.target.checked)}
            onBlur={onBlur}
          >
            {label}
          </Switch>
        );
      } else if (prop.type === 'link') {
        // TODO: Remove this once all app have been updated to use helperLink
        input = (
          <Anchor
            key={prop.name}
            className={classes.link}
            href={prop.url}
            target="_blank"
          >
            {label}
          </Anchor>
        );
      } else if (prop.type === 'number') {
        input = (
          <NumberField
            key={prop.name}
            label={label}
            value={value}
            min={prop.min}
            max={prop.max}
            helperText={helperText}
            error={hasError}
            onChange={evt =>
              this.setAppVar(prop, parseInt(evt.target.value, 10))
            }
            onBlur={onBlur}
          />
        );
      } else if (prop.type === 'text') {
        input = (
          <TextField
            key={prop.name}
            multiline
            label={label}
            value={value}
            maxLength={prop.maxLength}
            helperText={helperText}
            error={hasError}
            onChange={evt => this.setAppVar(prop, evt.target.value)}
            onBlur={onBlur}
          />
        );
      } else if (prop.type === 'selection') {
        input = (
          <SelectField
            key={prop.name}
            label={label}
            value={value}
            helperText={helperText}
            error={hasError}
            onChange={evt => this.setAppVar(prop, evt.target.value)}
            onBlur={onBlur}
          >
            {prop.options.map(opt => (
              <option key={opt.value} value={opt.value}>
                {application.strings[opt.name] || opt.name}
              </option>
            ))}
          </SelectField>
        );
      } else if (prop.type === 'file') {
        const accept = prop.constraints['content-types'].join(',');
        // FileField accepts a FileList as it's value so for existing uploads to display
        // the file name in the input we need to create a fake FileList.
        let fileList;
        if (value && value.filename) {
          fileList = [{ name: value.filename }];
        }

        input = (
          <FileField
            key={prop.name}
            label={label}
            value={fileList}
            helperText={helperText}
            error={hasError}
            accept={accept}
            onChange={e => {
              const files = e.target.files;
              if (files && files.length) {
                // We don't support multiple files per presentation property.
                const file = files[0];
                onFile(prop.name, file);

                this.setAppVar(prop, {
                  filename: file.name,
                  url: URL.createObjectURL(file),
                  'content-type': file.type,
                  'content-length': file.size,
                });
              }
            }}
            onBlur={onBlur}
          />
        );
      } else if (prop.type === 'date') {
        input = (
          <DatePicker
            key={prop.name}
            label={label}
            value={value}
            helperText={helperText}
            error={hasError}
            onDateChange={date => this.setAppVar(prop, date)}
            onBlur={onBlur}
          />
        );
      } else if (prop.type === 'string') {
        input = (
          <TextField
            key={prop.name}
            label={label}
            value={value}
            maxLength={prop.maxLength}
            helperText={helperText}
            error={hasError}
            onChange={evt => this.setAppVar(prop, evt.target.value)}
            onBlur={onBlur}
          />
        );
      } else {
        throw new Error(`Invalid prop type for '${prop.name}'`);
      }

      return input;
    });
  }

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
                helperText={errors.name || ' '}
                error={!!errors.name}
                onChange={evt =>
                  this.setPresentation({ name: evt.target.value })
                }
              />
              {this.renderAppVars()}
              {application.configurable_duration && (
                <NumberField
                  label="Duration"
                  min={minDuration}
                  value={presentation.duration || minDuration}
                  error={!!errors.duration}
                  helperText={errors.duration || 'Time in seconds.'}
                  onChange={evt =>
                    this.setPresentation({
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
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
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

  // TODO: Remove this once all apps have been updated to use helperLink
  link: {
    // Hack to make link types appear as helper text for
    // the previous presentation property
    marginTop: '-26px !important',
    position: 'relative',
    fontSize: 12,
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
