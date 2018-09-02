```js
initialState = {
  checked: false,
};

<Row inline>
  <Switch checked={state.checked} onChange={checked => setState({ checked })} />
  <Switch disabled />
  <Switch
    checked={state.checked}
    onChange={checked => setState({ checked })}
    label="Label"
  />
  <Switch disabled label="Label" />
</Row>;
```
