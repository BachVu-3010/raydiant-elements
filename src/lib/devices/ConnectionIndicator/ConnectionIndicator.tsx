import * as React from 'react';
import Icon from '../../core/Icon';
import SVGIcon from '../../core/SVGIcon';

interface ConnectionIndicatorProps {
  signalStrength?: number;
  isEthernet?: boolean;
  isLTE?: boolean;
}

class ConnectionIndicator extends React.Component<ConnectionIndicatorProps> {
  render() {
    const { signalStrength, isEthernet, isLTE } = this.props;
    if (isEthernet) {
      return <SVGIcon icon="ethernet" title="ethernet" />;
    }

    if (isLTE) {
      if (signalStrength > 80) {
        return <Icon icon="lteFull" />;
      }
      if (signalStrength > 40) {
        return <Icon icon="lteMedium" />;
      }
      if (signalStrength > 0) {
        return <Icon icon="lteLow" />;
      }
      if (signalStrength === 0) {
        return <Icon icon="lteNone" />;
      }
    }

    if (signalStrength > 80) {
      return <SVGIcon icon="wifiFull" title="wifiFull" />;
    }
    if (signalStrength > 50) {
      return <SVGIcon icon="wifiHigh" title="wifiHigh" />;
    }
    if (signalStrength > 20) {
      return <SVGIcon icon="wifiMedium" title="wifiMedium" />;
    }
    if (signalStrength > 0) {
      return <SVGIcon icon="wifiLow" title="wifiMedium" />;
    }
    if (signalStrength === 0) {
      return <SVGIcon icon="wifiNone" title="wifiNone" />;
    }
    // TODO: Unknown connection status, possibly still fetching or failed.
    // Consider showing a loading indicator.
    return <SVGIcon icon="wifiNone" title="wifiNone" />;
  }
}

export default ConnectionIndicator;
