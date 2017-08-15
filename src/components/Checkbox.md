Static:
```jsx
<div>
  <h2>Choose some things horizontal style</h2>
  <Checkbox checked>I'm checked</Checkbox>
  <Checkbox checked={true}><em>I'm</em> checked too</Checkbox>
  <Checkbox checked={false}>I'm not checked</Checkbox>
  <Checkbox><em>I'm</em> not checked either</Checkbox>
</div>
```
```jsx
<div>
  <h2>Choose some things vertical style</h2>
  <div><Checkbox checked>I'm checked</Checkbox></div>
  <div><Checkbox checked={true}><em>I'm</em> checked too</Checkbox></div>
  <div><Checkbox checked={false}>I'm not checked</Checkbox></div>
  <div><Checkbox><em>I'm</em> not checked either</Checkbox></div>
</div>
```

Toggle:
```
initialState = {checked: true};
<Checkbox
  checked={state.checked}
  onChange={ () => {setState({checked: !state.checked});} }>
  Toggle me
</Checkbox>
```

Disabled:
```
<Checkbox checked disabled>Clicking on me won't do anything</Checkbox>
```

Narrow:
```
<div style={{maxWidth: '300px', border: '1px dashed #999'}}>
  <Checkbox checked>Here's a fairly long label in a space that's not very wide.</Checkbox>
</div>
```