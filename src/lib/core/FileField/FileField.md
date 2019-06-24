```js
initialState = {
  image: null,
  multiple: null,
};

<Row inline>
  <FileField
    label="Image"
    accept={['image/jpg', 'image/png']}
    value={state.image}
    onChange={image => setState({ image })}
    onClear={() => setState({ image: null })}
  />
  <FileField
    label="Multiple"
    multiple
    value={state.multiple}
    onChange={multiple => setState({ multiple })}
    onClear={() => setState({ multiple: null })}
    helperText={<Link href="https://google.com">Helper link</Link>}
  />
  <FileField label="Disabled" disabled helperText="Helper text (optional)" />
  <FileField label="Error" error helperText="Oops! This field is invalid" />
</Row>;
```
