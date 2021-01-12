import * as React from 'react';
import * as A from '../../../../application/ApplicationTypes';
import ImagePickerField from '../../../../core/ImagePickerField/ImagePickerField';
import replacePropNameWithValue from '../../../../helpers/replacePropNameWithValue';
import * as P from '../../../PresentationTypes';

interface ImagePickerFieldInputProps {
  value?: string[];
  onChange?: (value: string[]) => any;
  onBlur?: React.FocusEventHandler<any>;
  imagesUrl?: string;
  parentValue: P.ApplicationVariables;
}

interface ImagePickerFieldInputState {
  images: A.Image[] | null;
  imagesError: string;
}

class ImagePickerFieldInput extends React.Component<
  ImagePickerFieldInputProps,
  ImagePickerFieldInputState
> {
  static defaultProps: ImagePickerFieldInputProps = {
    imagesUrl: '',
    parentValue: {},
  };

  state: ImagePickerFieldInputState = {
    images: null,
    imagesError: '',
  };

  async fetchImages() {
    const { imagesUrl, parentValue } = this.props;
    const defaultErrorMessage = 'Failed to load images.';
    const url = replacePropNameWithValue(imagesUrl, parentValue);

    const resp = await fetch(url);
    if (resp.ok) {
      try {
        const images = await resp.json();
        this.setState({ images });
      } catch (err) {
        this.setState({ imagesError: defaultErrorMessage });
      }
    } else {
      try {
        const error = await resp.json();
        this.setState({ imagesError: error.message || defaultErrorMessage });
      } catch (err) {
        this.setState({ imagesError: defaultErrorMessage });
      }
    }
  }

  componentDidMount() {
    if (this.props.imagesUrl) {
      this.fetchImages();
    }
  }

  render() {
    const { value, onChange, onBlur } = this.props;

    // Ensure it's an array to appease TS.
    const imagePickerFieldValue = Array.isArray(value)
      ? value
      : Array.from(value || []);

    const { images } = this.state;
    if (!images) {
      return null;
    }

    return (
      <ImagePickerField
        onChange={onChange}
        onBlur={onBlur}
        value={imagePickerFieldValue}
      >
        {images.map(({ id, thumbnailUrl }) => (
          <ImagePickerField.Option key={id} value={id} url={thumbnailUrl} />
        ))}
      </ImagePickerField>
    );
  }
}

export default ImagePickerFieldInput;
