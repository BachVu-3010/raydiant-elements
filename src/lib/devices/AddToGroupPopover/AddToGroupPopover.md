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
<Row inline>
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
</Row>;
```
