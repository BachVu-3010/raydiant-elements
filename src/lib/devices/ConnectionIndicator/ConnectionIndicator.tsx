import * as React from 'react';
import Icon from '../../core/Icon';
import SVGIcon from '../../core/SVGIcon';
import withStyles, { WithStyles } from '../../core/withStyles';
import styles from './ConnectionIndicator.styles';

interface ConnectionIndicatorProps extends WithStyles<typeof styles> {
  signalStrength?: number;
  isEthernet?: boolean;
  isLTE?: boolean;
}

const ConnectionIndicator: React.FunctionComponent<
  ConnectionIndicatorProps
> = ({ signalStrength, isEthernet, isLTE, classes }) => {
  if (isEthernet) {
    return <SVGIcon className={classes.root} icon="ethernet" />;
  }

  if (isLTE) {
    if (signalStrength > 80) {
      return <Icon className={classes.root} icon="lteFull" />;
    }
    if (signalStrength > 40) {
      return <Icon className={classes.root} icon="lteMedium" />;
    }
    if (signalStrength > 0) {
      return <Icon className={classes.root} icon="lteLow" />;
    }
    if (signalStrength === 0) {
      return <Icon className={classes.root} icon="lteNone" />;
    }
  }

  if (signalStrength > 80) {
    return <SVGIcon className={classes.root} icon="wifiFull" />;
  }
  if (signalStrength > 50) {
    return <SVGIcon className={classes.root} icon="wifiHigh" />;
  }
  if (signalStrength > 20) {
    return <SVGIcon className={classes.root} icon="wifiMedium" />;
  }
  if (signalStrength > 0) {
    return <SVGIcon className={classes.root} icon="wifiLow" />;
  }
  if (signalStrength === 0) {
    return <SVGIcon className={classes.root} icon="wifiNone" />;
  }
  // TODO: Unknown connection status, possibly still fetching or failed.
  // Consider showing a loading indicator.
  return <SVGIcon icon="wifiNone" />;
};

export default withStyles(styles)(ConnectionIndicator);
