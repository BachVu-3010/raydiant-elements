```js
const presentation = {
  name: 'Holiday Party',
  applicationName: 'Flyers',
};

<App>
  <div style={{ display: 'flex', height: 800 }}>
    <ScreenPreview
      name="Front Lobby"
      orientation="normal"
      presentation={presentation}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          background: '#333',
          color: '#fff',
          fontSize: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Screen Preview
      </div>
    </ScreenPreview>
  </div>
</App>;
```
