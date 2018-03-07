Tab are much like sectional buttons in that they are clickable areas that expand to fill the width of their parent element. Like sectional buttons, tabs can contain text and/or an icon.

Rather than living directly within a row, tabs are contained in a tab bars. All tabs within a tab bar must share the same structure of text and icons.

Unlike sectional buttons, tabs are toggles, and only one tab within a tab bar can be selected at a time. This means that tabs must have visually distinct selected and unselected states.

[zeplin](https://zpl.io/2G1Kpma)

[material.io](https://material.io/guidelines/components/tabs.html)

### Text

```jsx
initialState = {
  selected: null,
};

<Column>
  <Tabs>
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
  </Tabs>
</Column>;
```

### Anchors

Provide an href prop to render an anchor instead of a button.

```jsx
initialState = {
  selected: null,
};

const preventDefault = next => e => {
  e.preventDefault();
  next(e);
};

<Column>
  <Tabs>
    <Tab
      label="Tab 1"
      href="/tab1"
      active={state.selected === 1}
      onClick={preventDefault(() => setState({ selected: 1 }))}
    />
    <Tab
      label="Tab 2"
      href="/tab2"
      active={state.selected === 2}
      onClick={preventDefault(() => setState({ selected: 2 }))}
    />
    <Tab
      label="Tab 3"
      href="/tab3"
      active={state.selected === 3}
      onClick={preventDefault(() => setState({ selected: 3 }))}
    />
  </Tabs>
</Column>;
```

### Icons

```jsx
initialState = {
  selected: null,
};

<Column>
  <Tabs>
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
  </Tabs>
</Column>;
```

```jsx
initialState = {
  selected: null,
};

<Column>
  <Tabs>
    <Tab
      icon="horizontalScreen"
      label="Horizontal"
      active={state.selected === 1}
      onClick={() => setState({ selected: 1 })}
    />
    <Tab
      icon="verticalScreen"
      label="Vertical"
      active={state.selected === 2}
      onClick={() => setState({ selected: 2 })}
    />
  </Tabs>
</Column>;
```
