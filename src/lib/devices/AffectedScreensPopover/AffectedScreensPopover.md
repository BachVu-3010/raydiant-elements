```js
initialState = {
  devices: [
    { id: 'a', name: 'Screen A' },
    { id: 'b', name: 'Screen B' },
    { id: 'c', name: 'Screen C' },
    { id: 'd', name: 'Screen D' },
    { id: 'e', name: 'Screen E' },
    { id: 'f', name: 'Screen F' },
    { id: 'g', name: 'Screen G' },
    { id: 'h', name: 'Screen H' },
  ],
  open: false,
};
<Row inline>
  <Popover.Anchor>
    <Button onClick={() => setState({ open: true })} label="open" />
    <AffectedScreensPopover
      devices={state.devices}
      open={state.open}
      onClose={() => setState({ open: false })}
    />
  </Popover.Anchor>
</Row>;
```
