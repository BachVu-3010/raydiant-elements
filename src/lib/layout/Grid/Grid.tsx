import * as cn from 'classnames';
import * as debounce from 'debounce';
import * as React from 'react';
import withStyles, { WithStyles } from '../../core/withStyles';
import styles from './Grid.styles';
import GridItem from './GridItem';

interface GridProps extends WithStyles<typeof styles> {}

interface GridState {
  gridWidth: number;
  itemWidth: number;
}

// The Grid components works by first rendering all it's children in a flex
// container with justify-content: space-between to expand the items to the
// edges. When there are less items in the last row than the # of items per
// row, we add empty divs of equal width to fix the alignment of the last row.
export class Grid extends React.Component<GridProps, GridState> {
  state = {
    gridWidth: 0,
    itemWidth: 0,
  };

  gridElement: HTMLDivElement;
  updateWidthsDebounced: any;

  constructor(props: GridProps) {
    super(props);
    this.updateWidthsDebounced = debounce(this.updateWidths.bind(this), 20);
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWidthsDebounced);
    window.addEventListener('orientationchange', this.updateWidthsDebounced);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWidthsDebounced);
    window.removeEventListener('orientationchange', this.updateWidthsDebounced);
  }

  componentDidUpdate() {
    this.updateWidths();
  }

  gridRef = (element?: HTMLDivElement) => {
    if (element) {
      this.gridElement = element;
      this.updateWidths();
    } else {
      this.gridElement = null;
    }
  };

  updateWidths() {
    let gridWidth = 0;
    let itemWidth = 0;

    if (this.gridElement) {
      const gridBounds = this.gridElement.getBoundingClientRect();
      const itemElement = this.gridElement.firstChild as HTMLElement;

      if (itemElement) {
        const itemBounds = itemElement.getBoundingClientRect();
        gridWidth = gridBounds.width;
        itemWidth = itemBounds.width;
      }
    }

    // Guard against infinite setState loops from componentDidUpdate.
    if (
      this.state.gridWidth !== gridWidth ||
      this.state.itemWidth !== itemWidth
    ) {
      this.setState({ gridWidth, itemWidth });
    }
  }

  render() {
    const { classes, children } = this.props;
    const { gridWidth, itemWidth } = this.state;

    const childrenCount = React.Children.count(children);
    if (childrenCount === 0) {
      return <div className={classes.root} />;
    }

    // Fill the last row with empty elements of equal width to maintain grid shape.
    const remainingElements: React.ReactNode[] = [];
    let shouldCenterItems = false;
    if (gridWidth && itemWidth) {
      const itemsPerRow = Math.floor(gridWidth / itemWidth);
      const remainingItems = itemsPerRow - (childrenCount % itemsPerRow);
      shouldCenterItems = itemsPerRow === 1;

      for (let i = 0; i < remainingItems; i++) {
        remainingElements.push(
          <div
            key={i}
            style={{ width: itemWidth, visibility: 'hidden' }}
            aria-hidden
          />,
        );
      }
    }

    return (
      <div className={classes.root}>
        <div
          className={cn(classes.grid, shouldCenterItems && classes.center)}
          ref={this.gridRef}
        >
          {children}
          {remainingElements}
        </div>
      </div>
    );
  }
}
export default Object.assign(withStyles(styles)(Grid), {
  Item: GridItem,
});
