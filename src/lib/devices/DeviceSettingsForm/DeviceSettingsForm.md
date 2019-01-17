```js
const [device] = require('../../devices/deviceData').devices;

<App>
  <DeviceSettingsForm onSubmit={console.log} device={device} />
</App>;
```
