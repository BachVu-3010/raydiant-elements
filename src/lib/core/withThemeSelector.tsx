import * as React from 'react';
import ThemeSelector, { ThemeProps, ThemeType } from './ThemeSelector';

export default function withThemeSelector<OriginalProps extends object>(
  Component: React.ComponentType<OriginalProps>,
  // The default color to use when props.color isn't provided. If this isn't set
  // it will inherit the current color from context.
  defaultColor?: ThemeType,
): React.SFC<OriginalProps & ThemeProps> {
  const WrappedComponent: React.SFC<OriginalProps & ThemeProps> = props => {
    if (!props.color && !defaultColor) return <Component {...props} />;
    return (
      <ThemeSelector color={props.color || defaultColor}>
        <Component {...props} />
      </ThemeSelector>
    );
  };

  return WrappedComponent;
}
