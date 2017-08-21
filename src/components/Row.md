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

## Alignment
```jsx
const rows = ['left', 'right', 'center'].map((a) =>
  <Row key={a} color="global" justifyContent={a} size="dynamic-padded-dense">{a}</Row>
);
<div>{rows}</div>
```