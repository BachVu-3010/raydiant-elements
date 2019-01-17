import * as React from 'react';
import Overlay from '../../internal/Overlay';
import withStyles, { WithStyles } from '../withStyles';
import withThemeSelector from '../withThemeSelector';
import styles from './FileDropper.styles';

export interface FileDropperProps extends WithStyles<typeof styles> {
  title: string;
  onDrop: (files: FileList) => void;
}

interface FileDropperState {
  isDragging: boolean;
}

export class FileDropper extends React.Component<
  FileDropperProps,
  FileDropperState
> {
  state: FileDropperState = {
    isDragging: false,
  };

  dragTarget: EventTarget;

  componentDidMount() {
    this.attachDragListeners();
  }

  componentWillUnmount() {
    this.removeDragListeners();
  }

  attachDragListeners() {
    document.addEventListener('dragover', this.onDragOver, false);
    document.addEventListener('dragenter', this.onDragEnter, false);
    document.addEventListener('dragleave', this.onDragLeave, false);
  }

  removeDragListeners() {
    document.removeEventListener('dragover', this.onDragOver);
    document.removeEventListener('dragenter', this.onDragEnter);
    document.removeEventListener('dragleave', this.onDragLeave);
  }

  onDragOver = (e: DragEvent) => {
    e.preventDefault();
  };

  onDragEnter = (e: DragEvent) => {
    this.dragTarget = e.target;
    this.setState({ isDragging: true });
  };

  onDragLeave = (e: DragEvent) => {
    // guard against child elements firing ondragleave by making sure
    // dragleave is fired for the same element that started the drag
    if (e.target === this.dragTarget) {
      this.setState({ isDragging: false });
    }
  };

  onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    this.setState({ isDragging: false });
    this.props.onDrop(e.dataTransfer.files);
  };

  render() {
    const { title, classes } = this.props;
    const { isDragging } = this.state;

    if (!isDragging) return null;

    return (
      <>
        <Overlay className={classes.overlay} />
        <div className={classes.root} onDrop={this.onDrop}>
          <div className={classes.title}>{title}</div>
        </div>
      </>
    );
  }
}

export default withThemeSelector(withStyles(styles)(FileDropper), 'dark');
