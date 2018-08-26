```js
initialState = {
  count: 1,
};

<Row inline>
  <NumberField
    label="Count"
    value={state.count}
    onChange={count => setState({ count })}
  />
  <NumberField
    label="Count"
    value={state.count}
    helperText="Increment from 1 to 10"
    min={1}
    max={10}
    onChange={count => setState({ count })}
  />
  <NumberField
    disabled
    label="Disabled"
    value={state.count}
    helperText="Increment from 1 to 10"
    min={1}
    max={10}
    onChange={count => setState({ count })}
  />
  <NumberField
    error
    label="Error"
    value={state.count}
    helperText="Increment from 1 to 10"
    onChange={count => setState({ count })}
  />
</Row>;
```
