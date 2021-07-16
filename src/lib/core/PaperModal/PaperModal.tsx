import CloseIcon from '@material-ui/icons/Close';
import MUIPaperModal, {
  PaperProps as MUIPaperProps,
} from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import * as cn from 'classnames';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContext } from '../App';
import withThemeSelector from '../withThemeSelector';
import Text from '../Text';
import Spacer from '../../layout/Spacer';
import PaperModalBody from './PaperModalBody';
import PaperModalHeader from './PaperModalHeader';
import PaperModalFooter from './PaperModalFooter';
import PaperModalClose from './PaperModalClose';
import useStyles from './PaperModal.styles';

export interface PaperModalProps extends MUIPaperProps {
  className?: string;
  title?: string;
  showClose?: boolean;
  open?: boolean;
  onClose?: () => void;
}

export const PaperModal: React.SFC<PaperModalProps> = ({
  elevation = 3,
  title,
  open,
  showClose = true,
  className,
  children,
  onClose,
  ...paperModalProps
}) => {
  const classes = useStyles();
  const [animateOut, setAnimateOut] = React.useState<boolean>(false);
  const isOpen = !animateOut && open;

  const { modalRoot } = React.useContext(AppContext);

  const closeModal = React.useCallback(
    () => {
      setAnimateOut(true);
    },
    [setAnimateOut],
  );

  return ReactDOM.createPortal(
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
          {title && (
            <Text small muted ellipsis className={classes.title}>
              {title}
            </Text>
          )}
          <Spacer />
          {showClose && (
            <PaperModalClose onClick={closeModal}>
              <CloseIcon />
              Close
            </PaperModalClose>
          )}
        </div>
        {children}
      </MUIPaperModal>
    </Grow>,
    modalRoot,
  );
};

export default Object.assign(withThemeSelector(PaperModal), {
  Header: PaperModalHeader,
  Body: PaperModalBody,
  Footer: PaperModalFooter,
});
