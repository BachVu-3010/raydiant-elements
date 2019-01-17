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
