import * as React from 'react';

export interface LoginScreenHeaderProps {}

export const LoginScreenHeader: React.SFC<LoginScreenHeaderProps> = ({
  children,
}) => <div>{children}</div>;

export default LoginScreenHeader;
