## Pick a date

```jsx
initialState = { startDate: null, endDate: '2020-02-02' };
<Row justifyContent="stretch">
  <div style={{ flex: 1 }}>
    <DatePicker
      label="Start Date"
      helperText={`value: ${state.startDate}`}
      id="dp-start"
      value={state.startDate}
      onDateChange={d => setState({ startDate: d })}
    />
  </div>
  <div style={{ flex: 1 }}>
    <DatePicker
      label="End Date"
      helperText={`value: ${state.endDate}`}
      id="dp-end"
      value={state.endDate}
      onDateChange={d => setState({ endDate: d })}
      popupPlacement="bottom-end"
    />
  </div>
</Row>;
```

## Limited to today ± 1 week

```jsx
const now = new Date();
const offsetByDays = (date, offset) => {
  const retval = new Date(date);
  retval.setDate(date.getDate() + offset);
  return retval;
};
const oneWeekFuture = offsetByDays(now, 7);
const oneWeekPast = offsetByDays(now, -7);
initialState = {
  date: `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`,
};
<Row justifyContent="stretch">
  <div style={{ flex: 1 }}>
    <DatePicker
      label="Pick a date"
      helperText={`value: ${state.date}`}
      minDate={oneWeekPast}
      maxDate={oneWeekFuture}
      id="dp-ranged"
      value={state.startDate}
      onDateChange={d => setState({ date: d })}
    />
  </div>
</Row>;
```
