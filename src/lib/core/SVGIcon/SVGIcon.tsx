import * as React from 'react';
import withStyles, { WithStyles } from '../withStyles';
import styles from './SVGIcon.styles';
import svgs from './svgs';

export type SVGIconOptions =
    | 'wifiHigh'
    | 'wifiMedium'
    | 'wifiLow'
    | 'ethernet'
    ;

interface SVGIconProps extends WithStyles<typeof styles> {
    /** Icon name */
    icon: SVGIconOptions;
    /** Icon title */
    title?: string;
    /** Additional classname */
    className?: string;
}

export const SVGIcon: React.SFC<SVGIconProps> = ({
    icon,
}) => {
    const svg = svgs[icon];
    return svg;
};

export default withStyles(styles)(SVGIcon);
