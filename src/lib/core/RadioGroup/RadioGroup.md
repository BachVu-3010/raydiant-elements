```js
initialState = {
  value: 'no',
};

<Row inline>
  <RadioGroup
    value={state.value}
    onChange={value => setState({ value })}
    testId="radio-group"
  >
    <RadioGroup.Option value="yes" label="Yes" testId="radio-group-yes" />
    <RadioGroup.Option value="no" label="No" testId="radio-group-no" />
  </RadioGroup>
</Row>;
```

### Inline

```js
initialState = {
  value: 'no',
};

<Row inline>
  <RadioGroup
    inline
    value={state.value}
    onChange={value => setState({ value })}
  >
    <RadioGroup.Option value="yes" label="Yes" />
    <RadioGroup.Option value="no" label="No" />
  </RadioGroup>
</Row>;
```
