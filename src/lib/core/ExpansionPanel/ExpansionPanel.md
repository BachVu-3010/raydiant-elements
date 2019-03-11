```js
<Row>
  <div style={{ width: '100%' }}>
    <ExpansionPanel
      summary="First Item"
      details={
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </div>
      }
    />
    <ExpansionPanel
      summary="Second Item"
      details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    />
    <ExpansionPanel
      disabled
      summary="Disabled Item"
      details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    />
  </div>
</Row>
```

### Raised

```js
const SettingsIcon = require('@material-ui/icons/Settings').default;

<Row>
  <div style={{ width: '100%' }}>
    <ExpansionPanel
      raised
      summary="First Item"
      details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    />
    <ExpansionPanel
      raised
      summary="Second Item"
      details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    />
    <ExpansionPanel
      raised
      summary="Third Item"
      details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    />
  </div>
</Row>;
```

### Different expand icons

```js
const SettingsIcon = require('@material-ui/icons/Settings').default;

<Row>
  <div style={{ width: '100%' }}>
    <ExpansionPanel
      summary="First Item"
      details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    />
    <ExpansionPanel
      expandIcon={null}
      summary="Second Item"
      details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    />
    <ExpansionPanel
      expandIcon={<SettingsIcon />}
      summary="Third Item"
      details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    />
  </div>
</Row>;
```

### Events

```js
initialState = {
  expanded: false,
};

<Row>
  <div style={{ width: '100%' }}>
    <ExpansionPanel
      onChange={(e, expanded) => setState({ expanded })}
      summary={`This panel is ${state.expanded ? '' : 'not'} expanded`}
      details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    />
  </div>
</Row>;
```
