```js
const [deviceGroup] = require('../../devices/deviceData').deviceGroups;

<App>
  <DeviceGroupSettingsForm onSubmit={console.log} deviceGroup={deviceGroup} />
</App>;
```
