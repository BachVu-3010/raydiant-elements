import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import * as React from 'react';

export interface EthernetProps extends SvgIconProps {}

export const Ethernet: React.SFC<EthernetProps> = props => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M19.743 8.073c.958 0 1.744.738 1.82 1.676l.006.15v7.286h-2.082v-7.031h-.797l.001 9.858c0 1.046-.807 1.903-1.833 1.982l-.155.006H9.678c-1.053 0-1.916-.813-1.996-1.845l-.006-.157v-2.364h2.081v2.283h6.851L16.61 9.85c0-.93.715-1.693 1.625-1.77l.153-.007h1.356zm-6.335 7.145v1.041h-.814v1.04H4.839v-1.04H4.04v-1.04h9.367zm1.19-9.587v9.126H3V5.63h11.597zM6.737 2v1.784h.893V2h.72l.002 1.784h.892V2h.72l.002 1.784h.892L10.858 2h2.55v3.122H4.041V2h2.697z" />
  </SvgIcon>
);

export default Ethernet;
