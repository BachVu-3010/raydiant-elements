```jsx
const application1 = {
  thumbnailUrl:
    'https://apps-repository.staging.getmira.com/3390b318-e587-42ae-8dac-6bcb2c1c36be/1.3.3/thumbnail.svg',
  strings: {
    callToAction: 'Add Menu',
  },
};

const application2 = {
  thumbnailUrl:
    'https://apps-repository.staging.getmira.com/fbb73c93-4a45-44d3-a830-abfd457a88ec/0.0.8/thumbnail.svg',
  strings: {
    callToAction: 'Add Weather',
  },
};

const application3 = {
  name: "Some Really Long Name That Doesn't Fit",
  strings: {
    callToAction: "Add Some Really Long Name That Doesn't Fit",
  },
};

<App>
  <Column>
    <Grid>
      <Grid.Item>
        <ApplicationCard application={application1} />
      </Grid.Item>
      <Grid.Item>
        <ApplicationCard application={application2} />
      </Grid.Item>
      <Grid.Item>
        <ApplicationCard application={application3} />
      </Grid.Item>
    </Grid>
  </Column>
</App>;
```
