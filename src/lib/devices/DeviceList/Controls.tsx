import * as React from 'react';
import Button from '../../core/Button';

export interface ControlsProps {
  showPublish: boolean;
}

export const Controls: React.SFC<ControlsProps> = ({ showPublish }) => (
  <>
    <Button icon="add" label="Add Content" />
    {showPublish && <Button icon="publish" label="Publish" color="primary" />}
  </>
);

export default Controls;
