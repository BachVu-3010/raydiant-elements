import * as P from '../PresentationTypes';

export default function getLayoutProperties(
  containerWidth: number,
  containerHeight: number,
  previewMode: P.PreviewMode,
) {
  const isLandscape = previewMode === P.PreviewMode.Horizontal;
  const width = isLandscape ? 1920 : 1080;
  const height = isLandscape ? 1080 : 1920;
  const scaleX = containerWidth / width;
  const scaleY = containerHeight / height;
  const scale = Math.min(scaleX, scaleY);
  const marginTop = -(height / 2) * scale;
  const marginLeft = -(width / 2) * scale;

  return {
    width,
    height,
    marginTop,
    marginLeft,
    transform: `scale(${scale})`,
  };
}
