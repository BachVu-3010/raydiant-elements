```js
initialState = {
  selected: 1,
};

<Tab.Container>
  <Tab
    label="Tab 1"
    active={state.selected === 1}
    onClick={() => setState({ selected: 1 })}
  />
  <Tab
    label="Tab 2"
    active={state.selected === 2}
    onClick={() => setState({ selected: 2 })}
  />
  <Tab
    label="Tab 3"
    active={state.selected === 3}
    onClick={() => setState({ selected: 3 })}
  />
</Tab.Container>;
```

### Icons

```js
initialState = {
  selected: 1,
};

<Tab.Container>
  <Tab
    icon="defaultContent"
    label="Default Content"
    active={state.selected === 1}
    onClick={() => setState({ selected: 1 })}
  />
  <Tab
    icon="scheduledContent"
    label="Scheduled Content"
    active={state.selected === 2}
    onClick={() => setState({ selected: 2 })}
  />
  <Tab
    icon="screenSettings"
    label="Screen Settings"
    active={state.selected === 3}
    onClick={() => setState({ selected: 3 })}
  />
</Tab.Container>;
```

### Shrink

```js
initialState = {
  selected: 1,
};

<Tab.Container>
  <Tab
    shrink
    icon="horizontalScreen"
    label="Horizontal"
    active={state.selected === 1}
    onClick={() => setState({ selected: 1 })}
  />
  <Tab
    shrink
    icon="verticalScreen"
    label="Vertical"
    active={state.selected === 2}
    onClick={() => setState({ selected: 2 })}
  />
</Tab.Container>;
```
