import * as React from 'react';
import {
  hasMissingChildValue,
  isElementSelected,
  sortChildrenBySelected,
} from '../../helpers';
import FormHelperText from '../../internal/FormHelperText';
import Column from '../../layout/Column';
import withStyles, { WithStyles } from '../withStyles';
import styles from './ImagePickerField.styles';
import ImagePickerFieldOption, {
  ImagePickerFieldOptionProps,
} from './ImagePickerFieldOption';

type ImagePickerFieldChild = React.ReactElement<ImagePickerFieldOptionProps>;

interface ImagePickerFieldProps extends WithStyles<typeof styles> {
  value: string[];
  error?: boolean;
  helperText?: React.ReactNode;
  onChange: (value: string[]) => void;
  onBlur: (e: React.FocusEvent<any>) => void;
  children?: ImagePickerFieldChild[];
}

interface ImagePickerFieldState {
  orderedChildren: ImagePickerFieldChild[];
}

export class ImagePickerField extends React.Component<
  ImagePickerFieldProps,
  ImagePickerFieldState
> {
  static defaultProps: Partial<ImagePickerFieldProps> = {
    error: false,
    helperText: '',
    children: [],
  };

  static getDerivedStateFromProps(
    props: ImagePickerFieldProps,
    state: ImagePickerFieldState,
  ) {
    // Only reorder children on mount and when the child options have changed.
    // We don't want to reorder as the user selects items.
    const shouldSortChildren = hasMissingChildValue(
      state.orderedChildren,
      props.children,
    );

    return shouldSortChildren
      ? { orderedChildren: sortChildrenBySelected(props.value, props.children) }
      : null;
  }

  state: ImagePickerFieldState = {
    orderedChildren: [],
  };

  render() {
    const { value, onChange, helperText, error, onBlur } = this.props;
    const { orderedChildren } = this.state;

    return (
      <div onBlur={onBlur}>
        <Column>
          {orderedChildren.map(child => {
            const isOptionSelected = isElementSelected(value, child);
            const optionValue = child.props.value;
            return React.cloneElement(child, {
              checked: isOptionSelected,
              onClick: () => {
                if (isOptionSelected) {
                  onChange(value.filter(item => item !== optionValue));
                } else {
                  onChange([...value, optionValue]);
                }
              },
            });
          })}
          <FormHelperText error={error}>{helperText}</FormHelperText>
        </Column>
      </div>
    );
  }
}

export default Object.assign(withStyles(styles)(ImagePickerField), {
  Option: ImagePickerFieldOption,
});
