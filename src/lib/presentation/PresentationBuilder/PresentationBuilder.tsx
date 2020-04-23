import * as immutable from 'object-path-immutable';
import * as React from 'react';
import * as A from '../../application/ApplicationTypes';
import ActionBar from '../../core/ActionBar';
import Button from '../../core/Button';
import Form from '../../core/Form';
import Link from '../../core/Link';
import NumberField from '../../core/NumberField';
import Popover from '../../core/Popover';
import TextField from '../../core/TextField';
import withStyles, { WithStyles } from '../../core/withStyles';
import withThemeSelector from '../../core/withThemeSelector';
import AffectedScreensPopover from '../../devices/AffectedScreensPopover';
import * as D from '../../devices/DeviceTypes';
import Column from '../../layout/Column';
import Hidden from '../../layout/Hidden';
import OneThirdLayout from '../../layout/OneThirdLayout';
import Spacer from '../../layout/Spacer';
import Text from '../../typography/Text';
import * as P from '../PresentationTypes';
import ArrayInput from './ArrayInput';
import BooleanInput from './BooleanInput';
import DateInput from './DateInput';
import FacebookAuthInput from './FacebookAuthInput';
import FileInput from './FileInput';
import GoogleAuthInput from './GoogleAuthInput';
import hasPresentationChanged from './hasPresentationChanged';
import ImagePickerFieldInput from './ImagePickerFieldInput/ImagePickerFieldInput';
import NumberInput from './NumberInput';
import OAuthInput from './OAuthInput';
import OneDriveAuthInput from './OneDriveAuthInput';
import PlaylistInput from './PlaylistInput';
import styles from './PresentationBuilder.styles';
import PresentationBuilderPreview from './PresentationBuilderPreview';
import PresentationBuilderWarning from './PresentationBuilderWarning';
import SelectionInput from './SelectionInput';
import SoundZoneInput from './SoundZoneInput';
import StringInput from './StringInput';
import TextInput from './TextInput';
import ThemeInput from './ThemeInput';
import ToggleButtonGroupInput from './ToggleButtonGroupInput/ToggleButtonGroupInput';
import { getErrorAtPath, getPropertyAtPath, isPathEqual } from './utilities';
import validatePresentation from './validatePresentation';

// These are "fake" presentation properties for name and duration so they can
// be treated the same as application variables when updating the presentation state.
const namePath = ['name'];
const durationPath = ['duration'];
const nameProp = { type: 'string', name: 'name' };
const durationProp = { type: 'number', name: 'duration' };

interface SelectedPropertyPath {
  propertyPath: P.Path;
  selectedPath: P.Path;
}

interface PresentationBuilderProps extends WithStyles<typeof styles> {
  presentation?: P.Presentation;
  initialPresentationState?: P.Presentation;
  appVersion?: A.ApplicationVersion;
  themes?: P.Theme[];
  soundZones?: P.SoundZone[];
  playlists?: P.Playlist[];
  affectedDevices?: D.Device[];
  previewMode?: P.PreviewMode;
  header?: React.ReactNode;
  // minDuration is used by legacy apps with configurable_duration = true and embedded apps.
  minDuration?: number;
  didSave?: boolean;
  backToLabel?: string;
  onBack?: () => void;
  onSave?: () => void;
  onDone?: () => void;
  onStateChange?: (
    presentation: P.Presentation,
    fileUploads: FileUpload[],
  ) => void;
  onSelectedPathChange?: (selectedPaths: SelectedPropertyPath[]) => void;
  children?: (
    presentation: P.Presentation,
    errors: P.PresentationError[],
    previewMode: P.PreviewMode,
  ) => React.ReactNode;
  onPlaylistEdit?: (playlistId: string, path: P.Path) => void;
  onPlaylistCreate?: (path: P.Path) => void;
}

interface FileUpload {
  path: P.Path;
  file: File;
}

interface PresentationBuilderState {
  presentation?: P.Presentation;
  previewPresentation?: P.Presentation;
  validate: boolean;
  previewMode: P.PreviewMode;
  fileUploads: FileUpload[];
  showAffectedDevices: boolean;
}

export class PresentationBuilder extends React.Component<
  PresentationBuilderProps,
  PresentationBuilderState
