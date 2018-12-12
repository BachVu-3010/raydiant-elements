```jsx
initialState = {
  countries: ['US', 'CA'],
};
const onChange = e => {
  setState({ [e.target.name]: e.target.value });
};

const countries = [
  { name: 'Australia', code: 'AU' },
  { name: 'Canada', code: 'CA' },
  { name: 'China', code: 'CN' },
  { name: 'Mexico', code: 'MX' },
  { name: 'Sweden', code: 'SE' },
  { name: 'United States', code: 'US' },
];

<App>
  <Column>
    {!state.destroy && (
      <Row>
        <MultiSelectField
          label="Countries"
          value={state.countries}
          onChange={countries => setState({ countries })}
        >
          {countries.map(c => (
            <MultiSelectField.Option
              key={c.code}
              value={c.code}
              label={c.name}
            />
          ))}
        </MultiSelectField>
        <MultiSelectField
          label="Countries"
          value={state.countries}
          helperText="Here is some helper text"
          onChange={countries => setState({ countries })}
        >
          {countries.map(c => (
            <MultiSelectField.Option
              key={c.code}
              value={c.code}
              label={c.name}
            />
          ))}
        </MultiSelectField>
        <MultiSelectField
          label="Countries"
          value={state.countries}
          helperText="Oops! An error occurred"
          error
          onChange={countries => setState({ countries })}
        >
          {countries.map(c => (
            <MultiSelectField.Option
              key={c.code}
              value={c.code}
              label={c.name}
            />
          ))}
        </MultiSelectField>
        <MultiSelectField
          label="Countries"
          value={state.countries}
          disabled
          onChange={countries => setState({ countries })}
        >
          {countries.map(c => (
            <MultiSelectField.Option
              key={c.code}
              value={c.code}
              label={c.name}
            />
          ))}
        </MultiSelectField>
      </Row>
    )}
    <Row>
      <Button
        label="Re-mount"
        onClick={() => {
          setState({ destroy: true });
          setTimeout(() => setState({ destroy: false }));
        }}
      />
    </Row>
  </Column>
</App>;
```
