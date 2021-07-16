import CloseIcon from '@material-ui/icons/Close';
import * as React from 'react';
import * as cn from 'classnames';
import { makeStyles, createStyles } from '../../styles';
import { Theme } from '../../theme';
import { buttonReset } from '../../mixins';

export interface PaperModalCloseProps {
  className?: string;
  onClick?: () => void;
}

export const PaperModalClose: React.FC<PaperModalCloseProps> = ({
  className,
  onClick,
}) => {
  const classes = useStyles();

  return (
    <button className={cn(classes.root, className)} onClick={onClick}>
      Close
      <CloseIcon />
    </button>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      ...buttonReset(),
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      fontWeight: 600,
      lineHeight: 1.11,
      letterSpacing: 1.42,
      textTransform: 'uppercase',
      fontSize: theme.fontSizes.xxs,
      padding: theme.spacing(0.75, 4),
      paddingBottom: 0,
      color: theme.palette.text.secondary,
      opacity: 0.5,

      '&:hover, &:focus': {
        opacity: 1,
      },

      '& svg': {
        fontSize: 20,
      },

      [theme.breakpoints.down('xs')]: {
        padding: theme.spacing(1),
      },
    },
  }),
);

export default PaperModalClose;
