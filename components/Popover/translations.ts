export type YPosition = 'top' | 'bottom';
export type XPosition = 'left' | 'right';

type TranslateMap = {
  [anchorY in YPosition]: {
    [anchorX in XPosition]: {
      [toY in YPosition]: { [toX in XPosition]: [number, number] }
    }
  }
};

const translations: TranslateMap = {
  top: {
    left: {
      top: {
        left: [0, 0],
        right: [100, 0],
      },
      bottom: {
        left: [0, 100],
        right: [100, 100],
      },
    },
    right: {
      top: {
        left: [-100, 0],
        right: [0, 0],
      },
      bottom: {
        left: [-100, 100],
        right: [0, 100],
      },
    },
  },
  bottom: {
    left: {
      top: {
        left: [0, -100],
        right: [100, -100],
      },
      bottom: {
        left: [0, 0],
        right: [100, 0],
      },
    },
    right: {
      top: {
        left: [-100, -100],
        right: [0, -100],
      },
      bottom: {
        left: [-100, 0],
        right: [0, 0],
      },
    },
  },
};

export default translations;
