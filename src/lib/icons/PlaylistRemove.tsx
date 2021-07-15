import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import * as React from 'react';

export interface PlaylistRemoveProps extends SvgIconProps {}

export const PlaylistRemove = (props: PlaylistRemoveProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M20 17v2H8v-2h12zm0-4v2H8v-2h12zM6 2v3c4.284 0 7.87 2.994 8.778 7.003h-.869c-.466 0-.892-.002-1.2-.005C11.844 9.11 9.163 7 6 7v3L2 6l4-4zm14 7v2h-4V9h4z"
    />
  </SvgIcon>
);

export default PlaylistRemove;
