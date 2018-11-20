```jsx
const presentation1 = {
  name: 'Menu',
  thumbnailUrl:
    'https://mira-screenshot-staging.s3.amazonaws.com/df338865-251b-495b-9e21-15ce7fddb263/20180829152724910934',
  iconUrl:
    'https://apps-repository.staging.getmira.com/3390b318-e587-42ae-8dac-6bcb2c1c36be/1.3.1/icon.svg',
  hasDynamicThumbnails: true,
};

const presentation2 = {
  name: 'Weather',
  applicationThumbnailUrl:
    'https://apps-repository.staging.getmira.com/fbb73c93-4a45-44d3-a830-abfd457a88ec/0.0.8/thumbnail.svg',
  hasDynamicThumbnails: false,
};

const Wrapper = ({ children }) => <div style={{ width: 192 }}>{children}</div>;

<App>
  <Column>
    <Row inline>
      <Wrapper>
        <PresentationThumbnail
          presentation={presentation1}
          selected={state.selected1}
          onEdit={() => console.log('edit')}
          onSelect={() => setState({ selected1: !state.selected1 })}
          onClick={() => setState({ selected1: !state.selected1 })}
          showControls={state.showControls}
        />
      </Wrapper>
      <Wrapper>
        <PresentationThumbnail
          presentation={presentation2}
          selected={state.selected2}
          onEdit={() => console.log('edit')}
          onSelect={() => setState({ selected2: !state.selected2 })}
          onClick={() => setState({ selected2: !state.selected2 })}
          showControls={state.showControls}
        />
      </Wrapper>
      <Wrapper>
        <PresentationThumbnail
          presentation={presentation1}
          onEdit={() => console.log('edit')}
          onClick={() => console.log('click')}
          showControls={state.showControls}
        />
      </Wrapper>
      <Wrapper>
        <PresentationThumbnail
          presentation={presentation2}
          onEdit={() => console.log('edit')}
          onClick={() => console.log('click')}
          showControls={state.showControls}
        />
      </Wrapper>
    </Row>
    <Row inline>
      <Switch
        label="Show Controls"
        checked={state.showControls}
        onChange={showControls => setState({ showControls })}
      />
    </Row>
  </Column>
</App>;
```

### Errors & Loading

```jsx
const presentation1 = {
  name: 'Menu',
  thumbnailUrl:
    'https://mira-screenshot-staging.s3.amazonaws.com/df338865-251b-495b-9e21-15ce7fddb263/20180829152724910934',
  iconUrl:
    'https://apps-repository.staging.getmira.com/3390b318-e587-42ae-8dac-6bcb2c1c36be/1.3.1/icon.svg',
  hasDynamicThumbnails: true,
};

const presentation2 = {
  name: 'Weather',
  applicationThumbnailUrl:
    'https://apps-repository.staging.getmira.com/fbb73c93-4a45-44d3-a830-abfd457a88ec/0.0.8/thumbnail.svg',
  hasDynamicThumbnails: false,
};

const Wrapper = ({ children }) => <div style={{ width: 192 }}>{children}</div>;

<App>
  <Column>
    <Row inline>
      <Wrapper>
        <PresentationThumbnail
          presentation={presentation1}
          selected={state.selected1}
          onEdit={() => console.log('edit1')}
          onSelect={() => setState({ selected1: !state.selected1 })}
          showControls={state.showControls}
          showControlsOnHover={false}
          isLoading
        />
      </Wrapper>
      <Wrapper>
        <PresentationThumbnail
          presentation={presentation2}
          selected={state.selected2}
          onEdit={() => console.log('edit2')}
          onSelect={() => setState({ selected2: !state.selected2 })}
          showControls={state.showControls}
          showControlsOnHover={false}
          hasError
          errorMessage="Something went wrong!"
        />
      </Wrapper>
    </Row>
    <Row inline>
      <Switch
        label="Show Controls"
        checked={state.showControls}
        onChange={showControls => setState({ showControls })}
      />
    </Row>
  </Column>
</App>;
```
