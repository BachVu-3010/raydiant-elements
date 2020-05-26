import cn from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import styles from './OneThirdLayout.styles';
import OneThirdLayoutColumnLarge from './OneThirdLayoutColumnLarge';
import OneThirdLayoutColumnSmall from './OneThirdLayoutColumnSmall';
import OneThirdLayoutContext from './OneThirdLayoutContext';

interface OneThirdLayoutProps extends WithStyles<typeof styles> {
  className?: string;
  collapseMode?: 'collapseLargeColumn' | 'collapseSmallColumn';
}

export const OneThirdLayout: React.SFC<OneThirdLayoutProps> = ({
  className,
  collapseMode = 'collapseLargeColumn',
  children,
  classes,
}) => {
  return (
    <OneThirdLayoutContext.Provider value={{ collapseMode }}>
      <div className={cn(classes.root, className)}>{children}</div>
    </OneThirdLayoutContext.Provider>
  );
};

export default Object.assign(withStyles(styles)(OneThirdLayout), {
  ColumnSmall: OneThirdLayoutColumnSmall,
  ColumnLarge: OneThirdLayoutColumnLarge,
});
