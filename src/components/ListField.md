```jsx
initialState = {
  value: ['Item1', 'Item2', 'Item3', 'Item4'],
  selectedIndex: -1,
};

<div style={{ width: 300, margin: '0 auto' }}>
  <ListField
    label="List"
    value={state.value}
    onAdd={() =>
      setState({
        value: [...state.value, 'Item' + (state.value.length + 1)],
        selectedIndex: state.value.length,
      })
    }
    onChange={value => setState({ value })}
    onItemClick={index => setState({ selectedIndex: index })}
    onLabelClick={() => setState({ selectedIndex: -1 })}
  >
    {state.selectedIndex >= 0 && (
      <div>
        <TextField
          label="Item"
          value={state.value[state.selectedIndex]}
          helperText=" "
          onChange={evt => {
            setState({
              value: state.value.map(
                (item, index) =>
                  index === state.selectedIndex ? evt.target.value : item
              ),
            });
          }}
        />
        <Button
          color="destructive"
          fullWidth
          onClick={() =>
            setState({
              value: state.value.filter(
                (item, index) => index !== state.selectedIndex
              ),
              selectedIndex: -1,
            })
          }
        >
          Remove
        </Button>
      </div>
    )}
  </ListField>
</div>;
```
