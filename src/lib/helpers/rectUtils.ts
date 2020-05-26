export interface Rect {
  top: number;
  left: number;
  width: number;
  height: number;
}

// https://silentmatt.com/rectangle-intersection/
export const doRectsIntersect = (rect1: Rect, rect2: Rect) => {
  const rect1TopLeft = [rect1.left, rect1.top];
  const rect1BottomRight = [rect1.left + rect1.width, rect1.top + rect1.height];
  const rect2TopLeft = [rect2.left, rect2.top];
  const rect2BottomRight = [rect2.left + rect2.width, rect2.top + rect2.height];

  return (
    rect1TopLeft[0] < rect2BottomRight[0] &&
    rect1BottomRight[0] > rect2TopLeft[0] &&
    rect1TopLeft[1] < rect2BottomRight[1] &&
    rect1BottomRight[1] > rect2TopLeft[1]
  );
};
