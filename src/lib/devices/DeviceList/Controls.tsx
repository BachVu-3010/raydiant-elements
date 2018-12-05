import * as React from 'react';
import Button from '../../core/Button';

export interface ControlsProps {
  showPublish: boolean;
  onPublish: () => void;
  isPublishing: boolean;
}

export const Controls: React.SFC<ControlsProps> = ({
  showPublish,
  onPublish,
  isPublishing,
}) => (
  <>
    <Button icon="add" label="Add Content" />
    {showPublish && (
      <Button
        icon="publish"
        label="Publish"
        color="primary"
        onClick={onPublish}
        disabled={isPublishing}
      />
    )}
  </>
);

export default Controls;
