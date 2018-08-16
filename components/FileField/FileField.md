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
  />
  <FileField
    label="Optional"
    value={state.optional}
    onChange={optional => setState({ optional })}
    onClear={() => setState({ optional: null })}
    helperText="Helper text (optional)"
  />
  <FileField label="Disabled" disabled />
  <FileField label="Error" error helperText="Oops! This field is invalid" />
</>;
```
