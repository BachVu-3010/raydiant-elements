```js
<App>
  <Row>
    <Spacer />
    <Popover.Anchor>
      <Button onClick={() => setState({ open: true })} label="Open" />
      <ScheduleContentPopover
        open={state.open}
        onClose={() => setState({ open: false })}
      >
        <ScheduleContentPopover.Item
          icon="defaultContent"
          label="Loop forever"
          description="Add to default content"
          onClick={() => console.log('default')}
        />
        <ScheduleContentPopover.Item
          icon="scheduledContent"
          label="Schedule for..."
          onClick={() => console.log('schedule')}
        />
      </ScheduleContentPopover>
    </Popover.Anchor>
    <Spacer />
  </Row>
</App>
```

```js
<App>
  <Row>
    <Spacer />
    <Popover.Anchor>
      <Button onClick={() => setState({ open: true })} label="Open" />
      <ScheduleContentPopover
        open={state.open}
        onClose={() => setState({ open: false })}
      >
        <ScheduleContentPopover.Item
          icon="defaultContent"
          label="Loop forever"
          description="Add to default content"
          onClick={() => console.log('default')}
        />
        <ScheduleContentPopover.Item
          icon="scheduledContent"
          label="Play for one hour"
          onClick={() => console.log('1hour')}
        />
        <ScheduleContentPopover.Item
          icon="scheduledContent"
          label="Play for today"
          description="5 hours left"
          onClick={() => console.log('today')}
        />
        <ScheduleContentPopover.Item
          icon="scheduledContent"
          label="Schedule for..."
          onClick={() => console.log('schedule')}
        />
      </ScheduleContentPopover>
    </Popover.Anchor>
    <Spacer />
  </Row>
</App>
```
