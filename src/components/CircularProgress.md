```jsx
<Row>
  <Column>
    <CircularProgress />
    <CircularProgress color="progress" size={30} />
    <CircularProgress color="destructive" size={20} />
  </Column>
  <Column>
    <CircularProgress mode="determinate" value={25} min={0} max={100} />
    <CircularProgress color="progress" size={30} mode="determinate" value={50} />
    <CircularProgress color="destructive" size={20} mode="determinate" value={75} />
  </Column>
</Row>
```