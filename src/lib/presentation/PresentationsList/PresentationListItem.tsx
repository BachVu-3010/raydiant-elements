import * as cn from 'classnames';
import * as React from 'react';
import Button from '../../core/Button';
import withStyles, { WithStyles } from '../../core/withStyles';
import { stopPropagation, testAttr } from '../../helpers';
import Row from '../../layout/Row';
import Spacer from '../../layout/Spacer';
import PresentationThumbnail from '../../presentation/PresentationThumbnail';
import { PresentationThumbnailProps } from '../../presentation/PresentationThumbnail/PresentationThumbnail';
import * as P from '../../presentation/PresentationTypes';
import Heading2 from '../../typography/Heading2';
import Text from '../../typography/Text';
import styles from './PresentationListItem.styles';

export interface PresentationListItemProps
  extends WithStyles,
    PresentationThumbnailProps {
  presentation: P.Presentation;
  onRemove?: () => void;
  testId?: string;
}

class PresentationListItem extends React.Component<PresentationListItemProps> {
  render() {
    const {
      presentation,
      classes,
      selected,
      onClick,
      onEdit,
      onRemove,
      isLoading,
      hasError,
      isLocked,
      lockedMessage,
      testId,
    } = this.props;
    const shouldShowRemove = selected && !!onRemove;
    return (
      <div
        className={cn(classes.root, selected && classes.selected)}
        onClick={onClick}
        {...testAttr(testId)}
      >
        <Row>
          <div className={classes.thumbnail}>
            <PresentationThumbnail
              presentation={presentation}
              isLoading={isLoading}
              hasError={hasError}
              onEdit={selected && onEdit}
              showControls={selected}
              isLocked={isLocked}
              lockedMessage={lockedMessage}
            />
          </div>
          <div className={classes.presentationDetails}>
            <Heading2 ellipsis>{presentation.name}</Heading2>
            <Text muted>{presentation.applicationName}</Text>
          </div>
          <Spacer />
          {shouldShowRemove && (
            <div className={classes.topRight} {...testAttr(`${testId}-remove`)}>
              <Button icon="remove" onClick={stopPropagation(onRemove)} />
            </div>
          )}
        </Row>
      </div>
    );
  }
}

export default withStyles(styles)(PresentationListItem);
