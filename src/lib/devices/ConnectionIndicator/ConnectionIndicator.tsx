import * as React from 'react';
import SVGIcon from '../../core/SVGIcon';

interface ConnectionIndicatorProps {
    wifiStrength: number;
    isEthernet: boolean;
}

class ConnectionIndicator extends React.Component<ConnectionIndicatorProps> {
    render = () => {
        const { wifiStrength, isEthernet } = this.props;
        if (isEthernet || isNaN(wifiStrength)) {
            return <SVGIcon icon="ethernet" title="ethernet" />
        }
        if (wifiStrength > 80) {
            return <SVGIcon icon="wifiFull" title="wifiFull" />
        } else if (wifiStrength > 50) {
            return <SVGIcon icon="wifiHigh" title="wifiHigh" />
        } else if (wifiStrength > 20) {
            return <SVGIcon icon="wifiMedium" title="wifiMedium" />
        } else if (wifiStrength > 0) {
            return <SVGIcon icon="wifiLow" title="wifiMedium" />
        } else {
            return <SVGIcon icon="wifiNone" title="wifiNone" />
        }
    };
}

export default ConnectionIndicator;
