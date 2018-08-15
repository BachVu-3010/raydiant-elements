```js
initialState = {
  checked: false,
};

<>
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
</>;
```
