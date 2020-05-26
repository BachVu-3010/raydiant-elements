import { SvgIconProps } from '@material-ui/core/SvgIcon';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import * as React from 'react';

export interface SwapVertReverseProps extends SvgIconProps {}

export const SwapVertReverse: React.SFC<SwapVertReverseProps> = props => (
  <SwapVertIcon {...props} style={{ transform: 'scaleX(-1)' }} />
);

export default SwapVertReverse;
