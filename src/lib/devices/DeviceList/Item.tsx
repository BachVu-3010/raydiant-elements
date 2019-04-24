import * as cn from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import Hidden from '../../layout/Hidden';
import Row from '../../layout/Row';
import Spacer from '../../layout/Spacer';
import { Presentation } from '../../presentation/PresentationTypes';
import * as D from '../DeviceTypes';
import { DeviceGroupWithComputedProps } from './DeviceGroup';
import styles from './Item.styles';
import Thumbnail from './Thumbnail';

interface FileStatus {
  isFileUploading: boolean;
  hasFileError: boolean;
}

interface IsResin {
  isResin: boolean;
}

interface PublishStatus {
  needsPublish: boolean;
}

export type DeviceBaseWithComputedProps = D.DeviceBase &
  FileStatus &
  IsResin &
  PublishStatus;

// This interface is shared with DeviceList/Device and DeviceList/DeviceGroup
export interface ItemBaseProps {
  isManageMode: boolean;
  isSelected: boolean;
  disablePublish?: boolean;
  onSelect: (id: string, selected: boolean) => any;
  onConnectivityWizardClick: () => void;
  onPublish: (deviceId: string) => void;
  onAddContent: (deviceId: string) => void;
}

type ItemProps = ItemBaseProps & {
  device?: DeviceBaseWithComputedProps;
  deviceGroup?: DeviceGroupWithComputedProps;
  controlsElement: React.ReactNode;
  checkboxElement: React.ReactNode;
  deviceStatusElement: React.ReactNode;
  showMultipleThumbnails?: boolean;
} & WithStyles<typeof styles>;

class Item extends React.Component<ItemProps> {
  static defaultProps = {
    showMultipleThumbnails: false,
  };
  getThumbnailSrc = () => {
    const { device, deviceGroup } = this.props;
    const { defaultSequence, deployedPresentations } = device || deviceGroup;
    let firstPresentation: Partial<Presentation> = {
      applicationThumbnailUrl: '',
      thumbnailUrl: '',
    };
    if (defaultSequence.length > 0) {
      const firstPresentationId = defaultSequence[0];
      if (deployedPresentations[firstPresentationId]) {
        firstPresentation = deployedPresentations[firstPresentationId];
      }
    }
    const { applicationThumbnailUrl, thumbnailUrl } = firstPresentation;
    return thumbnailUrl || applicationThumbnailUrl;
  };
  render() {
    const {
      device,
      deviceGroup,
      classes,
      controlsElement,
      checkboxElement,
      deviceStatusElement,
      showMultipleThumbnails,
      isSelected,
      onSelect,
    } = this.props;
    const { id, name } = device || deviceGroup;
    return (
      <div
        onClick={
          onSelect &&
          (() => {
            onSelect(id, isSelected);
          })
        }
        className={cn(classes.root, isSelected && classes.selected)}
      >
        <Row className={classes.deviceContainer}>
          {checkboxElement}
          <Thumbnail
            showMultipleThumbnails={showMultipleThumbnails}
            src={this.getThumbnailSrc()}
          />
          <div>
            <div className={classes.deviceName}>{name}</div>
            {deviceStatusElement}
          </div>
          <Spacer />
          <Hidden xsDown>{controlsElement}</Hidden>
        </Row>
      </div>
    );
  }
}

export default withStyles(styles)(Item);
