// NOTE: PresentationBuilder is deprecated. Use PresentationForm and PresentationPreview instead.
// This component only exists to avoid breaking the RaydiantKit simulator.

import * as immutable from 'object-path-immutable';
import * as React from 'react';
import * as A from '../../application/ApplicationTypes';
import ActionBar from '../../core/ActionBar';
import Button from '../../core/Button';
import Form from '../../core/Form';
import ThemeBackground from '../../core/ThemeBackground';
import Link from '../../core/Link';
import Popover from '../../core/Popover';
import withStyles, { WithStyles } from '../../core/withStyles';
import withThemeSelector from '../../core/withThemeSelector';
import Callout from '../../core/Callout';
import ThemeSelector from '../../core/ThemeSelector';
import AffectedScreensPopover from '../../devices/AffectedScreensPopover';
import * as D from '../../devices/DeviceTypes';
import Hidden from '../../layout/Hidden';
import Scrollable from '../../layout/Scrollable';
import OneThirdLayout from '../../layout/OneThirdLayout';
import Spacer from '../../layout/Spacer';
import Text from '../../typography/Text';
import * as P from '../PresentationTypes';
import PresentationForm from '../PresentationForm';
import PresentationPreview from '../PresentationPreview';
import validatePresentation from './validatePresentation';
import hasPresentationChanged from './hasPresentationChanged';
import styles from './PresentationBuilder.styles';

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
  localUploads?: P.LocalUploadInProgress[];
  affectedDevices?: D.AffectedDevice[];
  previewMode?: P.PreviewMode;
  header?: React.ReactNode;
  // minDuration is used by legacy apps with configurable_duration = true and embedded apps.
  minDuration?: number;
  didSave?: boolean;
  backToLabel?: string;
  selectedPlaylistPath?: P.Path;
  onBack?: () => void;
  onSave?: () => void;
  onDone?: () => void;
  onStateChange?: (
    presentation: P.Presentation,
    localUploads: P.LocalUpload[],
  ) => void;
  onSelectedPathChange?: (selectedPaths: SelectedPropertyPath[]) => void;
  children?: (
    presentation: P.Presentation,
    errors: P.PresentationError[],
  ) => React.ReactNode;
  onPlaylistEdit?: (playlistId: string, path: P.Path) => void;
  onPlaylistCreate?: (path: P.Path) => void;
  onPlaylistSelect?: (path: P.Path) => Promise<string>;
}

