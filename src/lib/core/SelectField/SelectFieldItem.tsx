import MUIMenuItem from '@material-ui/core/MenuItem';
import * as React from 'react';
import useStyles from './SelectFieldItem.styles';

export interface SeletFieldItemProps {
  thumbnailUrl?: string;
  value: string;
}

export const SeletFieldItem: React.FunctionComponent<SeletFieldItemProps> = ({
  children,
  thumbnailUrl,
  ...rest
}) => {
  const classes = useStyles();
  return (
    <MUIMenuItem {...rest}>
      {thumbnailUrl && <img className={classes.thumbnail} src={thumbnailUrl} />}
      <span>{children}</span>
    </MUIMenuItem>
  );
};

export default SeletFieldItem;
