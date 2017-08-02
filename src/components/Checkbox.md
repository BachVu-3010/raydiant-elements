Static:
```
<div>
  <Checkbox checked>I'm checked</Checkbox>
  <Checkbox checked={true}>I'm checked too</Checkbox>
  <Checkbox checked={false}>I'm not checked</Checkbox>
  <Checkbox>I'm not checked either</Checkbox>
</div>
```

Toggle:
```
initialState = {checked: true};
<Checkbox checked={state.checked} onChange={ () => {setState({checked: !state.checked});} }>Toggle me</Checkbox>
```

Disabled:
```
<Checkbox checked disabled>Clicking on me won't do anything</Checkbox>
```