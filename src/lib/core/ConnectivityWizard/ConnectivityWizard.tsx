import * as React from 'react';
import { stopPropagation } from '../../helpers';
import Link from '../Link';

export interface ConnectivityWizardProps {
  onConnectivityWizardClick: () => void;
}

const ConnectivityWizardLink: React.SFC<ConnectivityWizardProps> = props => {
  const { onConnectivityWizardClick } = props;
  return (
    <Link onClick={stopPropagation(onConnectivityWizardClick)}>Need help?</Link>
  );
};

export default ConnectivityWizardLink;
