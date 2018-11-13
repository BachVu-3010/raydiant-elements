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
    {devices.map(
      ({ id, name, isOnline, defaultSequence, deployedPresentations }) => {
        return (
          <DeviceList.Device
            device={{
              id,
              name,
              isOnline,
              defaultSequence,
              deployedPresentations,
              hasFileError: false,
              showPublish: true,
              showConnectivityStatus: true,
            }}
            isManageMode={state.isManageMode}
            key={id}
            onSelect={this.onSelect}
            isSelected={false}
          />
        );
      },
    )}
    {deviceGroups.map(
      ({ id, name, defaultSequence, deployedPresentations }) => (
        <DeviceList.DeviceGroup
          device={{
            id,
            name,
            hasFileError: false,
            showPublish: true,
            showConnectivityStatus: true,
            isOnline: true,
            defaultSequence,
            deployedPresentations,
          }}
          isManageMode={state.isManageMode}
          key={id}
          onSelect={console.log}
          isSelected={false}
        />
      ),
    )}
  </DeviceList>
</App>;
```
