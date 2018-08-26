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
</Row>;
```
