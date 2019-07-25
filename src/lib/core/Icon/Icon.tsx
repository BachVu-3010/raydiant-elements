import * as cn from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from '../withStyles';
import styles from './Icon.styles';
import paths from './paths';

export type IconOptions =
  | 'add'
  | 'alert'
  | 'arrowLeft'
  | 'checkmark'
  | 'chevronDown'
  | 'defaultContent'
  | 'dragVertical'
  | 'edit'
  | 'endDate'
  | 'facebook'
  | 'fullscreen'
  | 'fullscreenExit'
  | 'group'
  | 'horizontalScreen'
  | 'lock'
  | 'next'
  | 'menu'
  | 'pause'
  | 'play'
  | 'previous'
  | 'publish'
  | 'remove'
  | 'repeat'
  | 'time'
  | 'trash'
  | 'scheduledContent'
  | 'screenSettings'
  | 'search'
  | 'startDate'
  | 'stop'
  | 'verticalScreen';

interface IconProps extends WithStyles<typeof styles> {
  /** Icon name */
  icon: IconOptions;
  /** Icon title */
  title?: string;
  /** Additional classname */
  className?: string;
}

export const Icon: React.SFC<IconProps> = ({
  icon,
  title,
  className,
  classes,
}) => {
  if (!paths[icon]) {
    console.warn(`Unsupported icon '${icon}' used in <Icon />`); // tslint:disable-line no-console
    return null;
  }
  const { path, viewBox } = paths[icon];

  return (
    <svg viewBox={viewBox} className={cn(classes.icon, className)}>
      <path d={path} />
      {title && <title>{title}</title>}
    </svg>
  );
};

export default withStyles(styles)(Icon);
