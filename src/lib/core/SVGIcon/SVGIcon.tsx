import * as React from 'react';
import withStyles, { WithStyles } from '../withStyles';
import styles from './SVGIcon.styles';
import svgs from './svgs';

export type SVGIconOptions =
  | 'wifiFull'
  | 'wifiHigh'
  | 'wifiMedium'
  | 'wifiLow'
  | 'wifiNone'
  | 'ethernet';

interface SVGIconProps extends WithStyles<typeof styles> {
  icon: SVGIconOptions;
  className?: string;
}

export const SVGIcon: React.SFC<SVGIconProps> = ({ icon, ...props }) => {
  const svg = svgs[icon](props);
  return svg;
};

export default withStyles(styles)(SVGIcon);
