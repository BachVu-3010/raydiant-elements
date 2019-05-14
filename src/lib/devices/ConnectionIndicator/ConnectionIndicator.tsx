import * as React from 'react';
import SVGIcon from '../../core/SVGIcon';

interface ConnectionIndicatorProps {
    wifiStrength: number;
}

class ConnectionIndicator extends React.Component<ConnectionIndicatorProps> {
    render = () => {
        const { wifiStrength } = this.props;
        if (isNaN(wifiStrength)) {
            return <SVGIcon icon="ethernet" title="ethernet" />
        }
        if (wifiStrength > 80) {
            return <SVGIcon icon="wifiHigh" title="wifiHigh" />
        } else if (wifiStrength > 50) {
            return <SVGIcon icon="wifiMedium" title="wifiMedium" />
        } else {
            return <SVGIcon icon="wifiLow" title="wifiLow" />
        }
    };
}

export default ConnectionIndicator;
