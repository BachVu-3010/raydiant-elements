import * as immutable from 'object-path-immutable';
import * as React from 'react';
import ActionBar from '../../app/ActionBar';
import Button from '../../core/Button';
import Link from '../../core/Link';
import NumberField from '../../core/NumberField';
import Text from '../../core/Text';
import TextField from '../../core/TextField';
import withStyles, { WithStyles } from '../../core/withStyles';
import withThemeSelector from '../../core/withThemeSelector';
import Column from '../../layout/Column';
import OneThirdLayout from '../../layout/OneThirdLayout';
import Spacer from '../../layout/Spacer';
import * as T from '../PresentationTypes';
import ArrayInput from './ArrayInput';
import BooleanInput from './BooleanInput';
import DateInput from './DateInput';
import FileInput from './FileInput';
import hasPresentationChanged from './hasPresentationChanged';
import NumberInput from './NumberInput';
import OAuthInput from './OAuthInput';
import styles from './PresentationBuilder.styles';
import PresentationBuilderPreview from './PresentationBuilderPreview';
import PresentationBuilderWarning from './PresentationBuilderWarning';
import SelectionInput from './SelectionInput';
import StringInput from './StringInput';
import TextInput from './TextInput';
import ThemeInput from './ThemeInput';
import getErrorAtPath from './utilities/getErrorAtPath';
import validatePresentation from './validatePresentation';

interface PresentationBuilderProps extends WithStyles<typeof styles> {
  presentation: T.Presentation;
  appVersion: T.AppVersion;
  themes: T.Theme[];
  warnings: React.ReactNode[];
  // minDuration is used by legacy apps with configurable_duration = true and embedded apps.
  minDuration: number;
  onCancel?: () => void;
  onSave?: (presentation: T.Presentation) => void;
  onChange: (
    presentation: T.Presentation,
    prop: T.PresentationProperty,
    path: T.Path,
    value: any,
    file?: File,
  ) => void;
  children?: (
    presentation: T.Presentation,
    errors: T.PresentationError[],
  ) => React.ReactNode;
}

interface PresentationBuilderState {
  presentation: T.Presentation;
  previewPresentation: T.Presentation;
  validate: boolean;
  previewMode: T.PreviewMode;
}

export class PresentationBuilder extends React.Component<
  PresentationBuilderProps,
  PresentationBuilderState
