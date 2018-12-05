import * as cn from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import Hidden from '../../layout/Hidden';
import Row from '../../layout/Row';
import Spacer from '../../layout/Spacer';
import * as T from '../DeviceTypes';
import styles from './DeviceBase.styles';
import Thumbnail from './Thumbnail';

export interface DeviceBaseProps {
  device: T.Device | T.DeviceGroup;
  isManageMode: boolean;
  isSelected: boolean;
  onSelect: (id: string, selected: boolean) => any;
  onConnectivityWizardClick: () => void;
  onPublish: (deviceId: string) => void;
}

export interface DeviceBaseWithStylesProps
  extends WithStyles<typeof styles>,
    DeviceBaseProps {
  controlsElement: React.ReactNode;
  checkboxElement: React.ReactNode;
  deviceStatusElement: React.ReactNode;
  showMultipleThumbnails?: boolean;
}

class DeviceBase extends React.Component<DeviceBaseWithStylesProps> {
  static defaultProps = {
    showMultipleThumbnail: false,
  };
  getThumbnailSrc = () => {
    const { device } = this.props;
    const { defaultSequence, deployedPresentations } = device;
    let firstPresentation = {
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
      classes,
      controlsElement,
      checkboxElement,
      deviceStatusElement,
      showMultipleThumbnails,
      isSelected,
      onSelect,
    } = this.props;
    const { id, name } = device;
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
          <Hidden smDown>{controlsElement}</Hidden>
        </Row>
      </div>
    );
  }
}

export default withStyles(styles)(DeviceBase);
