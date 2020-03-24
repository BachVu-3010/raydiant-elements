```jsx
const images = [
  {
    id: 'id_1',
    thumbnailUrl:
      'https://assets.raydiant.com/images/image-picker-sample-1.jpeg',
  },
  {
    id: 'id_2',
    thumbnailUrl:
      'https://assets.raydiant.com/images/image-picker-sample-2.jpeg',
  },
];

initialState = {
  selectedImageIds: ['id_1'],
};

<App>
  <Column>
    {!state.destroy && (
      <>
        <Row>
          <ImagePickerField
            value={state.selectedImageIds}
            onChange={selectedImageIds => setState({ selectedImageIds })}
          >
            {images.map(({ id, thumbnailUrl }) => (
              <ImagePickerField.Option key={id} value={id} url={thumbnailUrl} />
            ))}
          </ImagePickerField>
          <ImagePickerField
            value={state.selectedImageIds}
            helperText="Here is some helper text"
            onChange={selectedImageIds => setState({ selectedImageIds })}
          >
            {images.map(({ id, thumbnailUrl }) => (
              <ImagePickerField.Option key={id} value={id} url={thumbnailUrl} />
            ))}
          </ImagePickerField>
          <ImagePickerField
            value={state.selectedImageIds}
            helperText="Oops! An error occurred"
            error
            onChange={selectedImageIds => setState({ selectedImageIds })}
          >
            {images.map(({ id, thumbnailUrl }) => (
              <ImagePickerField.Option key={id} value={id} url={thumbnailUrl} />
            ))}
          </ImagePickerField>
        </Row>
      </>
    )}
    <Row>
      <Button
        label="Re-mount"
        onClick={() => {
          setState({ destroy: true });
          setTimeout(() => setState({ destroy: false }));
        }}
      />
    </Row>
  </Column>
</App>;
```
