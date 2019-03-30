```js
<Column>
  <OccurrenceList>
    <OccurrenceList.Item
      name="Daily good morning loop"
      start={new Date(2018, 2, 26, 9)}
      end={new Date(2018, 2, 26, 9, 30)}
      recurring
      locked
    />
    <OccurrenceList.Item
      name="Brunch menu"
      start={new Date(2018, 2, 26, 9, 30)}
      end={new Date(2018, 2, 26, 10, 30)}
    />
  </OccurrenceList>
  <OccurrenceList>
    <OccurrenceList.Item
      name="Hackathon Awards Welcome"
      start={new Date(2018, 2, 26, 10, 30)}
      end={new Date(2018, 2, 26, 14, 30)}
      locked
    />
    <OccurrenceList.Item
      overridden
      name="Lunch menu"
      start={new Date(2018, 2, 26, 13)}
      end={new Date(2018, 2, 26, 14, 30)}
      recurring
    />
    <OccurrenceList.Item
      overridden
      name="Holiday dessert menu"
      start={new Date(2018, 2, 26, 14)}
      end={new Date(2018, 2, 26, 14, 30)}
    />
    <OccurrenceList.Item
      name="Holiday dessert menu"
      start={new Date(2018, 2, 26, 14, 30)}
      end={new Date(2018, 2, 26, 15)}
    />
  </OccurrenceList>
  <OccurrenceList>
    <OccurrenceList.Item
      name="All night hackathon loop"
      start={new Date(2018, 2, 26, 15)}
      end={new Date(2018, 2, 27, 9)}
      locked
    />
  </OccurrenceList>
</Column>
```
