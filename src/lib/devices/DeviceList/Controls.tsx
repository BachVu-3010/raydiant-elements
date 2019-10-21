import * as React from 'react';
import Button from '../../core/Button';
import { stopPropagation } from '../../helpers';

export interface ControlsProps {
  showPublish: boolean;
  onPublish: () => void;
  disablePublish: boolean;
  onAddContent: () => void;
}

export const Controls: React.SFC<ControlsProps> = ({
  showPublish,
  onPublish,
  disablePublish,
  onAddContent,
}) => (
  <>
    <Button
      icon="add"
      label="Add Content"
      onClick={stopPropagation(onAddContent)}
    />
    {showPublish && (
      <Button
        icon="publish"
        label="Publish"
        color="progress"
        onClick={stopPropagation(onPublish)}
        disabled={disablePublish}
      />
    )}
  </>
);

export default Controls;
