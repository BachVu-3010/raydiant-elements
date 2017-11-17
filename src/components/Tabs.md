### Text
```jsx
initialState = {
  selected: null,
};

<Column>
  <Tabs>
    <Tab label="Tab 1" active={state.selected === 1} onClick={() => setState({ selected: 1 })} />
    <Tab label="Tab 2" active={state.selected === 2} onClick={() => setState({ selected: 2 })} />
    <Tab label="Tab 3" active={state.selected === 3} onClick={() => setState({ selected: 3 })} />
  </Tabs>
</Column>
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
    <Tab label="Tab 1" href="/tab1" active={state.selected === 1} onClick={preventDefault(() => setState({ selected: 1 }))} />
    <Tab label="Tab 2" href="/tab2" active={state.selected === 2} onClick={preventDefault(() => setState({ selected: 2 }))} />
    <Tab label="Tab 3" href="/tab3" active={state.selected === 3} onClick={preventDefault(() => setState({ selected: 3 }))} />
  </Tabs>
</Column>
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
</Column>
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
</Column>
```
