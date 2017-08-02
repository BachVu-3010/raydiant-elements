Static:
```
<div>
  <Radio checked>I'm checked</Radio>
  <Radio checked={true}>I'm checked too</Radio>
  <Radio checked={false}>I'm not checked</Radio>
  <Radio>I'm not checked either</Radio>
</div>
```

Toggle:
```
initialState = {selected: "1"};
const onChange = (e) => { setState({selected: e.target.value}); };
<div>
  <Radio value="1" checked={state.selected === "1"} name="toggle" onChange={onChange}>Option 1</Radio>
  <Radio value="2" checked={state.selected === "2"} name="toggle" onChange={onChange}>Option 2</Radio>
</div>
```

Disabled:
```
<Radio checked disabled>Clicking on me won't do anything</Radio>
```