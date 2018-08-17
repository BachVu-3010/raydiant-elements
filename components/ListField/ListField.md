```js
initialState = {
  value: ['Item1', 'Item2', 'Item3', 'Item4'],
};

<div style={{ width: 300 }}>
  <ListField
    value={state.value}
    onChange={value => setState({ value })}
    onItemClick={item => console.log(item)}
    hasItemError={item => item === 'Item1'}
    onAdd={() =>
      setState({ value: [...state.value, `Item${state.value.length + 1}`] })
    }
  />
</div>;
```
