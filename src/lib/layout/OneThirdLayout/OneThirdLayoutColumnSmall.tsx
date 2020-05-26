import cn from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import Hidden from '../Hidden';
import styles from './OneThirdLayoutColumnSmall.styles';
import OneThirdLayoutContext from './OneThirdLayoutContext';

export interface OneThirdLayoutColumnSmallProps
  extends WithStyles<typeof styles> {
  className?: string;
  showBorder?: boolean;
}

export const OneThirdLayoutColumnSmall: React.SFC<
  OneThirdLayoutColumnSmallProps
> = ({ className, showBorder, children, classes }) => {
  const { collapseMode } = React.useContext(OneThirdLayoutContext);

  const columnEl = (
    <div className={cn(classes.root, className, showBorder && classes.border)}>
      {children}
    </div>
  );

  if (collapseMode === 'collapseSmallColumn') {
    return <Hidden smDown>{columnEl}</Hidden>;
  }

  return columnEl;
};

export default withStyles(styles)(OneThirdLayoutColumnSmall);
