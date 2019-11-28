```js
const devices = require('../deviceData').devices;
const playlists = require('../deviceData').playlists;

initialState = {
  devices,
  playlists,
};

<App>
  <DeviceList color="light">
    {devices.map(d => {
      return (
        <DeviceList.Device
          key={d.id}
          device={d}
          playlists={playlists}
          wifiStrength={d.wifiStrength}
          isEthernet={d.isEthernet}
          needsPublish={d.needsPublish}
          onPlaylistSelect={playlistId =>
            console.log('select playlist', playlistId)
          }
          onPlaylistEdit={playlistId =>
            console.log('edit playlist', playlistId)
          }
          onPlaylistEdit={() => console.log('create playlist')}
          onPublish={() => console.log('publish')}
        />
      );
    })}
  </DeviceList>
</App>;
```
