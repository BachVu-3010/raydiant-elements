## Child spacing and alignment
```jsx
<Row color="global" size="dynamic-padded-dense">
  <span>first</span>
  <span style={{
      padding: '8px',
      display: 'inline-block',
      background: 'rgba(255,255,255,0.3)'}}>second</span>
  <span>third</span>
</Row>
```

## Colors
```jsx
const rows = ['default', 'global', 'primary', 'management'].map((c, i) =>
  <div key={c} style={{marginTop: i === 0 ? 0 : '16px'}}>
    <Row color={c} border="all" size="dynamic-padded">{c}</Row>
  </div>
);
<div>{rows}</div>
```

## Borders
```jsx
const rows = ['none', 'top', 'bottom', 'all'].map((b, i) =>
  <div key={b} style={{marginTop: i === 0 ? 0 : '16px'}}>
    <Row border={b} size="dynamic-padded-dense">{b}</Row>
  </div>
);
<div>{rows}</div>
```

## Border radius
```jsx
const rows = ['none', 'top', 'bottom', 'all'].map((br, i) =>
  <div key={br} style={{marginTop: i === 0 ? 0 : '16px'}}>
    <Row color="global" borderRadius={br} size="dynamic-padded-dense">{br}</Row>
  </div>
);
<div>{rows}</div>
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

const rows = flexValues.map((a) =>
  <Row key={a} color="global" justifyContent={a} border="all" size="dynamic-padded-dense">
    <div>{a}</div>
    <div>Child</div>
    <div>Child</div>
  </Row>
);
<div>{rows}</div>
```
## Align Items
```jsx
const flexValues = [
  'center',
  'flex-start',
  'flex-end',
];

const rows = flexValues.map((a) =>
  <Row key={a} color="global" alignItems={a} justifyContent="center" border="all" size="dynamic-padded-dense">
    <div style={{color: 'black', backgroundColor: 'white', padding: '5px'}}>{a}</div>
    <div style={{backgroundColor: 'white', padding: '10px'}}>Child 2</div>
    <div style={{backgroundColor: 'white', padding: '20px'}}>Child 3</div>
  </Row>
);
<div>{rows}</div>
```