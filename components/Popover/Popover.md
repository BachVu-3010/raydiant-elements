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

<>
  <PopoverAnchor>
    <Button label="Open" onClick={() => setState({ bltl: true })} />
    <Popover
      anchor={['bottom', 'left']}
      to={['top', 'left']}
      open={state.bltl}
      onOverlayClick={() => setState({ bltl: false })}
    >
      <Content label="Anchor Bottom Left to Top Left" />
    </Popover>
  </PopoverAnchor>

  <PopoverAnchor>
    <Button label="Open" onClick={() => setState({ brtr: true })} />
    <Popover
      anchor={['bottom', 'right']}
      to={['top', 'right']}
      open={state.brtr}
      onOverlayClick={() => setState({ brtr: false })}
    >
      <Content label="Anchor Bottom Right to Top Right" />
    </Popover>
  </PopoverAnchor>

  <PopoverAnchor>
    <Button label="Open" onClick={() => setState({ tlbl: true })} />
    <Popover
      anchor={['top', 'left']}
      to={['bottom', 'left']}
      open={state.tlbl}
      onOverlayClick={() => setState({ tlbl: false })}
    >
      <Content label="Anchor Top Left to Bottom Left" />
    </Popover>
  </PopoverAnchor>

  <PopoverAnchor>
    <Button label="Open" onClick={() => setState({ trbr: true })} />
    <Popover
      anchor={['top', 'right']}
      to={['bottom', 'right']}
      open={state.trbr}
      onOverlayClick={() => setState({ trbr: false })}
    >
      <Content label="Anchor Top Right to Bottom Right" />
    </Popover>
  </PopoverAnchor>
</>;
```
