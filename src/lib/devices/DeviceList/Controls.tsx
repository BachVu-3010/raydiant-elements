import * as React from 'react';
import Button from '../../core/Button';
import { stopPropagation } from '../../helpers';

export interface ControlsProps {
  showPublish: boolean;
  onPublish: () => void;
  disablePublish: boolean;
}

export const Controls: React.SFC<ControlsProps> = ({
  showPublish,
  onPublish,
  disablePublish,
}) => (
  <>
    <Button icon="add" label="Add Content" />
    {showPublish && (
      <Button
        icon="publish"
        label="Publish"
        color="primary"
        onClick={stopPropagation(onPublish)}
        disabled={disablePublish}
      />
    )}
  </>
);

export default Controls;
