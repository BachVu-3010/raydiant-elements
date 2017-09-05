##  Single line

```jsx
initialState = {
  city: "San Francisco",
  zip: "",
  password: '',
  verifyPassword: '',
  passwordError: false
};
const onChange = (e) => {
  setState({[e.target.name]: e.target.value});
};
const onZipChange = (e) => {
  const value = e.target.value;
  if (value.length > 5 || !/^\d*$/.test(value)) {
    return;
  }
  onChange(e);
}
const onPassChange = (e) =>  {
  onChange(e);
  const stateNow = {...({password, verifyPassword} = state)};
  stateNow[e.target.name] = e.target.value;
  setState({passwordError: stateNow.password !== stateNow.verifyPassword});
};
const PASSWORD_ERROR = `The "Password" and "Verify Password" fields must match.`;

<Column>
  <TextField name="city" onChange={onChange} value={state.city} label="City" />
  <TextField name="zip" onChange={onZipChange} value={state.zip} placeholder="90210" label="ZIP Code" helperText="Your 5-digit ZIP code. Enter 00000 for non-U.S. addresses." />
  <TextField name="password" type="password" onChange={onPassChange} value={state.password} placeholder="Password" label="Password" error={state.passwordError} />
  <TextField name="verifyPassword" type="password" onChange={onPassChange} value={state.verifyPassword} placeholder="Password, again" label="Verify Password" error={state.passwordError} helperText={state.passwordError ? PASSWORD_ERROR : ''} />
</Column>
```

## Multiline

```jsx
initialState = {value: ""};
const onChange = (e) => {
  setState({value: e.target.value});
};
<div>
<TextField onChange={onChange} value={state.value} label="Multiline" multiline helperText="Type lots of stuff!" />
</div>
```

## States

```jsx
initialState = {error: false, alert: false, disabled: false, value: "Here's a value"};
const onChange = (e) => {
  setState({value: e.target.value});
};

<Column>
  <Row>
    <Checkbox name="error" onChange={e => setState({error: !state.error})} checked={state.error}>Error</Checkbox>
    <Checkbox name="error" onChange={e => setState({alert: !state.alert})} checked={state.alert}>Alert</Checkbox>
    <Checkbox name="disabled" onChange={e => setState({disabled: !state.disabled})} checked={state.disabled}>Disabled</Checkbox>
  </Row>
  <TextField label="Here's a label" value={state.value} onChange={onChange} error={state.alert ? 'alert' : state.error} disabled={state.disabled} />
</Column>
```

## Narrow

```jsx
const aLotOfText = area => `When you have a bunch of ${area} text in a narrow area, it ends up looking a lot like this.`;
<Column style={{width: "300px"}}>
  <TextField value="" label={aLotOfText('label')} />
  <TextField value={aLotOfText('input')} label={aLotOfText('label')} />
  <TextField value={aLotOfText('input')} label="Label" />
  <TextField value="" label="Long helperText" helperText={aLotOfText('helper')} />
  <TextField error value="" label="Long error text" helperText={aLotOfText('error')} />
</Column>
```