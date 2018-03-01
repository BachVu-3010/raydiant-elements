```jsx
initialState = {
  image: null,
  multiple: null,
  optional: [{ name: 'foo.png' }],
};
const onChange = e => {
  if (e.target.files && e.target.files.length) {
    setState({ [e.target.name]: e.target.files });
  }
};
const onClear = e => {
  setState({ [e.target.name]: null });
};

<Column>
  <FileField
    name="image"
    accept="image/*"
    onChange={onChange}
    value={state.image}
    label="Image"
    helperText="Accepts .png, .jpg, .pdf"
  />
  <FileField
    name="multiple"
    multiple
    onChange={onChange}
    value={state.multiple}
    label="Multiple"
  />
  <FileField
    name="optional"
    onChange={onChange}
    onClear={onClear}
    value={state.optional}
    optional={true}
    label="Optional"
  />
  <FileField disabled label="Disabled" value={null} />
</Column>;
```
