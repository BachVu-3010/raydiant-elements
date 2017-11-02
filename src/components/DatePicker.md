## Pick a date
```jsx
initialState = {startDate: null, endDate: '2020-02-02'};
const onChangeFn = field => e => { setState({[field]: e.target.value}) };
<Row justifyContent="stretch">
  <div style={{flex: 1}}>
    <DatePicker
      label="Start Date"
      helperText={`value: ${state.startDate}`}
      id="dp-start"
      value={state.startDate}
      onDateChange={d => setState({startDate: d})} />
  </div>
  <div style={{flex: 1}}>
    <DatePicker
      label="End Date"
      helperText={`value: ${state.endDate}`}
      id="dp-end"
      value={state.endDate}
      onDateChange={d => setState({endDate: d})}
      popupPlacement="bottom-end" />
  </div>
</Row>
```