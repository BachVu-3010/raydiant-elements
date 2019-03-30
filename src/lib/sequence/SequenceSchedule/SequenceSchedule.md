```js
<div style={{ maxHeight: 350, flex: 1, height: '100%', display: 'flex' }}>
  <SequenceSchedule>
    <SequenceSchedule.Month date={new Date(2018, 2, 26)}>
      <SequenceSchedule.Day date={new Date(2018, 2, 26)}>
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
            recurring
          />
        </OccurrenceList>
        <OccurrenceList>
          <OccurrenceList.Item
            name="All night hackathon loop"
            start={new Date(2018, 2, 26, 15)}
            end={new Date(2018, 2, 27, 9)}
            locked
          />
          <OccurrenceList.Item
            overridden
            name="Thank-you to our sponsors"
            start={new Date(2018, 2, 26, 18)}
            end={new Date(2018, 2, 26, 18, 30)}
          />
        </OccurrenceList>
      </SequenceSchedule.Day>
      <SequenceSchedule.Day date={new Date(2018, 2, 27)}>
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
            recurring
          />
        </OccurrenceList>
      </SequenceSchedule.Day>
    </SequenceSchedule.Month>
    <SequenceSchedule.Month date={new Date(2018, 3, 26)}>
      <SequenceSchedule.Day date={new Date(2018, 3, 26)}>
        <OccurrenceList>
          <OccurrenceList.Item
            name="Daily good morning loop"
            start={new Date(2018, 3, 26, 9)}
            end={new Date(2018, 3, 26, 9, 30)}
            recurring
            locked
          />
          <OccurrenceList.Item
            name="Brunch menu"
            start={new Date(2018, 3, 26, 9, 30)}
            end={new Date(2018, 3, 26, 10, 30)}
            recurring
          />
        </OccurrenceList>
        <OccurrenceList>
          <OccurrenceList.Item
            name="All night hackathon loop"
            start={new Date(2018, 3, 26, 15)}
            end={new Date(2018, 3, 27, 9)}
            locked
          />
          <OccurrenceList.Item
            overridden
            name="Thank-you to our sponsors"
            start={new Date(2018, 3, 26, 18)}
            end={new Date(2018, 3, 26, 18, 30)}
          />
        </OccurrenceList>
      </SequenceSchedule.Day>
      <SequenceSchedule.Day date={new Date(2018, 3, 27)}>
        <OccurrenceList>
          <OccurrenceList.Item
            name="Daily good morning loop"
            start={new Date(2018, 3, 26, 9)}
            end={new Date(2018, 3, 26, 9, 30)}
            recurring
            locked
          />
          <OccurrenceList.Item
            name="Brunch menu"
            start={new Date(2018, 3, 26, 9, 30)}
            end={new Date(2018, 3, 26, 10, 30)}
            recurring
          />
        </OccurrenceList>
      </SequenceSchedule.Day>
    </SequenceSchedule.Month>
  </SequenceSchedule>
</div>
```
