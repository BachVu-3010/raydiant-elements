```jsx
initialState = {
  count: 8,
};

const Content = () => (
  <div
    style={{
      background: '#000',
      width: 192 / (state.shrink ? 1.5 : 1),
      height: 108 / (state.shrink ? 1.5 : 1),
    }}
  />
);

<App>
  <Column>
    <Row>
      <Button
        label="Add"
        onClick={() => setState({ count: state.count + 1 })}
      />
      <Button
        label="Remove"
        onClick={() => setState({ count: Math.max(state.count - 1, 0) })}
      />
      <Button
        label="Toggle Size"
        onClick={() => setState({ shrink: !state.shrink })}
      />
    </Row>
    <Grid>
      {Array.from(new Array(state.count), (_, i) => (
        <Grid.Item key={i}>
          <Content />
        </Grid.Item>
      ))}
    </Grid>
  </Column>
</App>;
```
