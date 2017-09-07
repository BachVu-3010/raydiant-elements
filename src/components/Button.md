### Text

```jsx
const Checkbox = require('./Checkbox').default;
initialState = {disabled: false};
const toggleDisable = (e) => { setState({disabled: !state.disabled}); };
const buttons = ['default', 'primary', 'destructive', 'progress'].map(
  b => 
  <Button key={b} disabled={state.disabled} color={b}>{`${b.charAt(0).toUpperCase()}${b.slice(1)}`}</Button>
);
<Column>
  <Row>{buttons}</Row>
  <Row><Checkbox onChange={toggleDisable} checked={state.disabled}>Disable buttons</Checkbox></Row>
</Column>
```

### Full width

```jsx
<div style={{
  width: '300px',
  padding: '10px',
  border: '1px solid #999',
  background: 'white',
  color: '#333'}}>
  <p>A deal you can't refuse!</p>
  <Button fullWidth color="primary">Sign up now!</Button>
</div>
```

### Text and Icons

### Icons
