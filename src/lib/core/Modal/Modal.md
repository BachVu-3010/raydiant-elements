```js
initialState = {
  open: false,
};

const Content = ({ children }) => (
  <div style={{ padding: '16px' }}>{children}</div>
);

<App>
  <Row>
    <Button label="Open" onClick={() => setState({ open: true })} />
  </Row>
  <Modal open={state.open} onOverlayClick={() => setState({ open: false })}>
    <Content>
      <Button
        color="primary"
        label="Close"
        onClick={() => setState({ open: false })}
      />
    </Content>
  </Modal>
</App>;
```
