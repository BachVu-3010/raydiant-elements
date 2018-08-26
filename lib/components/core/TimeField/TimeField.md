```js
initialState = {
  time: '12:00 am',
};

<Row inline>
  <TimeField
    label="Time"
    value={state.time}
    onChange={time => setState({ time })}
  />
  <TimeField
    error
    label="Time"
    value={state.time}
    helperText="Oops! Invalid time"
    onChange={time => setState({ time })}
  />
  <TimeField
    disabled
    label="Disabled"
    value={state.time}
    onChange={time => setState({ time })}
  />
</Row>;
```
