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
};
<Row inline>
  <Popover.Anchor>
    <Button label="Open" onClick={() => setState({ open1: true })} />
    <AffectedScreensPopover
      devices={state.devices}
      open={state.open1}
      onClose={() => setState({ open1: false })}
    />
  </Popover.Anchor>

  <Popover.Anchor>
    <Button
      color="destructive"
      label="Delete"
      onClick={() => setState({ open2: true })}
    />
    <AffectedScreensPopover
      isDeleting
      devices={state.devices}
      open={state.open2}
      onClose={() => setState({ open2: false })}
    />
  </Popover.Anchor>
</Row>;
```
