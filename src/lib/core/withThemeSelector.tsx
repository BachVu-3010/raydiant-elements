import * as React from 'react';
import ThemeSelector, { ThemeProps } from './ThemeSelector';

export default function withThemeSelector<OriginalProps extends object>(
  Component: React.ComponentType<OriginalProps>,
): React.SFC<OriginalProps & ThemeProps> {
  const WrappedComponent: React.SFC<OriginalProps & ThemeProps> = props => {
    if (!props.color) return <Component {...props} />;
    return (
      <ThemeSelector color={props.color}>
        <Component {...props} />
      </ThemeSelector>
    );
  };

  return WrappedComponent;
}
