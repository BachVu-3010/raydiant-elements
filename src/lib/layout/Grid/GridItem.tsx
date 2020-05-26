import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import styles from './GridItem.styles';
import GridContext from './GridContext';

export interface GridItemProps extends WithStyles<typeof styles> {
  nodeId?: string;
}

export const GridItem: React.FunctionComponent<GridItemProps> = (
  { nodeId, children },
  ref,
) => {
  const rootRef = React.useRef(null);

  const {
    gridItemClassName,
    addNodeToNodeMap,
    removeNodeFromNodeMap,
  } = React.useContext(GridContext);

  // Add grid item to parent node map.
  React.useEffect(
    () => {
      addNodeToNodeMap(nodeId, rootRef.current);
      return () => removeNodeFromNodeMap(nodeId);
    },
    [rootRef.current],
  );

  return (
    <div
      className={gridItemClassName}
      ref={innerRef => {
        rootRef.current = innerRef;
        if (ref) {
          ref.current = innerRef;
        }
      }}
    >
      {children}
    </div>
  );
};

export default withStyles(styles)(React.forwardRef(GridItem));
