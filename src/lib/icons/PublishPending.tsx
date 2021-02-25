import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import * as React from 'react';

export interface PublishPendingProps extends SvgIconProps {}

export const PublishPending = (props: PublishPendingProps) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M9.015 9.98505C9.234 13.394 11.732 16.185 15 16.85V20H9V14H5L9.015 9.98505ZM16.502 2.99805C20.09 2.99805 23.002 5.91005 23.002 9.49805C23.002 13.086 20.09 15.998 16.502 15.998C12.914 15.998 10.002 13.086 10.002 9.49805C10.002 5.91005 12.914 2.99805 16.502 2.99805ZM17 5.50005H15.5V10.5L19.12 12.66L19.87 11.43L17 9.75005V5.50005ZM11.403 4.00005C10.785 4.57305 10.263 5.24805 9.866 6.00005H5V4.00005H11.403V4.00005Z" />
  </SvgIcon>
);

export default PublishPending;
