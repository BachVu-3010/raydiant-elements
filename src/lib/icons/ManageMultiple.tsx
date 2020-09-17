import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import * as React from 'react';

export interface ManageMultipleProps extends SvgIconProps {}

export const ManageMultiple: React.SFC<ManageMultipleProps> = props => (
  <SvgIcon {...props} viewBox="0 0 20 18">
    <path d="M6,5 L4,5 L4,12 C4,13.1 4.9,14 6,14 L15,14 L15,12 L6,12 L6,5 Z" />
    <path d="M18,0 L10,0 C8.9,0 8,0.9 8,2 L8,8 C8,9.1 8.9,10 10,10 L18,10 C19.1,10 20,9.1 20,8 L20,2 C20,0.9 19.1,0 18,0 Z M18,8 L10,8 L10,2 L18,2 L18,8 Z M2,9 L0,9 L0,16 C0,17.1 0.9,18 2,18 L11,18 L11,16 L2,16 L2,9 Z" />
  </SvgIcon>
);

export default ManageMultiple;
