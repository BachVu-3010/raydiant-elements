import MUIHidden, { HiddenProps } from '@material-ui/core/Hidden';
import * as React from 'react';

export const Hidden: React.SFC<HiddenProps> = props => <MUIHidden {...props} />;

export default MUIHidden;
