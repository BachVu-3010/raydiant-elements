```jsx
initialState = {
  countries: ['US', 'CA'],
  countriesWithPopulation: ['US', 'CA'],
  cities: ['NY'],
  selectedOptionValue: '',
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

const countriesWithPopulation = [
  { name: 'Australia', code: 'AU', population: 'Unknown' },
  { name: 'Canada', code: 'CA', population: '37.59M' },
  { name: 'China', code: 'CN', population: '1398M' },
  { name: 'Mexico', code: 'MX', population: '127.6M' },
  { name: 'Sweden', code: 'SE', population: '10.23M' },
  { name: 'United States', code: 'US', population: '328.2M' },
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
    {!state.destroy && (
      <Row>
        <MultiSelectField
          label="Countries with search"
          searchable
          value={state.countries}
          onChange={countries => setState({ countries })}
          sortable={[
            { label: 'Default', by: 'default' }, 
            { label: 'Name', by: 'label' }, 
          ]}
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
          sortable={[
            { label: 'Default', by: 'default' }, 
            { label: 'Name', by: 'label' }, 
          ]}
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
          label="Countries without sortable"
          searchable
          value={state.countriesWithPopulation}
          onChange={countriesWithPopulation => setState({ countriesWithPopulation })}
        >
          {countriesWithPopulation.map(c => (
            <MultiSelectField.Option
              key={c.code}
              value={c.code}
              label={c.name}
              rightLabel={c.population}
            />
          ))}
        </MultiSelectField>
        <MultiSelectField
          label="Countries with population"
          searchable
          value={state.countriesWithPopulation}
          onChange={countriesWithPopulation => setState({ countriesWithPopulation })}
          sortable={[
            { label: 'Default', by: 'default' }, 
            { label: 'Name', by: 'label' }, 
            { label: 'Population', by: 'rightLabel' }, 
          ]}
        >
          {countriesWithPopulation.map(c => (
            <MultiSelectField.Option
              key={c.code}
              value={c.code}
              label={c.name}
              rightLabel={c.population}
            />
          ))}
        </MultiSelectField>
        <MultiSelectField
          label="Countries with numeric population"
          searchable
          value={state.countriesWithPopulation}
          onChange={countriesWithPopulation => setState({ countriesWithPopulation })}
          sortable={[
            { label: 'Default', by: 'default' }, 
            { label: 'Name', by: 'label' }, 
            { label: 'Population', by: 'rightLabel', type: 'number' }, 
          ]}
        >
          {countriesWithPopulation.map(c => (
            <MultiSelectField.Option
              key={c.code}
              value={c.code}
              label={c.name}
              rightLabel={c.population}
            />
          ))}
        </MultiSelectField>
      </Row>
    )}
    {!state.destroy && (
      <Row>
        <MultiSelectField
          label="Sort Option Position"
          searchable
          value={state.countriesWithPopulation}
          onChange={countriesWithPopulation => setState({ countriesWithPopulation })}
          sortable={[
            { label: 'Name', by: 'label' }, 
            { label: 'Population', by: 'rightLabel' }, 
            { label: 'Default', by: 'default' }, 
          ]}
        >
          {countriesWithPopulation.map(c => (
            <MultiSelectField.Option
              key={c.code}
              value={c.code}
              label={c.name}
              rightLabel={c.population}
            />
          ))}
        </MultiSelectField>
        <MultiSelectField
          label="Sort Default Direction"
          searchable
          value={state.countriesWithPopulation}
          onChange={countriesWithPopulation => setState({ countriesWithPopulation })}
          sortable={[
            { label: 'Desc Default', by: 'default', defaultDirection: 'desc' }, 
            { label: 'Asc Name', by: 'label', }, 
            { label: 'Desc Population', by: 'rightLabel', type: 'number', defaultDirection: 'desc' }, 
          ]}
        >
          {countriesWithPopulation.map(c => (
            <MultiSelectField.Option
              key={c.code}
              value={c.code}
              label={c.name}
              rightLabel={c.population}
            />
          ))}
        </MultiSelectField>
        <MultiSelectField
          label="Two sort options for one field"
          searchable
          value={state.countriesWithPopulation}
          onChange={countriesWithPopulation => setState({ countriesWithPopulation })}
          sortable={[
            { label: 'Default', by: 'default' }, 
            { label: 'Name', by: 'label' }, 
            { label: 'Population', by: 'rightLabel' }, 
            { label: 'Numeric Population', by: 'rightLabel', type: 'number' }, 
          ]}
        >
          {countriesWithPopulation.map(c => (
            <MultiSelectField.Option
              key={c.code}
              value={c.code}
              label={c.name}
              rightLabel={c.population}
            />
          ))}
        </MultiSelectField>
      </Row>
    )}
    {!state.destroy && (
      <Row>
        <MultiSelectField
          label="Countries with Selected State"
          searchable
          value={state.countriesWithPopulation}
          onChange={countriesWithPopulation => setState({ countriesWithPopulation })}
          sorting={{
            default: { name: 'Default' },
            label: { name: 'Name' },
            rightLabel: { name: 'Population', isNumeric: true }
          }}
        >
          {countriesWithPopulation.map(c => (
            <MultiSelectField.Option
              key={c.code}
              value={c.code}
              label={c.name}
              rightLabel={c.population}
              selected={c.code === state.selectedOptionValue}
              onSelect={(option) => {
                setState({ selectedOptionValue: option.value });
              }}
            />
          ))}
        </MultiSelectField>
        <MultiSelectField
          label="Selected State & Disabled"
          searchable
          disabled
          value={state.countriesWithPopulation}
          onChange={countriesWithPopulation => setState({ countriesWithPopulation })}
          sorting={{
            default: { name: 'Default' },
            label: { name: 'Name' },
            rightLabel: { name: 'Population', isNumeric: true }
          }}
        >
          {countriesWithPopulation.map(c => (
            <MultiSelectField.Option
              key={c.code}
              value={c.code}
              label={c.name}
              rightLabel={c.population}
              selected={c.code === state.selectedOptionValue}
              onSelect={(option) => {
                setState({ selectedOptionValue: option.value });
              }}
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
