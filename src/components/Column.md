## Justify Content 
```jsx
const Row = require('./Row').default;
const flexValues = [
  'center',
  'flex-start',
  'flex-end',
  'space-between',
  'space-around',
  'space-evenly',
];

const columns = flexValues.map((a) =>
  <Column key={a} justifyContent={a} style={{height: '180px', background: '#ddd', border: '1px solid #999'}}>
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
  <Column key={a} alignItems={a} justifyContent="center" style={{height: '180px', background: '#ddd', border: '1px solid #999'}}>
    <div style={{color: 'black', backgroundColor: 'white', padding: '5px'}}>{a}</div>
    <div style={{backgroundColor: 'white', padding: '10px'}}>Child 2</div>
    <div style={{backgroundColor: 'white', padding: '20px'}}>Child 3</div>
  </Column>
);
<Row>{columns}</Row>
```