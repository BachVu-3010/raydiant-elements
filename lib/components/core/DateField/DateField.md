```js
initialState = {
  date: null,
};

<>
  <DateField
    label="Date"
    value={state.date}
    onChange={date => setState({ date })}
  />
  <DateField
    label="Range"
    value={state.date}
    minDate={new Date()}
    maxDate={new Date(+new Date() + 1000 * 60 * 60 * 24 * 7)}
    onChange={date => setState({ date })}
    helperText="Pick a date within this week"
  />
  <DateField
    label="Date"
    value={state.date}
    onChange={date => setState({ date })}
    error
    helperText="Oops! Invalid date."
  />
  <DateField
    label="Disabled"
    value={state.date}
    onChange={date => setState({ date })}
    disabled
  />
</>;
```
