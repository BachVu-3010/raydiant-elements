## Child spacing and alignment
```jsx
<Row color="global" size="dynamic-padded-dense">
  <span style={{background: 'rgba(255,255,255,0.3)'}}>first<br/>item</span>
  <span style={{
    padding: '16px',
    display: 'inline-block',
    background: 'rgba(255,255,255,0.3)'}}>second (padded)</span>
  <span style={{background: 'rgba(255,255,255,0.3)'}}>third</span>
</Row>
```

## Colors
```jsx
const rows = ['default', 'global', 'primary', 'management'].map((c, i) =>
  <div key={c}><Row color={c} border="all" alignItems="center" justifyContent="space-between" size="dynamic-padded-dense"><span>{c}</span><Button>Button</Button></Row></div>
);
<Column>{rows}</Column>
```

## Sizes
```jsx
const rows = [
  'content',
  'tall',
  'tall-wide',
  'dynamic',
  'dynamic-padded',
  'dynamic-padded-dense',
].map((s, i) =>
  <Row key={s} size={s} color={s === 'content' ? 'default' : 'global'} borderRadius="all"><span>{s}</span></Row>
);
<Column>{rows}</Column>
```

## Borders
```jsx
const rows = ['none', 'top', 'bottom', 'all'].map((b, i) =>
  <Row key={b} border={b} size="dynamic-padded-dense"><span>{b}</span></Row>
);
<Column>{rows}</Column>
```

## Border radius
```jsx
const rows = ['none', 'top', 'bottom', 'all'].map((br, i) =>
  <Row key={br} color="global" borderRadius={br} size="dynamic-padded-dense"><span>{br}</span></Row>
);
<Column>{rows}</Column>
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
<Column>{rows}</Column>
```
## Align Items
```jsx
const flexValues = [
  'center',
  'flex-start',
  'flex-end',
  'stretch',
];

const rows = flexValues.map((a) =>
  <Row key={a} color="global" alignItems={a} justifyContent="center" border="all" size="dynamic-padded-dense">
    <div style={{color: 'black', backgroundColor: 'white', padding: '5px'}}>{a}</div>
    <div style={{color: 'black', backgroundColor: 'white', padding: '10px'}}>Child 2</div>
    <div style={{color: 'black', backgroundColor: 'white', padding: '20px'}}>Child 3</div>
  </Row>
);
<Column>{rows}</Column>
```
