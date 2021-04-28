import * as React from 'react';
import cn from 'classnames';
import Typography, { TypographyProps } from '../../internal/Typography';
import withStyles, { WithStyles } from '../../core/withStyles';
import styles from './Text.styles';

interface TextProps extends TypographyProps, WithStyles<typeof styles> {
  editable?: boolean;
  value?: string;
  maxWidth?: string | number;
  autoFocus?: boolean;
  error?: boolean;
  onChange?: (value: string) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export const Text: React.FunctionComponent<TextProps> = (
  {
    editable,
    value,
    maxWidth,
    autoFocus,
    error,
    onChange,
    onBlur,
    onFocus,
    children,
    classes,
    ...props
  },
  ref,
) => {
  if (editable) {
    return (
      <Typography {...props}>
        <input
          ref={ref}
          type="text"
          className={cn(classes.input, error && classes.error)}
          value={value}
          autoFocus={autoFocus}
          onChange={e => onChange(e.target.value)}
          onBlur={onBlur}
          onFocus={onFocus}
          style={{ maxWidth }}
        />
      </Typography>
    );
  }

  return <Typography {...props}>{children || value}</Typography>;
};

export default withStyles(styles)(React.forwardRef(Text));
