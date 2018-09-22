```js
initialState = {
  checked: false,
};

<Row inline>
  <Checkbox
    checked={state.checked}
    onChange={checked => setState({ checked })}
  />
  <Checkbox disabled />
  <Checkbox
    round
    checked={state.checked}
    onChange={checked => setState({ checked })}
  />
  <Checkbox round disabled />
</Row>;
```
