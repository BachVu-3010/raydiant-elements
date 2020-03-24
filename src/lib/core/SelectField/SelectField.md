```js
initialState = {
  value: 'opt1',
};
<Row inline>
  <SelectField
    label="Select"
    value={state.value}
    onChange={value => setState({ value })}
  >
    <option value="opt1">Option 1</option>
    <option value="opt2">Option 2</option>
    <option value="opt3">Option 3</option>
  </SelectField>

  <SelectField
    label="Select"
    value={state.value}
    onChange={value => setState({ value })}
    helperText="Helper text (optional)"
  >
    <option value="opt1">Option 1</option>
    <option value="opt2">Option 2</option>
    <option value="opt3">Option 3</option>
  </SelectField>

  <SelectField
    disabled
    label="Disabled"
    value={state.value}
    onChange={value => setState({ value })}
    helperText="Helper text (optional)"
  >
    <option value="opt1">Option 1</option>
    <option value="opt2">Option 2</option>
    <option value="opt3">Option 3</option>
  </SelectField>

  <SelectField
    error
    label="Error"
    value={state.value}
    onChange={value => setState({ value })}
    helperText="Helper text (optional)"
  >
    <option value="opt1">Option 1</option>
    <option value="opt2">Option 2</option>
    <option value="opt3">Option 3</option>
  </SelectField>
  <div style={{ minWidth: 200 }}>
    <SelectField
      label="With thumbnail"
      value={state.value}
      onChange={value => setState({ value })}
      helperText="Helper text (optional)"
      native={false}
    >
      <SelectField.Item
        value="opt1"
        thumbnailUrl="https://assets.raydiant.com/images/dropbox.png"
      >
        Dropbox
      </SelectField.Item>
      <SelectField.Item
        value="opt2"
        thumbnailUrl="https://assets.raydiant.com/images/google-drive.png"
      >
        Google Drive
      </SelectField.Item>
      <SelectField.Item
        value="opt3"
        thumbnailUrl="https://assets.raydiant.com/images/unsplash.png"
      >
        Unsplash
      </SelectField.Item>
    </SelectField>
  </div>
</Row>;
```
