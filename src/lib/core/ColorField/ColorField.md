```js
initialState = {
  background: '#414698',
  border: '',
};

<Row inline>
  <ColorField
    label="Background Color"
    value={state.background}
    onChange={background => setState({ background })}
  />
  <ColorField
    label="Border Color"
    value={state.border}
    onChange={border => setState({ border })}
  />
  <ColorField label="Disabled" disabled />
</Row>;
```
