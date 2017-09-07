## Alignment
```jsx
<div>
  <div>
    <span>Check the baseline alignment: </span>
    <Radio checked>Radio</Radio>
  </div>
  <div style={{marginTop: '10px'}}>
    <div>Check the left alignment: </div>
    <Radio checked>Radio</Radio>
  </div>
</div>
```

## In a row
```jsx
<Row>
  <Radio checked>I'm checked</Radio>
  <Radio checked={true}><em>I'm</em> checked too</Radio>
  <Radio checked={false}>I'm not checked</Radio>
  <Radio><em>I'm</em> not checked either</Radio>
</Row>
```

## In a column
```jsx
<Column>
  <Radio checked>I'm checked</Radio>
  <Radio checked={true}><em>I'm</em> checked too</Radio>
  <Radio checked={false}>I'm not checked</Radio>
  <Radio><em>I'm</em> not checked either</Radio>
</Column>
```

## Toggle
```jsx
initialState = {selected: "1"};
const onChange = (e) => { setState({selected: e.target.value}); };
<Row>
  <Radio value="1" checked={state.selected === "1"} name="toggle" onChange={onChange}>Option 1</Radio>
  <Radio value="2" checked={state.selected === "2"} name="toggle" onChange={onChange}>Option 2</Radio>
</Row>
```

## Disabled
```jsx
<Radio checked disabled>Clicking on me won't do anything</Radio>
```

## Narrow
```jsx
<div style={{maxWidth: '300px', border: '1px dashed #999'}}>
  <Radio checked>Here's a fairly long label in a space that's not very wide.</Radio>
</div>
```
