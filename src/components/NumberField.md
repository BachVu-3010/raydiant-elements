```jsx
initialState = {
  count: 0
};
const onChange = (e) => {
  setState({[e.target.name]: parseInt(e.target.value, 10)});
};

<Column>
  <NumberField name="count" onChange={onChange} value={state.count} min={0} max={10} label="Count" />
</Column>
```