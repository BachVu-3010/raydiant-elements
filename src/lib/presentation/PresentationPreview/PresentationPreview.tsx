import * as React from 'react';
import * as cn from 'classnames';
import * as debounce from 'debounce';
import { ApplicationVersion } from '../../application/ApplicationTypes';
import Tabs from '../../core/Tabs/Tabs';
import Hidden from '../../layout/Hidden';
import { PreviewMode } from '../PresentationTypes';
import useStyles from './PresentationPreview.styles';

interface PresentationPreviewProps {
  previewMode: PreviewMode;
  appVersion?: ApplicationVersion;
  showBorder?: boolean;
  children: React.ReactNode;
  onPreviewModeChange?: (previewMode: PreviewMode) => any;
}

const PresentationPreview = ({
  appVersion,
  previewMode,
  showBorder,
  children,
  onPreviewModeChange,
}: PresentationPreviewProps) => {
  const classes = useStyles();

  // Refs

  const previewRef = React.useRef<HTMLDivElement | null>(null);

  // State

  const [dimensions, setDimensions] = React.useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });

  // Callbacks

  const calculateDimensions = React.useCallback(
    () => {
      if (!previewRef.current) return;
      setDimensions(previewRef.current.getBoundingClientRect());
    },
    [setDimensions],
  );

  // Effects

  // Calculate initial dimensions
  React.useLayoutEffect(calculateDimensions, []);

  // Re-calculate on window resize
  React.useEffect(
    () => {
      const calculateDebounced = debounce(calculateDimensions);
      window.addEventListener('resize', calculateDebounced);
      window.addEventListener('orientationchange', calculateDebounced);
      return () => {
        window.removeEventListener('resize', calculateDebounced);
        window.removeEventListener('orientationchange', calculateDebounced);
      };
    },
    [calculateDimensions],
  );

  // Render

  const isLandscape = previewMode === PreviewMode.Horizontal;
  const width = isLandscape ? 1920 : 1080;
  const height = isLandscape ? 1080 : 1920;
  const scaleX = dimensions.width / width;
  const scaleY = dimensions.height / height;
  const scale = Math.min(scaleX, scaleY);
  const marginTop = -(height / 2) * scale;
  const marginLeft = -(width / 2) * scale;

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <div ref={previewRef} className={classes.previewContainer}>
          <div
            className={cn(classes.preview, showBorder && classes.previewBorder)}
            style={{
              width,
              height,
              marginTop,
              marginLeft,
              transform: `scale(${scale})`,
            }}
          >
            {children}
          </div>
        </div>
      </div>
      <div className={classes.footer}>
        {appVersion && (
          <div className={classes.app}>
            <div
              className={classes.appIcon}
              style={{
                backgroundImage: appVersion.iconUrl
                  ? `url(${appVersion.iconUrl})`
                  : '',
              }}
            />
            {appVersion.name && (
              <div>
                <div className={classes.appName}>{appVersion.name}</div>
                <div className={classes.appDescription}>
                  {/* This is the reason why we can't have a presentation property with the name 'description' */}
                  {appVersion.strings.description}
                </div>
              </div>
            )}
          </div>
        )}
        {onPreviewModeChange && (
          <Hidden smDown>
            <Tabs inline>
              <Tabs.Item
                icon="horizontalScreen"
                label="Horizontal"
                active={previewMode === PreviewMode.Horizontal}
                onClick={() => onPreviewModeChange(PreviewMode.Horizontal)}
              />
              <Tabs.Item
                icon="verticalScreen"
                label="Vertical"
                active={previewMode === PreviewMode.Vertical}
                onClick={() => onPreviewModeChange(PreviewMode.Vertical)}
              />
            </Tabs>
          </Hidden>
        )}
      </div>
    </div>
  );
};

export default PresentationPreview;
