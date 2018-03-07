```jsx
const icons = [
  ['add', 'alert', 'arrowLeft', 'defaultContent'],
  ['checkmark', 'edit', 'endDate', 'group'],
  ['horizontalScreen', 'publish', 'remove', 'repeat'],
  ['time', 'trash', 'scheduledContent', 'screenSettings'],
  ['search', 'startDate', 'verticalScreen'],
];

<Column>
  <Row justifyContent="space-between">
    {icons.map((chunk, index) => (
      <Column key={index}>
        {chunk.map(icon => (
          <Row key={icon}>
            <Icon icon={icon} />
            <small>{icon}</small>
          </Row>
        ))}
      </Column>
    ))}
  </Row>
</Column>;
```
