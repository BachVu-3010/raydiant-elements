// TODO: This component is mostly copied from the Dashboard, consider adding it to elements.

import * as React from 'react';
import cn from 'classnames';
import ErrorIcon from '@material-ui/icons/Error';
import ActionBar from '../ActionBar/v2';
import CircularProgress from '../CircularProgress';
import Row from '../../layout/Row';
import Spacer from '../../layout/Spacer';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { makeStyles, createStyles } from '../../styles';
import { Theme } from '../../theme';

export type LoadingStatus = 'idle' | 'loading' | 'success' | 'error';

export interface LoadingButtonProps {
  className?: string;
  color?: React.ComponentProps<typeof ActionBar.Action>['color'];
  status?: LoadingStatus;
  label: string;
  icon?: React.ReactNode;
  loadingLabel?: string;
  successLabel?: string;
  errorLabel?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  onClick: () => void;
}

const LoadingButton = ({
  className,
  color = 'default',
  status = 'idle',
  label,
  icon,
  loadingLabel,
  successLabel,
  errorLabel,
  fullWidth,
  disabled,
  onClick,
}: LoadingButtonProps) => {
  const classes = useStyles();

  // State

  const [loadingStatus, setLoadingStatus] = React.useState<LoadingStatus>(
    'idle',
  );

  // Effects

  const prevStatus = React.useRef<LoadingStatus>(status);
  React.useEffect(
    () => {
      let timeout: ReturnType<typeof setTimeout>;

      if (status === 'loading') {
        setLoadingStatus('loading');
      } else if (status === 'success') {
        if (prevStatus.current === 'loading') {
          setLoadingStatus('success');
          timeout = setTimeout(() => {
            setLoadingStatus('idle');
          }, 5000); // Success label should remain visible for 5 seconds.
        }
      } else if (status === 'error') {
        if (prevStatus.current === 'loading') {
          setLoadingStatus('error');
          timeout = setTimeout(() => {
            setLoadingStatus('idle');
          }, 5000); // Error label should remain visible for 5 seconds.
        }
      }

      prevStatus.current = status;

      return () => {
        if (timeout) {
          clearTimeout(timeout);
        }
      };
    },
    [status],
  );

  // Render

  if (loadingStatus === 'loading') {
    return (
      <div className={className}>
        <Row halfMargin center className={classes.status}>
          {fullWidth && <Spacer />}
          <CircularProgress size={20} color="primary" />
          <span>{loadingLabel}</span>
        </Row>
      </div>
    );
  }

  if (loadingStatus === 'success') {
    return (
      <div className={className}>
        <Row halfMargin center className={classes.status}>
          {fullWidth && <Spacer />}
          <CheckCircleIcon className={classes.success} />
          <span>{successLabel}</span>
        </Row>
      </div>
    );
  }

  if (loadingStatus === 'error') {
    return (
      <div className={className}>
        <Row halfMargin center className={cn(classes.status, classes.error)}>
          {fullWidth && <Spacer />}
          <ErrorIcon className={classes.error} />
          <span>{errorLabel}</span>
        </Row>
      </div>
    );
  }

  return (
    <div className={className}>
      <ActionBar.Action
        icon={icon}
        fullWidth={fullWidth}
        color={color}
        label={label}
        disabled={disabled}
        onClick={onClick}
      />
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    status: {
      color: theme.palette.text.secondary,
      // Copied from ActionBar/v2/ActionBarAction styles to match alignment.
      fontWeight: 600,
      lineHeight: 1.11,
      letterSpacing: 1.42,
      textTransform: 'uppercase',
      fontSize: theme.fontSizes.xxs,
    },

    primary: {
      color: theme.palette.primary.main,
    },

    muted: {
      color: theme.palette.text.secondary,
    },

    success: {
      color: theme.palette.progress.main,
    },

    error: {
      color: theme.palette.error.main,
    },
  });
});

export default LoadingButton;