> {
  static defaultProps: Partial<PresentationBuilderProps> = {
    themes: [],
    soundZones: [],
    playlists: [],
    affectedDevices: [],
    minDuration: 5,
    previewMode: P.PreviewMode.Horizontal,
  };

  state: PresentationBuilderState = {
    presentation:
      this.props.initialPresentationState || this.props.presentation,
    previewPresentation:
      this.props.initialPresentationState || this.props.presentation,
    validate: false,
    previewMode: this.props.previewMode,
    fileUploads: [],
    showAffectedDevices: false,
  };

  queuedPresentationPreview: P.Presentation | null = null;
  selectedPropertyPaths: SelectedPropertyPath[] = [];

  componentDidMount() {
    const { presentation, appVersion } = this.props;

    if (presentation && appVersion) {
      this.checkHashParams();
    }
  }

  componentDidUpdate(prevProps: PresentationBuilderProps) {
    const { presentation, initialPresentationState } = this.props;
    if (!prevProps.presentation && presentation) {
      this.setState(
        {
          presentation: initialPresentationState || presentation,
          previewPresentation: initialPresentationState || presentation,
        },
        this.checkHashParams,
      );
    }

    // Below is only here because of MiraKit in order to re-render the preview
    // when the values change outside of the form.
    if (
      prevProps.presentation &&
      presentation &&
      (prevProps.presentation.id !== presentation.id ||
        Object.keys(prevProps.presentation.applicationVariables).length !==
          Object.keys(presentation.applicationVariables).length)
    ) {
      this.setState({ presentation, previewPresentation: presentation });
    }
  }

  checkHashParams() {
    const { appVersion } = this.props;
    // Get the window hash without the leading '#'.
    const hash = window.location.hash.substr(1);
    // Parse hash params by splitting on & (or #) and then =.
    //   ie. #applicationVariables.headingText=text => [['applicationVariables.headingText', 'SomeText'], ...]
    const hashParams = hash.split(/[&#]/).map(paramStr => paramStr.split('='));

    hashParams.forEach(hashParam => {
      if (hashParam.length !== 2) return;

      const path: Path = hashParam[0].split('.').filter(pathPart => !!pathPart);
      if (!path.length) return;

      // Try to find the property at this path.
      let property: A.PresentationProperty;
      if (path[0] === 'applicationVariables') {
        property = getPropertyAtPath(appVersion.presentationProperties, path);
      } else if (isPathEqual(path, namePath)) {
        property = nameProp;
      } else if (isPathEqual(path, durationPath)) {
        property = durationProp;
      }

      if (!property) return;

      let value: any = decodeURIComponent(hashParam[1]);
      try {
        value = JSON.parse(value);
      } catch (err) {
        // If we can't parse valid JSON, assume a string value is passed in.
        // This allows the hash param to omit quotes (ie. #headingText=text)
      }

      if (value !== undefined) {
        this.updatePresentation(path, value, property, undefined, true);
      }
    });

    // Clear hash parameters to avoid leaking tokens and other sensitive
    // values to the user.
    window.location.hash = '';
  }

  validate() {
    const { appVersion, minDuration } = this.props;
    const { presentation } = this.state;

    this.setState({ validate: true });
    return validatePresentation(presentation, appVersion, minDuration);
  }

  handleSave = () => {
    if (this.validate().length === 0) {
      this.props.onSave();
    }
  };

  handleDone = () => {
    if (this.validate().length === 0) {
      this.props.onDone();
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
    path: P.Path,
    value: any,
    property: A.PresentationProperty,
    file?: File,
    forceFlush?: boolean,
  ) {
    const { onStateChange, appVersion, minDuration } = this.props;
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
    let fileUploads = this.state.fileUploads;

    if (errors.length === 0) {
      // Delay updating the preview for text and string inputs until onBlur.
      if (
        (property.type === 'string' || property.type === 'text') &&
        !forceFlush
      ) {
        this.queuedPresentationPreview = updatedPresentation;
      } else {
        // Clear any queued preview updates because we're about to update.
        this.queuedPresentationPreview = null;
        shouldUpdatePreview = true;
      }

      if (property.type === 'file') {
        fileUploads = this.getFileUploads(path, file);
      }
    }

    if (onStateChange) {
      onStateChange(updatedPresentation, fileUploads);
    }

    this.setState({
      presentation: updatedPresentation,
      previewPresentation: shouldUpdatePreview
        ? updatedPresentation
        : previewPresentation,
      fileUploads,
    });
  }

  getFileUploads(path: P.Path, file: File) {
    const { fileUploads: previousFileUploads } = this.state;
    let fileUploads: FileUpload[];

    if (file) {
      const existingFileAtPath = previousFileUploads.find(f =>
        isPathEqual(f.path, path),
      );
      if (existingFileAtPath) {
        // Update file upload at path.
        fileUploads = previousFileUploads.map(f =>
          f === existingFileAtPath ? { path, file } : f,
        );
      } else {
        // Add file upload.
        fileUploads = [...previousFileUploads, { path, file }];
      }
    } else {
      fileUploads = previousFileUploads.filter(f => !isPathEqual(f.path, path));
    }

    return fileUploads;
  }

  setSelectedPaths(propertyPath: P.Path, selectedPath: P.Path) {
    const { onSelectedPathChange } = this.props;

    if (!onSelectedPathChange) return;

    let selectedPropertyAtPath = this.selectedPropertyPaths.find(
      selectedPropertyPath =>
        isPathEqual(selectedPropertyPath.propertyPath, propertyPath),
    );

    if (selectedPropertyAtPath) {
      // Remove existing selected path at property.
      this.selectedPropertyPaths = this.selectedPropertyPaths.filter(
        selectedPropertyPath => selectedPropertyPath !== selectedPropertyAtPath,
      );
    }

    selectedPropertyAtPath = { propertyPath, selectedPath };

    this.selectedPropertyPaths = [
      ...this.selectedPropertyPaths,
      selectedPropertyAtPath,
    ];

    onSelectedPathChange(this.selectedPropertyPaths);
  }

  renderApplicationVariables(
    appVars: P.ApplicationVariables,
    properties: A.PresentationProperty[],
    path: P.Path,
    strings: A.Strings,
    errors: P.PresentationError[],
  ) {
    const propertyTypeIndexes: { [key: string]: number } = {};
    const formInputs = properties.map(property => {
      const propertyPath = [...path, property.name];
      const propertyTypeIndex = propertyTypeIndexes[property.type] || 0;
      propertyTypeIndexes[property.type] = propertyTypeIndex + 1;
      return this.renderInput(
        property,
        propertyTypeIndex,
        // appVars can be undefined for newly added array items.
        appVars && appVars[property.name],
        appVars,
        propertyPath,
        strings,
        errors,
      );
    });

    return formInputs;
  }

  renderInput(
    property: A.PresentationProperty,
    propertyTypeIndex: number,
    value: any = property.default,
    parentValue: any,
    path: P.Path,
    strings: A.Strings,
    errors?: P.PresentationError[],
  ): React.ReactNode {
    const {
      themes,
      soundZones,
      playlists,
      onPlaylistEdit,
      onPlaylistCreate,
    } = this.props;
    const { presentation } = this.state;

    const key = property.name;
    const label = strings[property.name] || property.name;
    const constraints: A.Constraints = property.constraints || {};
    const isDisabled = !!property.disable;

    const inputError = getErrorAtPath(errors, path);
    const hasError = !!inputError;
    const helperText = this.renderInputHelperText(
      property,
      path,
      strings,
      inputError ? inputError : '',
    );

    if (property.hide) {
      return null;
    }

    switch (property.type) {
      case 'string':
        return (
          <StringInput
            key={key}
            label={label}
            value={value}
            helperText={helperText}
            error={hasError}
            disabled={isDisabled}
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
            disabled={isDisabled}
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
            defaultValue={property.default}
            helperText={helperText}
            error={hasError}
            disabled={isDisabled}
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
            disabled={isDisabled}
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
            parentValue={parentValue}
            multiple={property.multiple}
            options={property.options}
            optionsUrl={property.options_url}
            helperText={helperText}
            error={hasError}
            disabled={isDisabled}
            onBlur={this.handleBlur}
            onChange={newValue =>
              this.updatePresentation(path, newValue, property)
            }
            strings={strings}
          />
        );

      case 'toggleButtonGroup':
        return (
          <ToggleButtonGroupInput
            key={key}
            label={label}
            value={value}
            options={property.options}
            helperText={helperText}
            disabled={isDisabled}
            onBlur={this.handleBlur}
            onChange={newValue => {
              // Enforce at least one button to be active
              if (newValue !== null) {
                this.updatePresentation(path, newValue, property);
              }
            }}
            exclusive={property.exclusive}
            strings={strings}
          />
        );

      case 'selectionWithImages':
        return (
          <ImagePickerFieldInput
            key={key}
            parentValue={parentValue}
            value={value}
            onBlur={this.handleBlur}
            imagesUrl={property.images_url}
            onChange={newValue =>
              this.updatePresentation(path, newValue, property)
            }
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
            disabled={isDisabled}
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
            disabled={isDisabled}
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
            disabled={isDisabled}
            onChange={newValue =>
              this.updatePresentation(path, newValue, property)
            }
          />
        );

      case 'facebookAuth':
        return (
          <FacebookAuthInput
            key={key}
            path={path}
            label={label}
            value={value}
            authUrl={property.auth_url}
            verifyUrl={property.verify_url}
            verifyQsParam={property.verify_qs_param}
            helperText={helperText}
            error={hasError}
            disabled={isDisabled}
            onChange={newValue =>
              this.updatePresentation(path, newValue, property)
            }
          />
        );

      case 'googleAuth':
        return (
          <GoogleAuthInput
            key={key}
            path={path}
            label={label}
            value={value}
            authUrl={property.auth_url}
            verifyUrl={property.verify_url}
            verifyQsParam={property.verify_qs_param}
            helperText={helperText}
            error={hasError}
            disabled={isDisabled}
            onChange={newValue =>
              this.updatePresentation(path, newValue, property)
            }
          />
        );

      case 'onedriveAuth':
        return (
          <OneDriveAuthInput
            key={key}
            path={path}
            label={label}
            value={value}
            authUrl={property.auth_url}
            verifyUrl={property.verify_url}
            verifyQsParam={property.verify_qs_param}
            helperText={helperText}
            error={hasError}
            disabled={isDisabled}
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
            disabled={isDisabled}
            onBlur={this.handleBlur}
            onChange={newValue =>
              this.updatePresentation(['themeId'], newValue, property)
            }
          />
        );

      case 'playlist':
        return (
          <PlaylistInput
            key={key}
            label={label}
            value={value}
            playlists={playlists}
            helperText={helperText}
            error={hasError}
            disabled={isDisabled}
            propertyTypeIndex={propertyTypeIndex}
            onBlur={this.handleBlur}
            onChange={newValue =>
              this.updatePresentation(path, newValue, property)
            }
            onEdit={playlistId => onPlaylistEdit(playlistId, path)}
            onCreate={() => onPlaylistCreate(path)}
          />
        );

      case 'soundZone':
        return (
          <SoundZoneInput
            key={key}
            label={label}
            value={value}
            soundZones={soundZones}
            helperText={helperText}
            error={hasError}
            disabled={isDisabled}
            onBlur={this.handleBlur}
            onChange={newValue =>
              this.updatePresentation(path, newValue, property)
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
            disabled={isDisabled}
            constraints={constraints}
            strings={strings}
            errors={errors}
            onBlur={this.handleBlur}
            onChange={newValue =>
              this.updatePresentation(path, newValue, property)
            }
            renderForm={(itemValue, itemProperties, itemPath) => (
              <Column>
                {this.renderApplicationVariables(
                  itemValue,
                  itemProperties,
                  [...path, ...itemPath],
                  strings,
                  errors,
                )}
              </Column>
            )}
            onSelectedPathChange={selectedPath =>
              this.setSelectedPaths(path, selectedPath)
            }
          />
        );

      default:
        return null;
    }
  }

  renderInputHelperText(
    property: A.PresentationProperty,
    path: P.Path,
    strings: A.Strings,
    error?: string,
  ) {
    let helperText: React.ReactNode;

    if (error) {
      helperText = error;
    } else if (property.helper_link) {
      helperText = (
        <Link target="_blank" href={property.helper_link}>
          {strings[property.helper_text] || property.helper_text}
        </Link>
      );
    } else if (property.helper_text) {
      helperText = strings[property.helper_text] || property.helper_text;
    } else if (path.length <= 2) {
      // Inputs should always account for helper text spacing even if there isn't
      // any helper text displayed but only at the root (when path <= 2).
      helperText = ' ';
    }

    return helperText;
  }

  renderWarnings() {
    const {
      presentation: originalPresentation,
      appVersion,
      affectedDevices,
    } = this.props;
    const { presentation } = this.state;

    const warnings = [];

    if (appVersion.embeddedUrlFormat) {
      warnings.push('Preview not available for this application');
    }

    if (originalPresentation.appVersionId !== appVersion.id) {
      warnings.push(
        'Saving will update content to the newer version of the app, and may cause visual changes.',
      );
    }

    if (
      affectedDevices.length &&
      hasPresentationChanged(originalPresentation, presentation, appVersion)
    ) {
      const count = affectedDevices.length;
      warnings.push(
        <span>
          Saving these changes will affect&nbsp;
          <Link onClick={() => this.setState({ showAffectedDevices: true })}>
            {count > 1 ? `${count} screens` : '1 screen'}
          </Link>
        </span>,
      );
    }

    return warnings.map((warning, i) => (
      <PresentationBuilderWarning key={i} color="light">
        {warning}
      </PresentationBuilderWarning>
    ));
  }

  renderPreview() {
    const { appVersion, children, minDuration } = this.props;
    const { previewMode, previewPresentation } = this.state;

    const isLoading = !appVersion || !previewPresentation;

    return (
      <PresentationBuilderPreview
        color="dark"
        appVersion={appVersion}
        previewMode={previewMode}
        onPreviewModeChange={(value: P.PreviewMode) =>
          this.setState({ previewMode: value })
        }
      >
        {!isLoading &&
          children(
            previewPresentation,
            validatePresentation(previewPresentation, appVersion, minDuration),
            previewMode,
          )}
      </PresentationBuilderPreview>
    );
  }

  renderForm() {
    const { classes, appVersion, minDuration } = this.props;
    const { presentation, validate } = this.state;

    const errors = validate
      ? validatePresentation(presentation, appVersion, minDuration)
      : [];

    const nameError = getErrorAtPath(errors, namePath);
    const durationError = getErrorAtPath(errors, durationPath);

    return (
      <Column className={classes.inputs}>
        <TextField
          label="Name"
          value={presentation.name}
          onChange={name => this.updatePresentation(namePath, name, nameProp)}
          helperText={this.renderInputHelperText(
            nameProp,
            namePath,
            appVersion.strings,
            nameError,
          )}
          error={!!nameError}
          onBlur={this.handleBlur}
        />

        {this.renderApplicationVariables(
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
              this.updatePresentation(durationPath, duration, durationProp)
            }
            helperText={this.renderInputHelperText(
              durationProp,
              durationPath,
              appVersion.strings,
              durationError,
            )}
            error={!!durationError}
            onBlur={this.handleBlur}
          />
        )}
      </Column>
    );
  }

  render() {
    const {
      classes,
      presentation: originalPresentation,
      appVersion,
      onSave,
      affectedDevices,
      onBack,
      backToLabel,
      header,
      onDone,
      didSave,
    } = this.props;
    const { presentation, showAffectedDevices } = this.state;

    const isLoading = !originalPresentation || !presentation || !appVersion;
    const shouldDisableSave =
      isLoading ||
      !hasPresentationChanged(originalPresentation, presentation, appVersion);
    const shouldDisableDone = shouldDisableSave && !didSave;
    return (
      <OneThirdLayout>
        <OneThirdLayout.ColumnSmall>
          <div className={classes.scroll}>
            <Hidden smUp>{this.renderPreview()}</Hidden>
            <Form.Section>
              {onBack && (
                <Button
                  icon="arrowLeft"
                  label={backToLabel || 'Back'}
                  onClick={onBack}
                />
              )}

              <Text muted>Presentation Details</Text>

              {header && <div>{header}</div>}
            </Form.Section>

            {!isLoading && this.renderForm()}
          </div>
          {!isLoading && this.renderWarnings()}
          <ActionBar condensed bottom color="light">
            <Spacer />
            {onDone && (
              <Button
                label="Done"
                color="primary"
                disabled={shouldDisableDone}
                onClick={this.handleDone}
              />
            )}
            {onSave && (
              <Popover.Anchor>
                <Button
                  label="Save"
                  color="progress"
                  disabled={shouldDisableSave}
                  onClick={this.handleSave}
                />
                <AffectedScreensPopover
                  open={showAffectedDevices}
                  devices={affectedDevices}
                  onClose={() => this.setState({ showAffectedDevices: false })}
                />
              </Popover.Anchor>
            )}
          </ActionBar>
        </OneThirdLayout.ColumnSmall>

        <OneThirdLayout.ColumnLarge>
          {this.renderPreview()}
        </OneThirdLayout.ColumnLarge>
      </OneThirdLayout>
    );
  }
}

export default withThemeSelector(
  withStyles(styles)(PresentationBuilder),
  'grey',
);
