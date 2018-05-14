```jsx
initialState = {
  color: '#414698',
  color2: '',
};
const updateState = key => ({ rgb }) => {
  setState({ [key]: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})` });
};

<Column>
  <ColorPicker
    onChange={updateState('color')}
    value={state.color}
    label="Background Color"
  />
  <ColorPicker
    onChange={updateState('color2')}
    value={state.color2}
    label="Heading Color"
  />
</Column>;
```
