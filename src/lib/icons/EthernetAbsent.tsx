import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import * as React from 'react';

export interface EthernetAbscentProps extends SvgIconProps {}

export const EthernetAbscent: React.SFC<EthernetAbscentProps> = props => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M3.41 2.81l16.97 16.97-1.41 1.41-.426-.426c-.278.68-.921 1.17-1.686 1.23l-.155.006H9.678c-1.053 0-1.916-.813-1.996-1.845l-.006-.157v-2.364h2.081v2.283h6.851v-1.089l-3.2-3.2v.631h-.814v1.04H4.839v-1.04H4.04v-1.04l8.957-.001-.462-.462H3V5.632h.411L2 4.22l1.41-1.41zm16.333 5.263c.958 0 1.744.738 1.82 1.676l.006.15v7.286h-2.082v-7.031h-.797l.001 5.127-2.082-2.082V9.85c0-.93.715-1.693 1.625-1.77l.153-.007h1.356zM14.597 5.63v5.557L9.04 5.631h5.557zM8.352 2v1.784h.893V2h.72l.002 1.784h.892L10.858 2h2.55v3.122H8.531l-1.34-1.339h.44V2h.72zM6.738 2v1.329l-1.331-1.33L6.737 2z" />
  </SvgIcon>
);

export default EthernetAbscent;
