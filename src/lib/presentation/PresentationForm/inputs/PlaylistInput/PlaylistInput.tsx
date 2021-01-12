import * as React from 'react';
import cn from 'classnames';
import PlaylistEditIcon from '../../../../icons/PlaylistEdit';
import OpenLibraryIcon from '../../../../icons/OpenLibrary';
import InputLabel from '../../../../core/InputLabel';
import Row from '../../../../layout/Row';
import { makeStyles, createStyles } from '../../../../styles';
import { Theme } from '../../../../theme';
import { buttonReset, textTruncate } from '../../../../mixins';
import * as P from '../../../PresentationTypes';
import { isPathEqual } from '../../utilities';

interface PlaylistInputProps {
  label: string;
  value: string;
  path: P.Path;
  propertyTypeIndex: number;
  selectedPlaylistPath: P.Path;
  playlists: P.Playlist[];
  helperText: React.ReactNode;
  error?: boolean;
  disabled?: boolean;
  onChange: (value: string) => any;
  onSelect?: () => Promise<string>;
  onEdit?: (value: string) => void;
}

const useStyles = makeStyles((theme: Theme) => {
  const lightNavy = '#225887';

  return createStyles({
    selected: {
      boxShadow: `0px 0px 0px 3px ${lightNavy}`,

      '& $selectPlaylist': {
        color: theme.palette.primary.main,
      },
    },

    actions: {
      alignItems: 'flex-start',
      padding: theme.spacing(0.5, 1),
      marginLeft: theme.spacing(-1),
      marginRight: theme.spacing(-1),
      width: `calc(100% + ${theme.spacing(2)}px)`,
      borderRadius: theme.borderRadius.sm,
      fontSize: 24, // Sets icon size.

      [theme.breakpoints.down('xs')]: {
        padding: theme.spacing(2, 1),
      },
    },

    action: {
      ...buttonReset(),
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      color: theme.palette.text.secondary,
      padding: theme.spacing(1),

      '&:hover': {
        color: theme.palette.primary.main,
      },

      '&:disabled': {
        cursor: 'not-allowed',
        color: 'rgba(0, 0, 0, 0.2)',

        '&:hover': {
          color: 'rgba(0, 0, 0, 0.2)',
        },
      },
    },

    iconWithLabel: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

      '& > span': {
        marginTop: theme.spacing(0.25),
        fontSize: theme.fontSizes.xxs,
        letterSpacing: 0.06,
      },
    },

    publishLock: {
      fontSize: 24, // Sets settings icon size
    },

    editPlaylist: {
      flex: 1,
    },

    selectPlaylist: {},

    editPlaylistIcon: {
      // Fix size / alignment.
      transform: 'scale(1.25)',
    },

    playlist: {
      ...textTruncate(),
      marginLeft: theme.spacing(2),
      fontSize: theme.fontSizes.xl,
      fontWeight: 300,
      lineHeight: 1.09,
      letterSpacing: 0.25,

      [theme.breakpoints.down('xs')]: {
        fontSize: theme.fontSizes.lg,
      },
    },

    playlistLabel: {
      fontSize: theme.fontSizes.sm,
      color: theme.palette.text.secondary,
      marginTop: theme.spacing(0.5),
    },
  });
});

const PlaylistInput: React.FC<PlaylistInputProps> = ({
  label,
  value,
  path,
  playlists,
  selectedPlaylistPath,
  error,
  disabled,
  helperText,
  onSelect,
  onChange,
  onEdit,
}) => {
  const classes = useStyles();
  const isSelected = isPathEqual(selectedPlaylistPath, path);

  const playlist = playlists.find(pl => pl.id === value);
  const isDeleted = playlist && !!playlist.resource.deletedAt;
  // Assume the playlist was assigned by an admin if there is a playlist id but we can't
  // find it in the current user's playlists. This is a workaround, ideally the API would return
  // the basic information about the assigned playlist if the current user doesn't have access to it.
  const isAdminAssigned = value && !playlist;
  // It would be better to use the same permission logic in the Dashboard to determine but want to avoid
  // the duplicating permission functions in elements. For now, assume that the user does not have access
  // to edit this playlist if it is not provided.
  const isEditable = !isDeleted && !isAdminAssigned;
  const isSelectable = !isAdminAssigned;

  const handlePlaylistSelect = React.useCallback(
    async () => {
      // We still want the playlist input to call onChange in order to update the preview. To do this,
      // onSelect returns a promise that will resolve to the selected playlist id or empty if the user
      // did not select anything.
      const playlistId = await onSelect();
      if (playlistId) {
        onChange(playlistId);
      }
    },
    [onSelect],
  );

  const handlePlaylistClick = React.useCallback(
    () => {
      if (playlist && isEditable) {
        onEdit(value);
      } else if (!playlist && isEditable) {
        handlePlaylistSelect();
      }
    },
    [onEdit, onclick, isEditable],
  );

  let playlistLabel = '';
  if (playlist && !isDeleted) {
    playlistLabel = playlist.name;
  } else if (isAdminAssigned) {
    playlistLabel = 'Administrator assigned playlist';
  } else {
    playlistLabel = 'Assign a playlist';
  }

  return (
    <div>
      <InputLabel error={error} disabled={disabled}>
        {label}
      </InputLabel>

      <Row className={cn(classes.actions, isSelected && classes.selected)}>
        <button
          className={cn(classes.action, classes.editPlaylist)}
          disabled={!isEditable}
          onClick={handlePlaylistClick}
        >
          <div className={classes.iconWithLabel}>
            <PlaylistEditIcon
              fontSize="inherit"
              className={cn(classes.editPlaylistIcon)}
            />
            <span>edit</span>
          </div>

          <div className={classes.playlist}>
            {playlistLabel}
            <div className={classes.playlistLabel}>
              {helperText || `${label}'s playlist`}
            </div>
          </div>
        </button>

        <button
          className={cn(
            classes.action,
            classes.selectPlaylist,
            'tour-device-playlist-select',
          )}
          disabled={!isSelectable}
          onClick={handlePlaylistSelect}
        >
          <div className={classes.iconWithLabel}>
            <OpenLibraryIcon fontSize="inherit" />
            <span>playlists</span>
          </div>
        </button>
      </Row>
    </div>
  );
};

export default PlaylistInput;