> {
  static defaultProps = {};

  state = {
    presentation: this.props.presentation,
    previewPresentation: this.props.presentation,
    validate: false,
    previewMode: T.PreviewMode.Horizontal,
  };

  queuedPresentationPreview: T.Presentation | null = null;

  handleSave = () => {
    const { onSave, appVersion, minDuration } = this.props;
    const { presentation } = this.state;

    this.setState({ validate: true });

    // Only call the onSave handler with valid presentations.
    const errors = validatePresentation(presentation, appVersion, minDuration);
    if (errors.length === 0) {
      onSave(presentation);
    }
  };

  handleBlur = () => {
    // Flush any queued preview updates.
    if (this.queuedPresentationPreview) {
      this.setState({ previewPresentation: this.queuedPresentationPreview });
      this.queuedPresentationPreview = null;
    }
  };

  updatePresentation(
    path: T.Path,
    value: any,
    property: T.PresentationProperty,
    file?: File,
  ) {
    const { onChange, appVersion, minDuration } = this.props;
    const { presentation, previewPresentation } = this.state;

    // Remove the value if null or undefined for array inputs.
    const shouldDelete = value === null || value === undefined;
    const updatedPresentation = shouldDelete
      ? immutable.del(presentation, path)
      : immutable.set(presentation, path, value);

    // Only call onChange and update the preview with valid presentations.
    const errors = validatePresentation(
      updatedPresentation,
      appVersion,
      minDuration,
    );
    let shouldUpdatePreview = false;
    if (errors.length === 0) {
      // Delay updating the preview for text and string inputs until onBlur.
      if (property.type === 'string' || property.type === 'text') {
        this.queuedPresentationPreview = updatedPresentation;
      } else {
        // Clear any queued preview updates because we're about to update.
        this.queuedPresentationPreview = null;
        shouldUpdatePreview = true;
      }
      onChange(updatedPresentation, property, path, value, file);
    }

    this.setState({
      presentation: updatedPresentation,
      previewPresentation: shouldUpdatePreview
        ? updatedPresentation
        : previewPresentation,
    });
  }

  renderForm(
    appVars: T.ApplicationVariables,
    properties: T.PresentationProperty[],
    path: T.Path,
    strings: T.Strings,
    errors: T.PresentationError[],
  ) {
    const formInputs = properties.map(property => {
      const inputPath = [...path, property.name];

      return this.renderInput(
        property,
        // appVars can be undefined for newly added array items.
        appVars && appVars[property.name],
        inputPath,
        strings,
        errors,
      );
    });

    return formInputs;
  }

  renderInput(
    property: T.PresentationProperty,
    value: any = property.default,
    path: T.Path,
    strings: T.Strings,
    errors?: T.PresentationError[],
  ): React.ReactNode {
    const { themes } = this.props;
    const { presentation } = this.state;

    const key = property.name;
    const label = strings[property.name] || property.name;
    const constraints: T.Constraints = property.constraints || {};

    const inputError = getErrorAtPath(errors, path);
    const hasError = !!inputError;
    const helperText = this.renderInputHelperText(
      property,
      path,
      inputError ? inputError : '',
    );

    switch (property.type) {
      case 'string':
        return (
          <StringInput
            key={key}
            label={label}
            value={value}
            helperText={helperText}
            error={hasError}
            constraints={constraints}
            onBlur={this.handleBlur}
            onChange={newValue =>
              this.updatePresentation(path, newValue, property)
            }
          />
        );

      case 'text':
        return (
          <TextInput
            key={key}
            label={label}
            value={value}
            helperText={helperText}
            error={hasError}
            constraints={constraints}
            onBlur={this.handleBlur}
            onChange={newValue =>
              this.updatePresentation(path, newValue, property)
            }
          />
        );

      case 'number':
        return (
          <NumberInput
            key={key}
            label={label}
            value={value}
            helperText={helperText}
            error={hasError}
            constraints={constraints}
            onBlur={this.handleBlur}
            onChange={newValue =>
              this.updatePresentation(path, newValue, property)
            }
          />
        );

      case 'boolean':
        return (
          <BooleanInput
            key={key}
            label={label}
            value={value}
            helperText={helperText}
            error={hasError}
            onBlur={this.handleBlur}
            onChange={newValue =>
              this.updatePresentation(path, newValue, property)
            }
          />
        );

      case 'selection':
        return (
          <SelectionInput
            key={key}
            label={label}
            value={value}
            options={property.options}
            helperText={helperText}
            error={hasError}
            onBlur={this.handleBlur}
            onChange={newValue =>
              this.updatePresentation(path, newValue, property)
            }
            strings={strings}
          />
        );

      case 'date':
        return (
          <DateInput
            key={key}
            label={label}
            value={value}
            helperText={helperText}
            error={hasError}
            onBlur={this.handleBlur}
            onChange={newValue =>
              this.updatePresentation(path, newValue, property)
            }
          />
        );

      case 'file':
        return (
          <FileInput
            key={key}
            label={label}
            value={value}
            helperText={helperText}
            error={hasError}
            constraints={constraints}
            onBlur={this.handleBlur}
            onChange={(newValue, file) =>
              this.updatePresentation(path, newValue, property, file)
            }
          />
        );

      case 'oAuth':
        return (
          <OAuthInput
            key={key}
            path={path}
            label={label}
            value={value}
            authUrl={property.auth_url}
            verifyUrl={property.verify_url}
            verifyQsParam={property.verify_qs_param}
            helperText={helperText}
            error={hasError}
            onChange={newValue =>
              this.updatePresentation(path, newValue, property)
            }
          />
        );

      case 'theme':
        return (
          <ThemeInput
            key={key}
            label={label}
            value={presentation.themeId}
            themes={themes}
            helperText={helperText}
            error={hasError}
            onBlur={this.handleBlur}
            onChange={newValue =>
              this.updatePresentation(['themeId'], newValue, property)
            }
          />
        );

      case 'array':
        const singularLabel =
          strings[property.singular_name] || property.singular_name;
        return (
          <ArrayInput
            key={key}
            path={path}
            label={label}
            value={value}
            singularLabel={singularLabel}
            properties={property.properties}
            helperText={helperText}
            error={hasError}
            constraints={constraints}
            strings={strings}
            errors={errors}
            onBlur={this.handleBlur}
            onChange={newValue =>
              this.updatePresentation(path, newValue, property)
            }
            renderForm={(itemValue, itemProperties, itemPath) => (
              <Column>
                {this.renderForm(
                  itemValue,
                  itemProperties,
                  [...path, ...itemPath],
                  strings,
                  errors,
                )}
              </Column>
            )}
          />
        );

      default:
        return null;
    }
  }

  renderInputHelperText(
    property: T.PresentationProperty,
    path: T.Path,
    error?: string,
  ) {
    let helperText: React.ReactNode;

    if (error) {
      helperText = error;
    } else if (property.helper_link) {
      helperText = (
        <Link target="_blank" href={property.helper_link}>
          {property.helper_text}
        </Link>
      );
    } else if (property.helper_text) {
      helperText = property.helper_text;
    } else if (path.length <= 2) {
      // Inputs should always account for helper text spacing even if there isn't
      // any helper text displayed but only at the root (when path <= 2).
      helperText = ' ';
    }

    return helperText;
  }

  renderWarnings() {
    const { warnings = [] } = this.props;
    return warnings.map((warning, i) => (
      <PresentationBuilderWarning key={i} color="light">
        {warning}
      </PresentationBuilderWarning>
    ));
  }

  render() {
    const {
      classes,
      presentation: originalPresentation,
      appVersion,
      minDuration,
      onSave,
      onCancel,
      children,
    } = this.props;
    const {
      presentation,
      previewPresentation,
      validate,
      previewMode,
    } = this.state;

    const shouldDisableSave = !hasPresentationChanged(
      originalPresentation,
      presentation,
      appVersion,
    );

    const errors = validate
      ? validatePresentation(presentation, appVersion, minDuration)
      : [];

    // These are "fake" presentation properties for name and duration so they can
    // be treated the same as application variables when updating the presentation state.
    const nameProp = { type: 'string', name: 'name' };
    const durationProp = { type: 'number', name: 'duration' };
    const namePath = ['name'];
    const durationPath = ['duration'];
    const nameError = getErrorAtPath(errors, namePath);
    const durationError = getErrorAtPath(errors, durationPath);

    return (
      <OneThirdLayout>
        <OneThirdLayout.ColumnSmall>
          <div className={classes.scroll}>
            <div className={classes.title}>
              <Text muted>Presentation Details</Text>
            </div>
            <Column className={classes.inputs}>
              <TextField
                label="Name"
                value={presentation.name}
                onChange={name =>
                  this.updatePresentation(namePath, name, nameProp)
                }
                helperText={this.renderInputHelperText(
                  nameProp,
                  namePath,
                  nameError,
                )}
                error={!!nameError}
                onBlur={this.handleBlur}
              />

              {this.renderForm(
                presentation.applicationVariables,
                appVersion.presentationProperties,
                ['applicationVariables'],
                appVersion.strings,
                errors,
              )}

              {appVersion.hasConfigurableDuration && (
                <NumberField
                  label="Duration"
                  value={presentation.duration}
                  onChange={duration =>
                    this.updatePresentation(
                      durationPath,
                      duration,
                      durationProp,
                    )
                  }
                  helperText={this.renderInputHelperText(
                    durationProp,
                    durationPath,
                    durationError,
                  )}
                  error={!!durationError}
                  onBlur={this.handleBlur}
                />
              )}
            </Column>
          </div>

          {this.renderWarnings()}

          <ActionBar condensed bottom color="light">
            {onCancel && <Button label="Cancel" onClick={onCancel} />}
            <Spacer />
            {onSave && (
              <Button
                label="Save"
                color="progress"
                disabled={shouldDisableSave}
                onClick={this.handleSave}
              />
            )}
          </ActionBar>
        </OneThirdLayout.ColumnSmall>

        <OneThirdLayout.ColumnLarge>
          <PresentationBuilderPreview
            color="dark"
            appVersion={appVersion}
            previewMode={previewMode}
            onPreviewModeChange={value => this.setState({ previewMode: value })}
          >
            {children(
              previewPresentation,
              validatePresentation(
                previewPresentation,
                appVersion,
                minDuration,
              ),
            )}
          </PresentationBuilderPreview>
        </OneThirdLayout.ColumnLarge>
      </OneThirdLayout>
    );
  }
}

export default withThemeSelector(
  withStyles(styles)(PresentationBuilder),
  'grey',
);
