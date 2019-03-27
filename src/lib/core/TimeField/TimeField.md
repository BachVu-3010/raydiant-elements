```js
initialState = {
  value: '07:00',
  value1: '08:00',
  value2: '09:00',
};
<Row inline>
  <TimeField
    label="Alarm Clock"
    value={state.value}
    onChange={value => {
      setState({
        value,
      });
    }}
  />
  <TimeField
    error
    label="Alarm Clock"
    value={state.value1}
    onChange={value1 => {
      setState({
        value1,
      });
    }}
  />
  <TimeField
    disabled
    label="Alarm Clock"
    value={state.value2}
    onChange={value2 => {
      setState({
        value2,
      });
    }}
  />
</Row>;
```
