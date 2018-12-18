```js
initialState = {
  deviceGroup: {
    id: 'device_group_id_1',
    name: "Dale Cooper's screens",
    devices: [
      {
        id: 'device_id_1',
        name: "Dale Cooper's screen",
      },
      {
        id: 'device_id_2',
        name: "Dale Cooper's 2nd screen",
      },
    ],
  },
  open: false,
};

<App>
  <Row inline>
    <Spacer />
    <Popover.Anchor>
      <Button
        onClick={() => {
          setState({ open: true });
        }}
        label="open"
      />
      <ManageGroupPopover
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
