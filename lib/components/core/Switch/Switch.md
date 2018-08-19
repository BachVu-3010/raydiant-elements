```js
initialState = {
  checked: false,
};

<>
  <Switch checked={state.checked} onChange={checked => setState({ checked })} />
  <Switch disabled />
  <Switch
    checked={state.checked}
    onChange={checked => setState({ checked })}
    label="Label"
  />
  <Switch disabled label="Label" />
</>;
```
