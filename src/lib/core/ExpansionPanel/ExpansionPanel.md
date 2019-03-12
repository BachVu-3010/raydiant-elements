```js
<Row>
  <div style={{ width: '100%' }}>
    <ExpansionPanel>
      <ExpansionPanel.Summary>First Item</ExpansionPanel.Summary>
      <ExpansionPanel.Details>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </ExpansionPanel.Details>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanel.Summary>Second Item</ExpansionPanel.Summary>
      <ExpansionPanel.Details>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </ExpansionPanel.Details>
    </ExpansionPanel>
    <ExpansionPanel disabled>
      <ExpansionPanel.Summary>Third Item</ExpansionPanel.Summary>
      <ExpansionPanel.Details>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </ExpansionPanel.Details>
    </ExpansionPanel>
  </div>
</Row>
```

### Raised

```js
<Row>
  <div style={{ width: '100%' }}>
    <ExpansionPanel raised>
      <ExpansionPanel.Summary>First Item</ExpansionPanel.Summary>
      <ExpansionPanel.Details>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </ExpansionPanel.Details>
    </ExpansionPanel>
    <ExpansionPanel raised>
      <ExpansionPanel.Summary>Second Item</ExpansionPanel.Summary>
      <ExpansionPanel.Details>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </ExpansionPanel.Details>
    </ExpansionPanel>
    <ExpansionPanel raised>
      <ExpansionPanel.Summary>Third Item</ExpansionPanel.Summary>
      <ExpansionPanel.Details>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </ExpansionPanel.Details>
    </ExpansionPanel>
  </div>
</Row>
```

### Events

```js
initialState = {
  expanded: false,
};

<Row>
  <div style={{ width: '100%' }}>
    <ExpansionPanel onChange={(e, expanded) => setState({ expanded })}>
      <ExpansionPanel.Summary>
        {`This panel is ${state.expanded ? '' : 'not'} expanded`}
      </ExpansionPanel.Summary>
      <ExpansionPanel.Details>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </ExpansionPanel.Details>
    </ExpansionPanel>
  </div>
</Row>;
```
