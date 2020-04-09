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

initialState = {
  imageSize: 'fit',
  numberOfScreens: 1,
  arrowPosition: 'arrow-down',
  arrowPosition1: 'arrow-down',
  dayOfWeek: ['SU'],
};

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
    value={state.numberOfScreens}
    onChange={value => setState({ numberOfScreens: value })}
    label="Icon"
    exclusive
  >
    <ToggleButtonGroup.Button
      key={1}
      value={1}
      icon="numericOneBoxMultipleOutline"
    />
    <ToggleButtonGroup.Button
      key={2}
      value={2}
      icon="numericTwoBoxMultipleOutline"
    />
    <ToggleButtonGroup.Button
      key={3}
      value={3}
      icon="numericThreeBoxMultipleOutline"
    />
  </ToggleButtonGroup>

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
</Row>;
```
