```js
const devices = require('./deviceData').devices;
const deviceGroups = require('./deviceData').deviceGroups;

initialState = {
  devices,
  deviceGroups,
  isManageMode: false,
};

<App>
  <DeviceList color="light">
    {devices.map(d => {
      return (
        <DeviceList.Device
          device={d}
          isManageMode={state.isManageMode}
          key={d.id}
          onSelect={console.log}
          isSelected={false}
        />
      );
    })}
    {deviceGroups.map(dg => (
      <DeviceList.DeviceGroup
        device={dg}
        isManageMode={state.isManageMode}
        key={dg.id}
        onSelect={console.log}
        isSelected={false}
      />
    ))}
  </DeviceList>
</App>;
```
