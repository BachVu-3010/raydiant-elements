Static:
```jsx
<div>
  <h2>Alignment</h2>
  <div>
    <span>Check the baseline alignment: </span>
    <Checkbox checked>I'm checked</Checkbox>
  </div>
  <div style={{marginTop: '10px'}}>
    <div>Check the left alignment: </div>
    <Checkbox checked>I'm checked</Checkbox>
  </div>
</div>
```
```jsx
<div>
  <h2>Choose some things horizontal style</h2>
  <Row flush>
    <Checkbox checked>I'm checked</Checkbox>
    <Checkbox checked={true}><em>I'm</em> checked too</Checkbox>
    <Checkbox checked={false}>I'm not checked</Checkbox>
    <Checkbox><em>I'm</em> not checked either</Checkbox>
  </Row>
</div>
```
```jsx
<Column>
  <h2>Choose some things vertical style</h2>
  <Checkbox checked>I'm checked</Checkbox>
  <Checkbox checked={true}><em>I'm</em> checked too</Checkbox>
  <Checkbox checked={false}>I'm not checked</Checkbox>
  <Checkbox><em>I'm</em> not checked either</Checkbox>
</Column>
```

Toggle:
```
initialState = {checked: true};
<Checkbox
  checked={state.checked}
  onChange={ () => { setState({checked: !state.checked}); } }>
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
  <Checkbox checked>Here's a fairly long label in a space that's not very wide. I sure hope this works out.</Checkbox>
</div>
```

Round:
```
initialState = {checked: true};
<Checkbox
  checked={state.checked}
  onChange={ () => { setState({checked: !state.checked}); } }
/>
```