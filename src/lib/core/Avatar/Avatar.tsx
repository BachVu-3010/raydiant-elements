import * as React from 'react';
import MUIAvatar from '@material-ui/core/Avatar';
import { makeStyles, createStyles } from '../../styles';
import { Theme } from '../../theme';

interface AvatarProps {
  thumbnailUrl?: string | null;
  name?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // Consistent styling with Auth0's auto-generated Avatar.
      fontSize: 15,
      letterSpacing: 0.5,
      fontWeight: 400,
      backgroundColor: theme.avatar.background,
      color: theme.avatar.foreground,
    },
  }),
);

export const Avatar: React.SFC<AvatarProps> = ({ thumbnailUrl, name = '' }) => {
  const classes = useStyles();
  const [firstName, lastName] = name.split(' ');
  const firstInitial = firstName.charAt(0).toUpperCase();
  const lastInitial =
    lastName && lastName.length > 0
      ? lastName.charAt(0).toUpperCase()
      : firstName.charAt(1).toUpperCase();

  return (
    <MUIAvatar className={classes.root} variant="circle" src={thumbnailUrl}>
      {firstInitial || ''}
      {lastInitial || ''}
    </MUIAvatar>
  );
};

export default Avatar;
