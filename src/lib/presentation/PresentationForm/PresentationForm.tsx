import * as React from 'react';
import * as immutable from 'object-path-immutable';
import Column from '../../layout/Column';
import TextField from '../../core/TextField';
import NumberField from '../../core/NumberField';
import {
  ApplicationVersion,
  PresentationProperty,
  Strings,
  Constraints,
} from '../../application/ApplicationTypes';
import {
  Presentation,
  Theme,
  SoundZone,
  Playlist,
  Path,
  LocalUpload,
  PresentationError,
  ApplicationVariables,
  BuilderState,
} from '../PresentationTypes';
import PresentationFormHelperText from './PresentationFormHelperText';
import getLocalUploads from './getLocalUploads';
import { getErrorAtPath, isPathEqual, getPropertyAtPath } from './utilities';
// Inputs
import ArrayInput from './inputs/ArrayInput';
import BooleanInput from './inputs/BooleanInput';
import DateInput from './inputs/DateInput';
import FacebookAuthInput from './inputs/FacebookAuthInput';
import FileInput from './inputs/FileInput';
import GoogleAuthInput from './inputs/GoogleAuthInput';
import ImagePickerFieldInput from './inputs/ImagePickerFieldInput';
import ModalButton from './inputs/ModalButton';
import NumberInput from './inputs/NumberInput';
import OAuthInput from './inputs/OAuthInput';
import OneDriveAuthInput from './inputs/OneDriveAuthInput';
import PlaylistInput from './inputs/PlaylistInput';
import PlaylistInputLegacy from './inputs/PlaylistInput/PlaylistInputLegacy';
import PosterMyWallAuthInput from './inputs/PosterMyWallAuthInput';
import SelectionInput from './inputs/SelectionInput';
import SoundZoneInput from './inputs/SoundZoneInput';
import StringInput from './inputs/StringInput';
import TextInput from './inputs/TextInput';
import ThemeInput from './inputs/ThemeInput';
import ThemeInputLegacy from './inputs/ThemeInput/ThemeInputLegacy';
import ToggleButtonGroupInput from './inputs/ToggleButtonGroupInput';

// These are "fake" presentation properties for name and duration so they can
// be treated the same as application variables when updating the presentation state.
const namePath = ['name'];
const durationPath = ['duration'];
const nameProp = { type: 'string', name: 'name' };
const durationProp = { type: 'number', name: 'duration' };

export interface PresentationFormProps<P, A, T, S, PL> {
  className?: string;
  presentation: P;
  appVersion: A;
  themeOptions?: React.ReactNode;
  errors: PresentationError[];
  themes?: T[]; // This prop is only used by the legacy theme input.
  soundZones?: S[];
  playlists?: PL[];
  selectedPlaylistPath?: Path;
  builderState?: BuilderState;
  newThemeDisabled?: boolean;
  newThemeDisabledMessage?: React.ReactNode;
  onChange: (presentation: P, localUploads: LocalUpload[]) => void;
  onBuilderStateChange?: (builderState: BuilderState) => void;
  onPlaylistEdit?: (playlistId: string, path: Path) => void;
  onPlaylistCreate?: (path: Path) => void;
  onPlaylistSelect?: (path: Path) => Promise<string>;
  onThemeEdit?: (themeId: string) => void;
  onThemeManage?: () => void;
  onThemeAdd?: () => void;
}

const PresentationForm = <
  P extends Presentation,
  A extends ApplicationVersion,
  T extends Theme,
  S extends SoundZone,
  PL extends Playlist
