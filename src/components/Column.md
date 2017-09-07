## Sizes
```jsx
initialState = { size: 'content' };
const sizes = [
  'content',
  'dynamic'
];
<Column>
  <Row>
    <Radio name="size" value="content" checked={state.size === 'content'} onChange={() => setState({size: 'content'})}>content</Radio>
    <Radio name="size" value="dynamic" checked={state.size === 'dynamic'} onChange={() => setState({size: 'dynamic'})}>dynamic</Radio>
  </Row>
  <div style={{display: 'inline-block', maxWidth: '200px', border: '1px dashed #aa0000'}}>
    <Column size={state.size}>
      <div style={{padding: '5px', background: 'rgba(0,0,0,0.2)'}}>First item</div>
      <div style={{padding: '5px', background: 'rgba(0,0,0,0.2)'}}>Second item</div>
      <div style={{padding: '5px', background: 'rgba(0,0,0,0.2)'}}>Third item</div>
    </Column>
  </div>
</Column>
```

## Justify Content 
```jsx
const flexValues = [
  'center',
  'flex-start',
  'flex-end',
  'space-between',
  'space-around',
  'space-evenly',
];

const columns = flexValues.map((a) =>
  <Column key={a} style={{background: '#ddd', border: '1px solid #999', height: '180px'}} size="dynamic" justifyContent={a}>
    <div>{a}</div>
    <div>Child</div>
    <div>Child</div>
  </Column>
);
<Row>{columns}</Row>
```
## Align Items
```jsx
const flexValues = [
  'center',
  'flex-start',
  'flex-end',
  'stretch',
];

const columns = flexValues.map((a) =>
  <div key={a} style={{background: '#ddd', border: '1px solid #999'}}>
    <Column alignItems={a} justifyContent="center" size="dynamic">
      <div style={{color: 'black', backgroundColor: 'white', padding: '5px'}}>{a}</div>
      <div style={{backgroundColor: 'white', padding: '10px'}}>Child 2</div>
      <div style={{backgroundColor: 'white', padding: '20px'}}>Child 3</div>
    </Column>
  </div>
);
<Row>{columns}</Row>
```