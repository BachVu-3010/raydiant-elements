import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import * as React from 'react';

export interface PlaylistRemoveProps extends SvgIconProps {}

export const PlaylistRemove = (props: PlaylistRemoveProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M2,16H10V14H2M12,14V16H22V14M14,6H2V8H14M14,10H2V12H14V10Z"
    />
  </SvgIcon>
);

export default PlaylistRemove;
