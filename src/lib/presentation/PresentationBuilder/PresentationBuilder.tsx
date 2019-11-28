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
import NumberInput from './NumberInput';
import OAuthInput from './OAuthInput';
import PlaylistInput from './PlaylistInput';
import styles from './PresentationBuilder.styles';
import PresentationBuilderPreview from './PresentationBuilderPreview';
import PresentationBuilderWarning from './PresentationBuilderWarning';
import SelectionInput from './SelectionInput';
import SoundZoneInput from './SoundZoneInput';
import StringInput from './StringInput';
import TextInput from './TextInput';
import ThemeInput from './ThemeInput';
import { getErrorAtPath, isPathEqual } from './utilities';
import validatePresentation from './validatePresentation';

interface PresentationBuilderProps extends WithStyles<typeof styles> {
  presentation?: P.Presentation;
  initialPresentationState?: P.Presentation;
  appVersion?: A.AppVersion;
  themes?: P.Theme[];
  soundZones?: P.SoundZone[];
  playlists?: P.Playlist[];
  affectedDevices?: D.Device[];
  previewMode?: P.PreviewMode;
  header?: React.ReactNode;
  // minDuration is used by legacy apps with configurable_duration = true and embedded apps.
  minDuration?: number;
  onCancel?: () => void;
  onSave?: (presentation: P.Presentation, files: FileUpload[]) => void;
  onStateChange?: (
    presentation: P.Presentation,
    prop: A.PresentationProperty,
    path: P.Path,
    value: any,
    file?: File,
  ) => void;
  children?: (
    presentation: P.Presentation,
    errors: P.PresentationError[],
    previewMode: P.PreviewMode,
  ) => React.ReactNode;
  onPlaylistEdit?: (playlistId: string, path: P.Path) => void;
  onPlaylistCreate?: (path: P.Path) => void;
  onBackToPlaylist?: () => void;
  backToPlaylistLabel?: string;
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
  files: FileUpload[];
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
    files: [] as FileUpload[],
    showAffectedDevices: false,
  };

  queuedPresentationPreview: P.Presentation | null = null;

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

    appVersion.presentationProperties.forEach(property => {
      // Don't support hash parameters for array and file properties.
      if (property.type === 'array' || property.type === 'file') {
        return;
      }

      const path = ['applicationVariables', property.name];
      const pathStr = path.join('.');
      const hashParamAtPath = hashParams.find(
        ([hashPath]) => hashPath === pathStr,
      );
      if (hashParamAtPath) {
        let newValue: any = decodeURIComponent(hashParamAtPath[1]);
        if (property.type === 'boolean') {
          if (newValue.toLowerCase() === 'false') {
            newValue = false;
          } else if (newValue.toLowerCase() === 'true') {
            newValue = true;
          } else {
            newValue = undefined;
          }
        }

        if (newValue !== undefined) {
          this.updatePresentation(path, newValue, property, undefined, true);
        }
      }
    });

    // Clear hash parameters to avoid leaking tokens and other sensitive
    // values to the user.
    window.location.hash = '';
  }

  handleSave = () => {
    const { onSave, appVersion, minDuration } = this.props;
    const { presentation, files } = this.state;

    this.setState({ validate: true });

    // Only call the onSave handler with valid presentations.
    const errors = validatePresentation(presentation, appVersion, minDuration);
    if (errors.length === 0) {
      onSave(presentation, files);
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
        this.handleFileChange(path, file);
      }
    }

    if (onStateChange) {
      onStateChange(updatedPresentation, property, path, value, file);
    }

    this.setState({
      presentation: updatedPresentation,
      previewPresentation: shouldUpdatePreview
        ? updatedPresentation
        : previewPresentation,
    });
  }

  handleFileChange(path: P.Path, file: File) {
    const { files } = this.state;

    if (file) {
      const existingFileAtPath = files.find(f => isPathEqual(f.path, path));
      if (existingFileAtPath) {
        // Update file upload at path.
        this.setState({
          files: files.map(f =>
            f === existingFileAtPath ? { path, file } : f,
          ),
        });
      } else {
        // Add file upload.
        this.setState({
          files: [...files, { path, file }],
        });
      }
    } else {
      // Remove file upload.
      this.setState({
        files: files.filter(f => !isPathEqual(f.path, path)),
      });
    }
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

    const inputError = getErrorAtPath(errors, path);
    const hasError = !!inputError;
    const helperText = this.renderInputHelperText(
      property,
      path,
      strings,
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
            defaultValue={property.default}
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
            parentValue={parentValue}
            multiple={property.multiple}
            options={property.options}
            optionsUrl={property.options_url}
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

      case 'playlist':
        return (
          <PlaylistInput
            key={key}
            label={label}
            value={value}
            playlists={playlists}
            helperText={helperText}
            error={hasError}
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

    // These are "fake" presentation properties for name and duration so they can
    // be treated the same as application variables when updating the presentation state.
    const namePath = ['name'];
    const durationPath = ['duration'];
    const nameProp = { type: 'string', name: 'name' };
    const durationProp = { type: 'number', name: 'duration' };
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
      onCancel,
      affectedDevices,
      onBackToPlaylist,
      backToPlaylistLabel,
      header,
    } = this.props;
    const { presentation, showAffectedDevices } = this.state;

    const isLoading = !originalPresentation || !presentation || !appVersion;
    const shouldDisableSave =
      isLoading ||
      !hasPresentationChanged(originalPresentation, presentation, appVersion);

    return (
      <OneThirdLayout>
        <OneThirdLayout.ColumnSmall>
          <div className={classes.scroll}>
            <Hidden smUp>{this.renderPreview()}</Hidden>
            <Form.Section>
              {onBackToPlaylist && (
                <Button
                  icon="arrowLeft"
                  label={backToPlaylistLabel || 'Back to Playlist'}
                  onClick={onBackToPlaylist}
                />
              )}

              <Text muted>Presentation Details</Text>

              {header && <div>{header}</div>}
            </Form.Section>

            {!isLoading && this.renderForm()}
          </div>
          {!isLoading && this.renderWarnings()}
          <ActionBar condensed bottom color="light">
            {onCancel && <Button label="Cancel" onClick={onCancel} />}
            <Spacer />
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
