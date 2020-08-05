import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import * as React from 'react';

export interface LTEProps extends SvgIconProps {}

export const LTE: React.SFC<LTEProps> = props => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M8.59 16.1v-2.522H5.6V7H3v9.1h5.59zm3.471 0V9.522h2.145V7h-6.89v2.522h2.145V16.1h2.6zm8.94 0v-2.392h-3.38v-1.014h2.99v-2.34h-2.99v-.988h3.315V7h-5.915v9.1h5.98z" />
  </SvgIcon>
);

export default LTE;
