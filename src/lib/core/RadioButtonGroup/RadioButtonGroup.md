```js
const daysOfWeek = {
  SU: 'Sun',
  MO: 'Mon',
  TU: 'Tue',
  WE: 'Wed',
  TH: 'Thu',
  FR: 'Fri',
  SA: 'Sat',
};

<Row inline>
  <RadioButtonGroup name="day" onChange={console.log}>
    {Object.entries(daysOfWeek).map(([value, label]) => (
      <RadioButtonGroup.Option key={value} value={value}>
        {label}
      </RadioButtonGroup.Option>
    ))}
  </RadioButtonGroup>
</Row>;
```
