```js
initialState = {
  checked: false,
  disabled: false,
};

<Column>
  <Row inline>
    <Switch disabled={state.disabled} checked={state.checked} onChange={checked => setState({ checked })} />
    <Switch 
      disabled={state.disabled}
      checked={state.checked}
      onChange={checked => setState({ checked })}
      label="Label"
    />
    <Switch 
      disabled={state.disabled}
      checked={state.checked}
      onChange={checked => setState({ checked })}
      label="Helper Text" 
      helperText="Helper Text"
    />
    <Switch 
      disabled={state.disabled}
      checked={state.checked}
      onChange={checked => setState({ checked })}
      label="Helper Link"
      helperText={<a href="www.lvh.me" target="_blank" >Helper Link</a>}
    />
  </Row>
  <Switch
    label='Disable'
    checked={state.disabled}
    onChange={disabled => setState({ disabled })}
  />
</Column>
```
