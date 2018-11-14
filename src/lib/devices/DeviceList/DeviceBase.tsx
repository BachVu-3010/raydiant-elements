import * as cn from 'classnames';
import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import Hidden from '../../layout/Hidden';
import Row from '../../layout/Row';
import Spacer from '../../layout/Spacer';
import * as T from '../DeviceTypes';
import styles from './DeviceBase.styles';
import DeviceStatus from './DeviceStatus';
import Thumbnail from './Thumbnail';

export interface DeviceBaseProps {
  device: T.Device;
  isManageMode: boolean;
  isSelected: boolean;
  onSelect: (id: string, selected: boolean) => any;
  onConnectivityWizardClick: () => void;
}

export interface DeviceBaseWithStylesProps
  extends WithStyles<typeof styles>,
    DeviceBaseProps {
  controlsElement: React.ReactNode;
  checkboxElement: React.ReactNode;
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
      showMultipleThumbnails,
      isSelected,
      onSelect,
      onConnectivityWizardClick,
    } = this.props;
    const { id, name, isOnline, hasFileError, showConnectivityStatus } = device;
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
            {showConnectivityStatus && (
              <DeviceStatus
                isOnline={isOnline}
                hasFileError={hasFileError}
                onConnectivityWizardClick={onConnectivityWizardClick}
              />
            )}
          </div>
          <Spacer />
          <Hidden smDown>{controlsElement}</Hidden>
        </Row>
      </div>
    );
  }
}

export default withStyles(styles)(DeviceBase);
