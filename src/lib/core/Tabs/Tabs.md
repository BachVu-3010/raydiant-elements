```js
initialState = {
  selected: 1,
};

<Tabs>
  <Tabs.Item
    label="Tab 1"
    active={state.selected === 1}
    onClick={() => setState({ selected: 1 })}
  />
  <Tabs.Item
    label="Tab 2"
    active={state.selected === 2}
    onClick={() => setState({ selected: 2 })}
  />
  <Tabs.Item
    label="Tab 3"
    active={state.selected === 3}
    onClick={() => setState({ selected: 3 })}
  />
</Tabs>;
```

### Icons

```js
initialState = {
  selected: 1,
};

<Tabs>
  <Tabs.Item
    icon="defaultContent"
    label="Default Content"
    active={state.selected === 1}
    onClick={() => setState({ selected: 1 })}
  />
  <Tabs.Item
    icon="scheduledContent"
    label="Scheduled Content"
    active={state.selected === 2}
    onClick={() => setState({ selected: 2 })}
  />
  <Tabs.Item
    icon="screenSettings"
    label="Screen Settings"
    active={state.selected === 3}
    onClick={() => setState({ selected: 3 })}
  />
</Tabs>;
```

### Shrink

```js
initialState = {
  selected: 1,
};

<Tabs>
  <Tabs.Item
    shrink
    icon="horizontalScreen"
    label="Horizontal"
    active={state.selected === 1}
    onClick={() => setState({ selected: 1 })}
  />
  <Tabs.Item
    shrink
    icon="verticalScreen"
    label="Vertical"
    active={state.selected === 2}
    onClick={() => setState({ selected: 2 })}
  />
</Tabs>;
```

### With scrollable contents using `Tabs.Content`

```js
<div
  style={{ display: 'flex', flexDirection: 'column', height: 400, width: 300 }}
>
  <Tabs>
    <Tabs.Item label="Tab 1" active />
  </Tabs>
  <Tabs.Content>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id
    tortor a risus scelerisque hendrerit sit amet eget mi. Fusce ac erat dolor.
    Cras et massa at enim laoreet iaculis vitae vitae tellus. Vestibulum
    pulvinar ornare eros. Vivamus venenatis ut est maximus varius. Aliquam et
    eleifend arcu. Etiam ut enim id turpis egestas tristique. Cras interdum
    tellus non mi porta, quis facilisis neque viverra. Maecenas quis sodales
    nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada
    fames ac turpis egestas. Integer tincidunt urna imperdiet ex feugiat, vitae
    maximus sem dignissim. Praesent vitae interdum libero. Praesent vulputate
    condimentum elit sed mattis. Integer gravida massa vel justo aliquam
    vehicula. Donec ullamcorper ut mi id sodales. Sed eu lectus elementum,
    egestas massa eu, sodales massa. Morbi lacinia dignissim est. In sit amet
    tortor enim. Donec in mi velit. Etiam auctor quam elit, non gravida tortor
    varius vel. Sed pretium turpis nec magna luctus accumsan. Nulla venenatis in
    magna in hendrerit. Quisque malesuada risus et purus tincidunt porta.
    Quisque justo purus, euismod in aliquet at, suscipit eget tellus. Sed
    porttitor.
  </Tabs.Content>
</div>
```
