```jsx
initialState = {
  countries: ['US', 'CA'],
  cities: ['NY'],
};

const countries = [
  { name: 'Australia', code: 'AU' },
  { name: 'Canada', code: 'CA' },
  { name: 'China', code: 'CN' },
  { name: 'Mexico', code: 'MX' },
  {
    name:
      'Some reeeeeaallly really reaaaalllllly  reeeeeaallly really reaaaalllllly  long country name',
    code: 'long',
  },
  { name: 'Sweden', code: 'SE' },
  { name: 'United States', code: 'US' },
];

const cities = [
  { name: 'New York', code: 'NY' },
  { name: 'Washington', code: 'WA' },
  { name: 'California', code: 'CA' },
];

<App>
  <Column>
    {!state.destroy && (
      <Row>
        <MultiSelectField
          label="Cities"
          value={state.cities}
          onChange={cities => setState({ cities })}
        >
          {cities.map(c => (
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
    {!state.destroy && (
      <Row>
        <MultiSelectField
          label="Countries with search"
          searchable
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
          label="disabled with search"
          searchable
          disabled
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
