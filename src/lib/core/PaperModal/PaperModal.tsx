import CloseIcon from '@material-ui/icons/Close';
import MUIPaperModal, {
  PaperProps as MUIPaperProps,
} from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import * as cn from 'classnames';
import * as React from 'react';
import withThemeSelector from '../withThemeSelector';
import PaperModalBody from './PaperModalBody';
import useStyles from './PaperModal.styles';

export interface PaperModalProps extends MUIPaperProps {
  className?: string;
  open?: boolean;
  onClose?: () => void;
}

export const PaperModal: React.SFC<PaperModalProps> = ({
  elevation = 3,
  open,
  className,
  children,
  onClose,
  ...paperModalProps
}) => {
  const classes = useStyles();
  const [animateOut, setAnimateOut] = React.useState<boolean>(false);
  const isOpen = !animateOut && open;

  const closeModal = React.useCallback(
    () => {
      setAnimateOut(true);
    },
    [setAnimateOut],
  );

  return (
    <Grow
      in={isOpen}
      style={{ transformOrigin: 'center bottom' }}
      onExited={() => {
        onClose();
        setAnimateOut(false);
      }}
    >
      <MUIPaperModal
        className={cn(classes.root, className)}
        elevation={elevation}
        {...paperModalProps}
      >
        <div className={classes.header}>
          <button className={classes.close} onClick={closeModal}>
            Close <CloseIcon />
          </button>
        </div>
        {children}
      </MUIPaperModal>
    </Grow>
  );
};

export default Object.assign(withThemeSelector(PaperModal), {
  Body: PaperModalBody,
});
