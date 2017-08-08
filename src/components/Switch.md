Static:
```
<div>
  <Switch checked>I'm checked</Switch>
  <Switch checked={true}><em>I'm</em> checked too</Switch>
  <Switch checked={false}>I'm not checked</Switch>
  <Switch><em>I'm</em> not checked either</Switch>
</div>
```

Toggle:
```
initialState = {checked: true};
<Switch
  checked={state.checked}
  onChange={ () => {setState({checked: !state.checked});} }>
  Toggle me
</Switch>
```

Disabled:
```
<Switch checked disabled>Clicking on me won't do anything</Switch>
```

Narrow:
```
<div style={{maxWidth: '300px', border: '1px dashed #999'}}>
  <Switch checked>Here's a fairly long label in a space that's not very wide.</Switch>
</div>
```