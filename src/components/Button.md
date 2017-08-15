### Text

```jsx
const Checkbox = require('./Checkbox').default;
initialState = {disabled: false};
const toggleDisable = (e) => { setState({disabled: !state.disabled}); };
const buttons = ['default', 'primary', 'destructive', 'progress'].map(
  b => 
  <span key={b} style={{margin: "0 5px", display: "inline-block"}}>
    <Button key={b} disabled={state.disabled} color={b}>{`${b.charAt(0).toUpperCase()}${b.slice(1)}`}</Button>
  </span>
);
<div>
  <div>{buttons}</div>
  <div><Checkbox onChange={toggleDisable} checked={state.disabled}>Disable buttons</Checkbox></div>
</div>
```

### Text and Icons

### Icons
