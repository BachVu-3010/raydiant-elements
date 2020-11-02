```js
const daysOfWeek = {
  SU: 'Sun',
  MO: 'Mon',
  TU: 'Tue',
  WE: 'Wed',
  TH: 'Thu',
  FR: 'Fri',
  SA: 'Sat',
};

const daysOfWeek1 = {
  SU: { label: 'Sun', disabled: true },
  MO: { label: 'Mon', disabled: false },
  TU: { label: 'Tue', disabled: false },
  WE: { label: 'Wed', disabled: false },
  TH: { label: 'Thu', disabled: false },
  FR: { label: 'Fri', disabled: false },
  SA: { label: 'Sat', disabled: true },
};

initialState = {
  imageSize: 'fit',
  numberOfScreens: 1,
  arrowPosition: 'arrow-down',
  arrowPosition1: 'arrow-down',
  dayOfWeek: ['SU'],
  dayOfWeek1: ['MO'],
  source: 'google',
};

<Column>
  <Row inline>
    <ToggleButtonGroup
      value={state.arrowPosition}
      onChange={value => setState({ arrowPosition: value })}
      label="SVG Icon"
      exclusive
    >
      <ToggleButtonGroup.Button key={1} value="arrow-down">
        <img src="https://assets.raydiant.com/images/arrow-down.svg" />
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button key={2} value="arrow-left">
        <img src="https://assets.raydiant.com/images/arrow-left.svg" />
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button key={3} value="arrow-right">
        <img src="https://assets.raydiant.com/images/arrow-right.svg" />
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button key={4} value="arrow-up">
        <img src="https://assets.raydiant.com/images/arrow-up.svg" />
      </ToggleButtonGroup.Button>
    </ToggleButtonGroup>

    <ToggleButtonGroup
      value={state.arrowPosition1}
      onChange={value => {
        if (value !== null) {
          setState({ arrowPosition1: value });
        }
      }}
      label="SVG Icon (Deselect disabled)"
      exclusive
    >
      <ToggleButtonGroup.Button key={1} value="arrow-down">
        <img src="https://assets.raydiant.com/images/arrow-down.svg" />
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button key={2} value="arrow-left">
        <img src="https://assets.raydiant.com/images/arrow-left.svg" />
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button key={3} value="arrow-right">
        <img src="https://assets.raydiant.com/images/arrow-right.svg" />
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button key={4} value="arrow-up">
        <img src="https://assets.raydiant.com/images/arrow-up.svg" />
      </ToggleButtonGroup.Button>
    </ToggleButtonGroup>

    <ToggleButtonGroup
      value={state.imageSize}
      onChange={imageSize => setState({ imageSize })}
      label="Text"
      helperText="Helper text"
      exclusive
    >
      <ToggleButtonGroup.Button key={1} value="fit">
        Fit
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button key={2} value="fill">
        Fill
      </ToggleButtonGroup.Button>
    </ToggleButtonGroup>

    <ToggleButtonGroup
      value={state.imageSize}
      onChange={imageSize => setState({ imageSize })}
      label="Helper Link"
      helperText={<Link href="https://google.com">Helper link</Link>}
      exclusive
    >
      <ToggleButtonGroup.Button key={1} value="fit">
        Fit
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button key={2} value="fill">
        Fill
      </ToggleButtonGroup.Button>
    </ToggleButtonGroup>
  </Row>
  <Row inline>
    <ToggleButtonGroup
      value={state.dayOfWeek}
      onChange={value => setState({ dayOfWeek: value })}
      label="Multiple Select (exclusive disabled)"
    >
      {Object.entries(daysOfWeek).map(([value, label]) => (
        <ToggleButtonGroup.Button key={value} value={value}>
          {label}
        </ToggleButtonGroup.Button>
      ))}
    </ToggleButtonGroup>

    <ToggleButtonGroup
      value={state.dayOfWeek1}
      onChange={value => setState({ dayOfWeek1: value })}
      label="Multiple Select (with disabled options)"
    >
      {Object.entries(daysOfWeek1).map(([value, { label, disabled }]) => (
        <ToggleButtonGroup.Button key={value} value={value} disabled={disabled}>
          {label}
        </ToggleButtonGroup.Button>
      ))}
    </ToggleButtonGroup>
  </Row>
  <Row inline>
    <ToggleButtonGroup
      value={state.source}
      onChange={value => setState({ source: value })}
      label="Disabled select with helper link"
      disabled
      helperText={<Link href="https://google.com">Helper link</Link>}
      exclusive
    >
      <ToggleButtonGroup.Button key={1} value="google">
        Google Drive
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button key={2} value="onedrive">
        OneDrive
      </ToggleButtonGroup.Button>
    </ToggleButtonGroup>

    <ToggleButtonGroup
      value={state.source}
      onChange={value => setState({ source: value })}
      label="Disabled select with helper text"
      disabled
      helperText="Helper text"
      exclusive
    >
      <ToggleButtonGroup.Button key={1} value="google">
        Google Drive
      </ToggleButtonGroup.Button>
      <ToggleButtonGroup.Button key={2} value="onedrive">
        OneDrive
      </ToggleButtonGroup.Button>
    </ToggleButtonGroup>
  </Row>
</Column>;
```
