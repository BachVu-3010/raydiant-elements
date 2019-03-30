import * as React from 'react';
import withStyles, { createStyles, WithStyles } from '../../core/withStyles';
import OccurrenceListItem from './OccurrenceListItem';

interface OccurrenceListProps extends WithStyles<typeof styles> {}

export const OccurrenceList: React.FunctionComponent<OccurrenceListProps> = ({
  children,
  classes,
}) => {
  return <div className={classes.root}>{children}</div>;
};

const styles = () =>
  createStyles({
    root: {
      flex: 1,
    },
  });

export default Object.assign(withStyles(styles)(OccurrenceList), {
  Item: OccurrenceListItem,
});
