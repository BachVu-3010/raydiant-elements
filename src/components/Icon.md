```jsx
const icons = [
  ['add', 'alert', 'defaultContent', 'checkmark'], 
  ['edit', 'horizontalScreen', 'publish', 'remove'], 
  ['repeat', 'scheduledContent', 'screenSettings', 'search'],
  ['verticalScreen']
];

<Column>
  <Row justifyContent="space-between">
    {icons.map((chunk, index) => 
      <Column key={index}>
        {chunk.map(icon =>
          <Row key={icon}>
            <Icon icon={icon} />
            <small>{icon}</small>
          </Row>
        )}
      </Column>
    )}
  </Row>
</Column>
```