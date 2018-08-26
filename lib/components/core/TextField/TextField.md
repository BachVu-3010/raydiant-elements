```js
initialState = {
  text: '',
  email: 'email@example.com',
  password: 'password',
  error: 'Error',
};

<Row inline>
  <TextField
    label="Text"
    value={state.text}
    onChange={text => setState({ text })}
  />
  <TextField
    label="Email"
    type="email"
    value={state.email}
    helperText="Please enter your email"
    onChange={email => setState({ email })}
  />
  <TextField
    label="Password"
    type="password"
    value={state.password}
    helperText="Please enter your password"
    onChange={password => setState({ password })}
  />
  <TextField
    error
    label="Error"
    value={state.error}
    helperText="Oops! This field has an invalid value"
    onChange={error => setState({ error })}
  />
</Row>;
```

### Disabled

```js
<Row inline>
  <TextField label="Text" disabled />
  <TextField
    label="Email"
    type="email"
    value="email@example.com"
    disabled
    helperText="Please enter your email"
  />
  <TextField
    label="Password"
    type="password"
    value="password"
    disabled
    helperText="Please enter your password"
  />
  <TextField
    error
    label="Error"
    value="Invalid"
    disabled
    helperText="Oops! This field has an invalid value"
  />
</Row>
```

### Masks

```js
initialState = {
  zip: '',
  phone: '',
  code: '',
};

<Row inline>
  <TextField
    label="Zip Code"
    value={state.zip}
    onChange={zip => setState({ zip })}
    mask={[/\d/, /\d/, /\d/, /\d/, /\d/]}
  />
  <TextField
    label="Phone number"
    value={state.phone}
    onChange={phone => setState({ phone })}
    mask={[/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
    maskGuide
  />
  <TextField
    label="Confirmation Code"
    value={state.code}
    mask={(value = '') => {
      const maskArray = [];
      const parts = value.split(/\-/);

      for (let i = 0; i < value.length; i += 1) {
        maskArray.push(/[a-zA-Z\-]/);
      }

      return maskArray;
    }}
    pipe={(value = '') => {
      return value.toUpperCase();
    }}
    onChange={code => setState({ code })}
  />
</Row>;
```

### Multiline

```js
initialState = {
  text: '',
};

<Row inline>
  <TextField
    multiline
    label="Text"
    value={state.text}
    onChange={text => setState({ text })}
  />
  <TextField
    multiline
    label="Text"
    value={state.text}
    helperText="Helper text (optional)"
    onChange={text => setState({ text })}
  />
  <TextField
    multiline
    error
    label="Error"
    value={state.text}
    helperText="Helper text (optional)"
    onChange={text => setState({ text })}
  />
</Row>;
```
