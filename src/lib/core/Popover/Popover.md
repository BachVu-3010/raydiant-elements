```js
initialState = {
  bltl: false,
  brtr: false,
  tlbl: false,
  trbr: false,
};

const Content = ({ label }) => (
  <div style={{ padding: '24px 16px', whiteSpace: 'nowrap' }}>{label}</div>
);

<App>
  <Row>
    <Popover.Anchor>
      <Button label="Open" onClick={() => setState({ bltl: true })} />
      <Popover
        anchor={['bottom', 'left']}
        to={['top', 'left']}
        open={state.bltl}
        onOverlayClick={() => setState({ bltl: false })}
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
      >
        <Content label="Anchor Top Right to Bottom Right" />
      </Popover>
    </Popover.Anchor>
  </Row>

  <Row>
    <Popover.Anchor>
      <Button label="Light" onClick={() => setState({ popover1: true })} />
      <Popover
        anchor={['bottom', 'left']}
        to={['top', 'left']}
        open={state.popover1}
        onOverlayClick={() => setState({ popover1: false })}
        color="light"
      >
        <Popover.Header>Light Popover</Popover.Header>
        <Popover.Item>
          <Button
            label="Cancel"
            color="destructive"
            onClick={() => {
              setState({ popover1: false });
            }}
          />
          <Button label="Done" />
        </Popover.Item>
      </Popover>
    </Popover.Anchor>

    <Popover.Anchor>
      <Button
        label="Light w/items"
        onClick={() => setState({ popover1a: true })}
      />
      <Popover
        anchor={['bottom', 'left']}
        to={['top', 'left']}
        open={state.popover1a}
        onOverlayClick={() => setState({ popover1a: false })}
        color="light"
      >
        <Popover.Header>Light Popover</Popover.Header>
        <Popover.Body>
          <Popover.Item>Item 1</Popover.Item>
          <Popover.Item>Item 2</Popover.Item>
          <Popover.Item>Item 3</Popover.Item>
          <Popover.Item>Item 4</Popover.Item>
          <Popover.Item>Item 5</Popover.Item>
        </Popover.Body>
      </Popover>
    </Popover.Anchor>

    <Popover.Anchor>
      <Button label="Grey" onClick={() => setState({ popover2: true })} />
      <Popover
        anchor={['bottom', 'left']}
        to={['top', 'left']}
        open={state.popover2}
        onOverlayClick={() => setState({ popover2: false })}
        color="grey"
      >
        <Popover.Header>Grey popover</Popover.Header>
        <Popover.Item>
          <Button
            label="Cancel"
            color="destructive"
            onClick={() => {
              setState({ popover2: false });
            }}
          />
          <Button label="Done" />
        </Popover.Item>
      </Popover>
    </Popover.Anchor>

    <Popover.Anchor>
      <Button
        label="Grey w/items"
        onClick={() => setState({ popover2a: true })}
      />
      <Popover
        anchor={['bottom', 'left']}
        to={['top', 'left']}
        open={state.popover2a}
        onOverlayClick={() => setState({ popover2a: false })}
        color="grey"
      >
        <Popover.Header>Grey popover</Popover.Header>
        <Popover.Body>
          <Popover.Item>Item 1</Popover.Item>
          <Popover.Item>Item 2</Popover.Item>
          <Popover.Item>Item 3</Popover.Item>
          <Popover.Item>Item 4</Popover.Item>
          <Popover.Item>Item 5</Popover.Item>
        </Popover.Body>
      </Popover>
    </Popover.Anchor>

    <Popover.Anchor>
      <Button label="Dark" onClick={() => setState({ popover3: true })} />
      <Popover
        anchor={['bottom', 'left']}
        to={['top', 'left']}
        open={state.popover3}
        onOverlayClick={() => setState({ popover3: false })}
        color="dark"
      >
        <Popover.Header>Dark popover</Popover.Header>
        <Popover.Item>
          <Button
            label="Cancel"
            color="destructive"
            onClick={() => {
              setState({ popover3: false });
            }}
          />
          <Button label="Done" />
        </Popover.Item>
      </Popover>
    </Popover.Anchor>
  </Row>
</App>;
```