interface PresentationBuilderState {
  previewPresentation?: P.Presentation;
  validate: boolean;
  previewMode: P.PreviewMode;
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
    localUploads: [],
    minDuration: 5,
    previewMode: P.PreviewMode.Horizontal,
  };

  state: PresentationBuilderState = {
    previewPresentation: this.props.presentation,
    validate: false,
    previewMode: this.props.previewMode,
    showAffectedDevices: false,
  };

  selectedPropertyPaths: SelectedPropertyPath[] = [];
  fileBlobs: { [localUrl: string]: File } = {};

  componentDidUpdate(prevProps: PresentationBuilderProps) {
    const { presentation } = this.props;

    if (!prevProps.presentation && presentation) {
      this.setState({ previewPresentation: presentation });
    }

    if (
      prevProps.presentation &&
      presentation &&
      prevProps.presentation.id !== presentation.id
      // Commenting the below check out because it causes the preview to render when typing
      // into a property that was just added via conditional controls (ie. qr code url). This
      // started happening after updating the Dashboard to use the new playlist renderer code.
      // We'll need to find a better fix for the below issue (if it still exists) but leaving this
      // check in as documentation for when we update RaydiantKit to the latest playlist renderer.
      //
      // This is only here because of RaydiantKit in order to re-render the preview
      // when the values change outside of the form.
      // || Object.keys(prevProps.presentation.applicationVariables).length !==
      //   Object.keys(presentation.applicationVariables).length
    ) {
      this.setState({ previewPresentation: presentation });
    }
  }

  validate() {
    const { appVersion, minDuration, presentation } = this.props;
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

  renderWarnings() {
    const {
      initialPresentationState,
      presentation,
      appVersion,
      affectedDevices,
      localUploads,
    } = this.props;

    const warnings = [];

    if (initialPresentationState.appVersionId !== appVersion.id) {
      warnings.push(
        'Saving will update content to the newer version of the app, and may cause visual changes.',
      );
    }

    if (
      affectedDevices.length &&
      hasPresentationChanged(
        initialPresentationState,
        presentation,
        appVersion,
        localUploads,
      )
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

    return warnings.map((warning, i) => <Callout key={i}>{warning}</Callout>);
  }

  renderPreview() {
    const { appVersion, children, localUploads, minDuration } = this.props;
    const { previewMode } = this.state;
    let { previewPresentation } = this.state;

    const isLoading = !appVersion || !previewPresentation;
    if (isLoading) {
      return (
        <ThemeSelector color="dark">
          <ThemeBackground />
        </ThemeSelector>
      );
    }

    // Inject local upload file URL's into the preview.
    localUploads.forEach(({ path, localUrl }) => {
      previewPresentation = immutable.set(
        previewPresentation,
        [...path, 'url'],
        localUrl,
      );
    });

    const previewErrors = previewPresentation
      ? validatePresentation(previewPresentation, appVersion, minDuration)
      : [];

    return (
      <ThemeSelector color="dark">
        <PresentationPreview
          appVersion={appVersion}
          previewMode={previewMode}
          onPreviewModeChange={(value: P.PreviewMode) =>
            this.setState({ previewMode: value })
          }
        >
          {children(previewPresentation, previewErrors)}
        </PresentationPreview>
      </ThemeSelector>
    );
  }

  render() {
    const {
      initialPresentationState,
      presentation,
      appVersion,
      themes,
      onSave,
      affectedDevices,
      onBack,
      backToLabel,
      header,
      onDone,
      didSave,
      minDuration,
      localUploads,
      soundZones,
      playlists,
      selectedPlaylistPath,
      onSelectedPathChange,
      onPlaylistEdit,
      onPlaylistCreate,
      onPlaylistSelect,
      onStateChange,
      classes,
    } = this.props;
    const { showAffectedDevices, validate } = this.state;

    const isLoading = !initialPresentationState || !presentation || !appVersion;
    const isNew = presentation && !presentation.id;

    // Don't update the preview if there are any errors.

    const formErrors = validate
      ? validatePresentation(presentation, appVersion, minDuration)
      : [];

    // Disabled save if we're still loading, if the presentation is invalid (after save) or if
    // we're editing an existing presentation and there are no changes.
    const shouldDisableSave =
      isLoading ||
      formErrors.length > 0 ||
      (!isNew &&
        !hasPresentationChanged(
          initialPresentationState,
          presentation,
          appVersion,
          localUploads,
        ));

    const shouldDisableDone = shouldDisableSave && !didSave;

    return (
      <OneThirdLayout>
        <OneThirdLayout.ColumnSmall>
          <Scrollable>
            <Hidden smUp>{this.renderPreview()}</Hidden>
            <Form.Section>
              {onBack && (
                <Hidden xsDown>
                  <Button
                    icon="arrowLeft"
                    label={backToLabel || 'Back'}
                    onClick={onBack}
                  />
                </Hidden>
              )}

              <Text muted>Presentation Details</Text>

              {header && <div>{header}</div>}
            </Form.Section>

            {!isLoading && (
              <PresentationForm
                className={classes.inputs}
                presentation={presentation}
                appVersion={appVersion}
                errors={formErrors}
                themes={themes}
                soundZones={soundZones}
                playlists={playlists}
                selectedPlaylistPath={selectedPlaylistPath}
                onPlaylistEdit={onPlaylistEdit}
                onPlaylistCreate={onPlaylistCreate}
                onPlaylistSelect={onPlaylistSelect}
                onChange={(updatedPresentation, updatedLocalUploads) => {
                  onStateChange(updatedPresentation, updatedLocalUploads);

                  const updateErrors = validatePresentation(
                    updatedPresentation,
                    appVersion,
                    minDuration,
                  );

                  if (updateErrors.length === 0) {
                    this.setState({ previewPresentation: updatedPresentation });
                  }
                }}
                onSelectedPathChange={onSelectedPathChange}
              />
            )}
          </Scrollable>
          {!isLoading && this.renderWarnings()}
          <ActionBar condensed color="light">
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

export default withThemeSelector(withStyles(styles)(PresentationBuilder));
