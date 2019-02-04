import * as cn from 'classnames';
import * as React from 'react';
import Button from '../../core/Button';
import Heading1 from '../../core/Heading1';
import Text from '../../core/Text';
import withStyles, { WithStyles } from '../../core/withStyles';
import Row from '../../layout/Row';
import Spacer from '../../layout/Spacer';
import PresentationThumbnail from '../../presentation/PresentationThumbnail';
import { PresentationThumbnailProps } from '../../presentation/PresentationThumbnail/PresentationThumbnail';
import * as P from '../../presentation/PresentationTypes';
import styles from './Item.styles';

interface ItemProps extends WithStyles, PresentationThumbnailProps {
  presentation: P.Presentation;
  onRemove: () => void;
}

class Item extends React.Component<ItemProps> {
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
    } = this.props;
    return (
      <div
        className={cn(classes.root, selected && classes.selected)}
        onClick={onClick}
      >
        <Row>
          <div className={classes.thumbnail}>
            <PresentationThumbnail
              presentation={presentation}
              isLoading={isLoading}
              hasError={hasError}
              onEdit={selected && onEdit}
              showControls={selected}
            />
          </div>
          <div className={classes.presentationDetails}>
            <Heading1 textTruncate>{presentation.name}</Heading1>
            <Text muted>{presentation.applicationName}</Text>
          </div>
          <Spacer />
          {selected && (
            <div className={classes.topRight}>
              <Button icon="remove" onClick={onRemove} />
            </div>
          )}
        </Row>
      </div>
    );
  }
}

export default withStyles(styles)(Item);