>({
  className,
  presentation,
  appVersion,
  errors,
  themes,
  soundZones,
  playlists,
  selectedPlaylistPath,
  builderState,
  newThemeDisabled,
  newThemeDisabledMessage,
  onChange,
  onBuilderStateChange,
  onPlaylistEdit,
  onPlaylistCreate,
  onPlaylistSelect,
  onThemeEdit,
  onThemeManage,
  onThemeAdd,
  themeOptions,
}: PresentationFormProps<P, A, T, S, PL>) => {
  // Refs

  const fileBlobsRef = React.useRef<{ [localUrl: string]: File }>({});

  // Callbacks

  const updatePresentation = React.useCallback(
    (
      path: Path,
      value: any,
      property: PresentationProperty,
      file?: File,
      // forceFlush?: boolean,
    ) => {
      // Remove the value if null or undefined for array inputs.
      const shouldDelete =
        property.type === 'array' && (value === null || value === undefined);

      const updatedPresentation = shouldDelete
        ? immutable.del(presentation, path)
        : immutable.set(presentation, path, value);

      if (file && value) {
        fileBlobsRef.current[value.url] = file;
      }

      onChange(
        updatedPresentation,
        getLocalUploads(updatedPresentation, appVersion, fileBlobsRef.current),
      );
    },
    [presentation, appVersion, onChange],
  );

  const setInputState = React.useCallback(
    (path, state) => {
      if (!onBuilderStateChange) return;

      const inputFound = builderState.inputs.find(i =>
        isPathEqual(i.path, path),
      );
      const updatedInputs = inputFound
        ? builderState.inputs.map(i =>
            isPathEqual(i.path, path)
              ? { path, state: { ...inputFound.state, ...state } }
              : i,
          )
        : [...builderState.inputs, { path, state }];

      onBuilderStateChange({
        ...builderState,
        inputs: updatedInputs,
      });
    },
    [onBuilderStateChange, builderState],
  );

  const getInputStateAtPath = React.useCallback(
    (path: Path) => {
      const input = builderState.inputs.find(i => {
        return isPathEqual(path, i.path);
      });
      return input && input.state;
    },
    [builderState],
  );

  // Effects

  // Check hash params for updated properties.
  React.useEffect(
    () => {
      // Get the window hash without the leading '#'.
      const hash = window.location.hash.substr(1);
      // Parse hash params by splitting on & (or #) and then =.
      //   ie. #applicationVariables.headingText=text => [['applicationVariables.headingText', 'SomeText'], ...]
      const hashParams = hash
        .split(/[&#]/)
        .map(paramStr => paramStr.split('='));

      hashParams.forEach(hashParam => {
        if (hashParam.length !== 2) return;

        const path: Path = hashParam[0]
          .split('.')
          .filter(pathPart => !!pathPart);
        if (!path.length) return;

        // Try to find the property at this path.
        let property: PresentationProperty;
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
          updatePresentation(path, value, property, undefined);
        }
      });

      // Clear hash parameters to avoid leaking tokens and other sensitive
      // values to the user.
      window.location.hash = '';
    },
    [appVersion, updatePresentation],
  );

  // Render

  const nameError = getErrorAtPath(errors, namePath);
  const durationError = getErrorAtPath(errors, durationPath);

  const renderApplicationVariables = (
    appVars: ApplicationVariables,
    properties: PresentationProperty[],
    path: Path,
    strings: Strings,
  ) => {
    const propertyTypeIndexes: { [key: string]: number } = {};
    const formInputs = properties.map(property => {
      const propertyPath = [...path, property.name];
      const propertyTypeIndex = propertyTypeIndexes[property.type] || 0;
      propertyTypeIndexes[property.type] = propertyTypeIndex + 1;

      return renderInput(
        property,
        propertyTypeIndex,
        // appVars can be undefined for newly added array items.
        appVars && appVars[property.name],
        appVars,
        propertyPath,
        strings,
      );
    });

    return formInputs;
  };

  const renderInput = (
    property: PresentationProperty,
    propertyTypeIndex: number,
    value: any = property.default,
    parentValue: any,
    path: Path,
    strings: Strings,
  ): React.ReactNode => {
    const key = property.name;
    const label = strings[property.name] || property.name;
    const constraints: Constraints = property.constraints || {};
    const isDisabled = !!property.disable;

    const inputError = getErrorAtPath(errors, path);
    const hasError = !!inputError;

    // Render the component inline by calling the function instead of using JSX.
    // This causes `null` to be returned instead of an empty <PresentationFormHelperText />
    // element. Some inputs (ie. PlaylistInput) provide their own default helperText if not set
    // for the input and rely `null` being returned here.
    const helperText = PresentationFormHelperText({
      property,
      path,
      strings,
      error: inputError,
    });

    if (property.hide) {
      return null;
    }

    switch (property.type) {
      case 'string': {
        return (
          <StringInput
            key={key}
            label={label}
            value={value}
            helperText={helperText}
            error={hasError}
            disabled={isDisabled}
            constraints={constraints}
            onChange={newValue => updatePresentation(path, newValue, property)}
          />
        );
      }

      case 'text': {
        return (
          <TextInput
            key={key}
            label={label}
            value={value}
            helperText={helperText}
            error={hasError}
            disabled={isDisabled}
            constraints={constraints}
            onChange={newValue => updatePresentation(path, newValue, property)}
          />
        );
      }

      case 'number': {
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
            onChange={newValue => updatePresentation(path, newValue, property)}
          />
        );
      }

      case 'boolean': {
        return (
          <BooleanInput
            key={key}
            label={label}
            value={value}
            helperText={helperText}
            error={hasError}
            disabled={isDisabled}
            onChange={newValue => updatePresentation(path, newValue, property)}
          />
        );
      }

      case 'selection': {
        return (
          <SelectionInput
            key={key}
            label={label}
            value={value}
            parentValue={parentValue}
            multiple={property.multiple}
            searchable={property.searchable}
            selectable={property.selectable}
            sortable={property.sortable}
            options={property.options}
            optionsUrl={property.options_url}
            helperText={helperText}
            error={hasError}
            disabled={isDisabled}
            onChange={newValue => updatePresentation(path, newValue, property)}
            strings={strings}
            inputState={getInputStateAtPath(path)}
            onInputStateChange={state => {
              setInputState(path, state);
            }}
          />
        );
      }

      case 'toggleButtonGroup': {
        return (
          <ToggleButtonGroupInput
            key={key}
            label={label}
            value={value}
            options={property.options}
            helperText={helperText}
            disabled={isDisabled}
            onChange={newValue => {
              // Enforce at least one button to be active
              if (newValue !== null) {
                updatePresentation(path, newValue, property);
              }
            }}
            exclusive={property.exclusive}
            strings={strings}
          />
        );
      }

      case 'selectionWithImages': {
        return (
          <ImagePickerFieldInput
            key={key}
            parentValue={parentValue}
            value={value}
            imagesUrl={property.images_url}
            onChange={newValue => updatePresentation(path, newValue, property)}
          />
        );
      }

      case 'date': {
        return (
          <DateInput
            key={key}
            label={label}
            value={value}
            helperText={helperText}
            error={hasError}
            disabled={isDisabled}
            onChange={newValue => updatePresentation(path, newValue, property)}
          />
        );
      }

      case 'file': {
        return (
          <FileInput
            key={key}
            label={label}
            value={value}
            helperText={helperText}
            error={hasError}
            disabled={isDisabled}
            constraints={constraints}
            onChange={(newValue, file) =>
              updatePresentation(path, newValue, property, file)
            }
          />
        );
      }

      case 'oAuth': {
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
            onChange={newValue => updatePresentation(path, newValue, property)}
          />
        );
      }

      case 'facebookAuth': {
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
            onChange={newValue => updatePresentation(path, newValue, property)}
          />
        );
      }

      case 'googleAuth': {
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
            onChange={newValue => updatePresentation(path, newValue, property)}
          />
        );
      }

      case 'onedriveAuth': {
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
            onChange={newValue => updatePresentation(path, newValue, property)}
          />
        );
      }

      case 'postermywallAuth': {
        return (
          <PosterMyWallAuthInput
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
            onChange={newValue => updatePresentation(path, newValue, property)}
          />
        );
      }

      case 'theme': {
        if (!themeOptions) {
          // This is to only here to support the RaydiantKit Simulator
          return (
            <ThemeInputLegacy
              key={key}
              label={label}
              value={presentation.themeId}
              themes={themes}
              helperText={helperText}
              error={hasError}
              disabled={isDisabled}
              onChange={newValue =>
                updatePresentation(['themeId'], newValue, property)
              }
            />
          );
        }

        return (
          <ThemeInput
            key={key}
            label={label}
            value={presentation.themeId}
            themeOptions={themeOptions}
            helperText={helperText}
            error={hasError}
            disabled={isDisabled}
            addDisabled={newThemeDisabled}
            addDisabledMessage={newThemeDisabledMessage}
            onChange={newValue =>
              updatePresentation(['themeId'], newValue, property)
            }
            onEdit={onThemeEdit}
            onManage={onThemeManage}
            onAdd={onThemeAdd}
          />
        );
      }

      case 'playlist': {
        if (!onPlaylistEdit) {
          // If onPlaylistEdit is not provided then use the legacy playlist input.
          // This is to only here to support the RaydiantKit Simulator
          return (
            <PlaylistInputLegacy
              key={key}
              label={label}
              value={value}
              playlists={playlists}
              helperText={helperText}
              error={hasError}
              disabled={isDisabled}
              propertyTypeIndex={propertyTypeIndex}
              onChange={newValue =>
                updatePresentation(path, newValue, property)
              }
              onEdit={playlistId => onPlaylistEdit(playlistId, path)}
              onCreate={() => onPlaylistCreate(path)}
            />
          );
        }
        return (
          <PlaylistInput
            key={key}
            label={label}
            value={value}
            path={path}
            playlists={playlists}
            helperText={helperText}
            error={hasError}
            disabled={isDisabled}
            propertyTypeIndex={propertyTypeIndex}
            selectedPlaylistPath={selectedPlaylistPath}
            onChange={newValue => updatePresentation(path, newValue, property)}
            onEdit={playlistId => onPlaylistEdit(playlistId, path)}
            onSelect={() => onPlaylistSelect(path)}
          />
        );
      }

      case 'soundZone': {
        return (
          <SoundZoneInput
            key={key}
            label={label}
            value={value}
            soundZones={soundZones}
            helperText={helperText}
            error={hasError}
            disabled={isDisabled}
            onChange={newValue => updatePresentation(path, newValue, property)}
          />
        );
      }

      case 'array': {
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
            onChange={newValue => updatePresentation(path, newValue, property)}
            renderForm={(itemValue, itemProperties, itemPath) => (
              <Column>
                {renderApplicationVariables(
                  itemValue,
                  itemProperties,
                  [...path, ...itemPath],
                  strings,
                )}
              </Column>
            )}
            onInputStateChange={state => {
              setInputState(path, state);
            }}
          />
        );
      }

      case 'modal': {
        return (
          <ModalButton
            key={key}
            label={label}
            sourceUrl={property.sourceUrl}
            backgroundColor={property.backgroundColor}
            hoveredBackgroundColor={property.hoveredBackgroundColor}
            textColor={property.textColor}
            parentValue={parentValue}
            helperText={helperText}
            disabled={isDisabled}
            onChange={newValue =>
              // TODO: This will save the state to the db, we used to use updateIgnoredApplicationVariables
              // to bypass the db but this seems hacky, find a better way.
              // updateIgnoredApplicationVariables(path, newValue)
              updatePresentation(path, newValue, property)
            }
          />
        );
      }

      default:
        return null;
    }
  };

  return (
    <Column className={className}>
      <TextField
        label="name"
        value={presentation.name}
        onChange={name => updatePresentation(namePath, name, nameProp)}
        helperText={
          <PresentationFormHelperText
            property={nameProp}
            path={namePath}
            error={nameError}
            strings={appVersion.strings}
          />
        }
        error={!!nameError}
      />

      {renderApplicationVariables(
        presentation.applicationVariables,
        appVersion.presentationProperties,
        ['applicationVariables'],
        appVersion.strings,
      )}

      {appVersion.configurableDuration && (
        <NumberField
          label="Duration"
          value={presentation.duration}
          onChange={duration =>
            updatePresentation(durationPath, duration, durationProp)
          }
          helperText={
            <PresentationFormHelperText
              property={durationProp}
              path={durationPath}
              error={durationError}
              strings={appVersion.strings}
            />
          }
          error={!!durationError}
        />
      )}
    </Column>
  );
};

export default PresentationForm;
