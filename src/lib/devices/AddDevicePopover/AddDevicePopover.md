```js
<App>
  <Row>
    <Spacer />
    <Popover.Anchor>
      <Button onClick={() => setState({ open: true })} label="Open" />
      <AddDevicePopover
        headingText="Activate a new screen"
        open={state.open}
        onOverlayClick={() => setState({ open: false })}
        onRegister={console.log}
      />
    </Popover.Anchor>
    <Spacer />
  </Row>
</App>
```
