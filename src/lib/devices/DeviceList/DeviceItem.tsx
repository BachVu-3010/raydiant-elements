import * as cn from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import Hidden from '../../layout/Hidden';
import Row from '../../layout/Row';
import Spacer from '../../layout/Spacer';
import { Presentation } from '../../presentation/PresentationTypes';
import * as D from '../DeviceTypes';
import { DeviceGroupWithComputedProps } from './DeviceGroup';
import DeviceThumbnail from './DeviceThumbnail';
import styles from './Item.styles';

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
export interface DeviceItemBaseProps {
  isManageMode: boolean;
  isSelected: boolean;
  disablePublish?: boolean;
  onSelect: (id: string, selected: boolean) => any;
  onConnectivityWizardClick: () => void;
  onPublish: (deviceId: string) => void;
  onAddContent: (deviceId: string) => void;
  thumbnail?: string;
}

type DeviceItemProps = DeviceItemBaseProps & {
  device?: DeviceBaseWithComputedProps;
  deviceGroup?: DeviceGroupWithComputedProps;
  controlsElement: React.ReactNode;
  checkboxElement: React.ReactNode;
  deviceStatusElement: React.ReactNode;
  showMultipleThumbnails?: boolean;
} & WithStyles<typeof styles>;

class DeviceItem extends React.Component<DeviceItemProps> {
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
      thumbnail,
    } = this.props;
    const { id, name } = device || deviceGroup;
    // getThumbnailSrc and showMultipleThumbnails is only here for device groups
    // compatibility. Once 100% of users are on playlist (no more device groups),
    // we can remove them.
    const thumbnailSrc = thumbnail || this.getThumbnailSrc();

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
          <DeviceThumbnail
            showMultipleThumbnails={showMultipleThumbnails}
            src={thumbnailSrc}
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

export default withStyles(styles)(DeviceItem);
