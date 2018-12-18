```js
initialState = {};

<App>
  <Row>
    <Spacer />
    <Popover.Anchor>
      <Button label="Items" onClick={() => setState({ multiple: true })} />
      <Popover
        anchor={['top', 'left']}
        to={['bottom', 'left']}
        open={state.multiple}
        onOverlayClick={() => setState({ multiple: false })}
      >
        <Popover.Header>Multiple Items</Popover.Header>
        <Popover.Body>
          <Popover.Item onClick={() => setState({ multiple: false })}>
            Item 1
          </Popover.Item>
          <Popover.Item onClick={() => setState({ multiple: false })}>
            Item 2
          </Popover.Item>
          <Popover.Item onClick={() => setState({ multiple: false })}>
            Item 3
          </Popover.Item>
          <Popover.Item onClick={() => setState({ multiple: false })}>
            Item 4
          </Popover.Item>
          <Popover.Item onClick={() => setState({ multiple: false })}>
            Item 5
          </Popover.Item>
        </Popover.Body>
      </Popover>
    </Popover.Anchor>

    <Popover.Anchor>
      <Button
        label="Single Item (auto-size)"
        onClick={() => setState({ single: true })}
      />
      <Popover
        anchor={['top', 'left']}
        to={['bottom', 'left']}
        open={state.single}
        onOverlayClick={() => setState({ single: false })}
        width="auto"
      >
        <Popover.Header>Single Item</Popover.Header>
        <Popover.Item>
          <Button label="Cancel" onClick={() => setState({ single: false })} />
          <Spacer />
          <Button
            label="Done"
            color="primary"
            onClick={() => setState({ single: false })}
          />
        </Popover.Item>
      </Popover>
    </Popover.Anchor>
    <Spacer />
  </Row>
</App>;
```

### Positioning

```jsx
const Content = ({ label }) => (
  <div style={{ padding: '24px 16px', whiteSpace: 'nowrap' }}>{label}</div>
);

<App>
  <Row>
    <Spacer />
    <Popover.Anchor>
      <Button label="Open" onClick={() => setState({ bltl: true })} />
      <Popover
        anchor={['bottom', 'left']}
        to={['top', 'left']}
        open={state.bltl}
        onOverlayClick={() => setState({ bltl: false })}
        width="auto"
      >
        <Content label="Anchor Bottom Left to Top Left" />
      </Popover>
    </Popover.Anchor>
    <Popover.Anchor>
      <Button label="Open" onClick={() => setState({ brtr: true })} />
      <Popover
        anchor={['bottom', 'right']}
        to={['top', 'right']}
        open={state.brtr}
        onOverlayClick={() => setState({ brtr: false })}
        width="auto"
      >
        <Content label="Anchor Bottom Right to Top Right" />
      </Popover>
    </Popover.Anchor>
    <Popover.Anchor>
      <Button label="Open" onClick={() => setState({ tlbl: true })} />
      <Popover
        anchor={['top', 'left']}
        to={['bottom', 'left']}
        open={state.tlbl}
        onOverlayClick={() => setState({ tlbl: false })}
        width="auto"
      >
        <Content label="Anchor Top Left to Bottom Left" />
      </Popover>
    </Popover.Anchor>
    <Popover.Anchor>
      <Button label="Open" onClick={() => setState({ trbr: true })} />
      <Popover
        anchor={['top', 'right']}
        to={['bottom', 'right']}
        open={state.trbr}
        onOverlayClick={() => setState({ trbr: false })}
        width="auto"
      >
        <Content label="Anchor Top Right to Bottom Right" />
      </Popover>
    </Popover.Anchor>
    <Spacer />
  </Row>
</App>;
```
