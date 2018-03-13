```jsx
initialState = {
  value: ['Item1', 'Item2', 'Item3', 'Item4'],
};

<div style={{ width: 300, margin: '0 auto' }}>
  <ListField
    value={state.value}
    onChange={value => setState({ value })}
    onItemClick={index => console.log(state.value[index])}
    getItemError={item => item === 'Item1'}
    onAdd={() =>
      setState({ value: [...state.value, `Item${state.value.length + 1}`] })
    }
  />
</div>;
```
