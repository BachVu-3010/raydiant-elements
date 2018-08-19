```js
initialState = {
  image: null,
  multiple: null,
  optional: null,
};

<>
  <FileField
    label="Image"
    accept={['image/jpg', 'image/png']}
    value={state.image}
    onChange={image => setState({ image })}
  />
  <FileField
    label="Multiple"
    multiple
    value={state.multiple}
    onChange={multiple => setState({ multiple })}
    helperText="Helper text (optional)"
  />
  <FileField label="Disabled" disabled helperText="Helper text (optional)" />
  <FileField label="Error" error helperText="Oops! This field is invalid" />
</>;
```
