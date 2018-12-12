```js
initialState = {
  checked: false,
};

<Row inline>
  <Checkbox
    checked={state.checked}
    onChange={checked => setState({ checked })}
  />
  <Checkbox disabled checked={state.checked} />
  <Checkbox
    round
    checked={state.checked}
    onChange={checked => setState({ checked })}
  />
  <Checkbox round disabled checked={state.checked} />
</Row>;
```

### Labels

```js
initialState = {
  checked: false,
};

<Row inline>
  <Checkbox
    label="Label"
    checked={state.checked}
    onChange={checked => setState({ checked })}
  />
  <Checkbox label="Label" disabled checked={state.checked} />
  <Checkbox
    label="Label"
    round
    checked={state.checked}
    onChange={checked => setState({ checked })}
  />
  <Checkbox label="Label" round disabled checked={state.checked} />
</Row>;
```
