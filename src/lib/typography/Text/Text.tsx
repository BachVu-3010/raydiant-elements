import * as React from 'react';
import Typography, { TypographyStyleProps } from '../../internal/Typography';

export const Text: React.FunctionComponent<TypographyStyleProps> = ({
  children,
  ...props
}) => <Typography {...props}>{children}</Typography>;

export default Text;
