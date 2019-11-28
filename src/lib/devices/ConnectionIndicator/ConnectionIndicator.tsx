import * as React from 'react';
import SVGIcon from '../../core/SVGIcon';

interface ConnectionIndicatorProps {
  wifiStrength?: number;
  isEthernet: boolean;
}

class ConnectionIndicator extends React.Component<ConnectionIndicatorProps> {
  render() {
    const { wifiStrength, isEthernet } = this.props;
    if (isEthernet) {
      return <SVGIcon icon="ethernet" title="ethernet" />;
    }
    if (wifiStrength > 80) {
      return <SVGIcon icon="wifiFull" title="wifiFull" />;
    }
    if (wifiStrength > 50) {
      return <SVGIcon icon="wifiHigh" title="wifiHigh" />;
    }
    if (wifiStrength > 20) {
      return <SVGIcon icon="wifiMedium" title="wifiMedium" />;
    }
    if (wifiStrength > 0) {
      return <SVGIcon icon="wifiLow" title="wifiMedium" />;
    }
    if (wifiStrength === 0) {
      return <SVGIcon icon="wifiNone" title="wifiNone" />;
    }
    // TODO: Unknown connection status, possibly still fetching or failed.
    // Consider showing a loading indicator.
    return <SVGIcon icon="wifiNone" title="wifiNone" />;
  }
}

export default ConnectionIndicator;
