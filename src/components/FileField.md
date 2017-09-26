```jsx
initialState = {
  image: null,
  multiple: null,
};
const onChange = (e) => {
  setState({[e.target.name]: e.target.files});
};

<Column>
  <FileField name="image" accept="image/*" onChange={onChange} value={state.image} label="Image" helperText="Accepts .png, .jpg, .pdf" />
  <FileField name="multiple" multiple onChange={onChange} value={state.multiple} label="Multiple" />
  <FileField disabled label="Disabled" value={null} />
</Column>
```