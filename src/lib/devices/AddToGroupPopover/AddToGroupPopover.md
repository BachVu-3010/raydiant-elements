```js
initialState = {
  selectedDeviceIds: ['DEVICE_ID_1', 'DEVICE_ID_2'],
  deviceGroups: [
    {
      id: 'DEVICE_GROUP_ID_1',
      name: "Dale Cooper's screens",
    },
  ],
  deviceToInheritContentFrom: {
    id: 'DEVICE_ID_1',
    name: "Dale Cooper's screen",
  },
  open: false,
};
<App>
  <Row>
    <Spacer />
    <Popover.Anchor>
      <Button
        onClick={() => {
          setState({ open: true });
        }}
        label="open"
      />
      <AddToGroupPopover
        {...state}
        onOverlayClick={() => {
          setState({ open: false });
        }}
      />
    </Popover.Anchor>
    <Spacer />
  </Row>
</App>;
```
