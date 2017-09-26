```jsx
initialState = {
  country1: 'US',
  country2: 'CA',
  country3: '',
};
const onChange = (e) => {
  setState({[e.target.name]: e.target.value});
};

const countries = [
  { name: '', code: '' },
  { name: 'Australia', code: 'AU' },
  { name: 'Canada', code: 'CA' },
  { name: 'China', code: 'CN' },
  { name: 'Mexico', code: 'MX' },
  { name: 'Sweden', code: 'SE' },
  { name: 'United States', code: 'US' },
];

<Column>
  <SelectField name="country1" onChange={onChange} value={state.country1} label="Country">
    {countries.map(c =>
      <option key={c.code} value={c.code}>{c.name}</option>
    )}
  </SelectField>
  <SelectField disabled name="country2" onChange={onChange} value={state.country2} label="Country">
    {countries.map(c =>
      <option key={c.code} value={c.code}>{c.name}</option>
    )}
  </SelectField>
  <SelectField error name="country3" onChange={onChange} value={state.country3} label="Country" helperText="Select a country">
    {countries.map(c =>
      <option key={c.code} value={c.code}>{c.name}</option>
    )}
  </SelectField>
</Column>
```