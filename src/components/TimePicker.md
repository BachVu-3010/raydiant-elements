## Pick a time

```jsx
initialState = {startTime: '00:00', endTime: '00:30'};
const onChangeFn = field => e => { setState({[field]: e.target.value}) };
<Column>
  <TimePicker
    label="Start Time"
    value={state.startTime}
    onTimeChange={time => setState({startTime: time})}
    helperText={state.startTime} />
  <TimePicker
    label="End Time"
    value={state.endTime}
    onTimeChange={time => setState({endTime: time})}
    helperText={state.endTime} />
</Column>
```