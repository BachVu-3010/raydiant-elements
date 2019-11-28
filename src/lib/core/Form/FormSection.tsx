import * as cn from 'classnames';
import * as React from 'react';
import Column from '../../layout/Column/index';
import { Theme } from '../../theme';
import withStyles, { createStyles, WithStyles } from '../withStyles';

export interface FormSectionProps extends WithStyles<typeof styles> {
  paddingBottom?: boolean;
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexShrink: 0,
      padding: theme.spacing.unit * 2,
    },
    noPaddingBottom: {
      paddingBottom: 0,
    },
  });

export const FormSection: React.SFC<FormSectionProps> = ({
  children,
  classes,
  paddingBottom = true,
}) => (
  <Column
    className={cn(classes.root, !paddingBottom && classes.noPaddingBottom)}
  >
    {children}
  </Column>
);

export default withStyles(styles)(FormSection);
