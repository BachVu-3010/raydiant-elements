```jsx
initialState = {
  open: ''
}

const setOpen = open => { 
  setState({ open }); 
};

const Content = ({ label }) => (
  <div style={{ padding: '24px 16px', whiteSpace: 'nowrap' }}>
    {label}
  </div>
);

<Row>
  <PopoverAnchor>
    <Button onClick={() => setOpen('bltl')}>Open</Button>
    <Popover anchor="bottom left" to="top left" open={state.open === 'bltl'} onOverlayClick={() => setOpen('')}>
      <Content label="Anchor Bottom Left to Top Left" />
    </Popover>
  </PopoverAnchor>

  <PopoverAnchor>
    <Button onClick={() => setOpen('brtr')}>Open</Button>
    <Popover anchor="bottom right" to="top right" open={state.open === 'brtr'} onOverlayClick={() => setOpen('')}>
      <Content label="Anchor Bottom Right to Top Right" />
    </Popover>
  </PopoverAnchor>

  <PopoverAnchor>
    <Button onClick={() => setOpen('tlbl')}>Open</Button>
    <Popover anchor="top left" to="bottom left" open={state.open === 'tlbl'} onOverlayClick={() => setOpen('')}>
      <Content label="Anchor Top Left to Bottom Left" />
    </Popover>
  </PopoverAnchor>

  <PopoverAnchor>
    <Button onClick={() => setOpen('trbr')}>Open</Button>
    <Popover anchor="top right" to="bottom right" open={state.open === 'trbr'} onOverlayClick={() => setOpen('')}>
      <Content label="Anchor Top Right to Bottom Right" />
    </Popover>
  </PopoverAnchor>
</Row>
```