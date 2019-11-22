```jsx
const playlist1 = {
  name: 'My Playlist',
};

const playlist2 = {
  name: 'Another Playlist',
};

const playlist3 = {
  name: 'Some Reeeeeeeeaaaally Long Playlist',
};

<App>
  <Column>
    <Grid>
      <Grid.Item>
        <PlaylistCard
          playlist={playlist1}
          selected={state.selected1}
          onSelect={() => setState({ selected1: !state.selected1 })}
          onClick={() => setState({ selected1: !state.selected1 })}
          showControls={state.showControls}
        />
      </Grid.Item>
      <Grid.Item>
        <PlaylistCard
          playlist={playlist2}
          selected={state.selected2}
          onEdit={() => console.log('edit')}
          onSelect={() => setState({ selected2: !state.selected2 })}
          onClick={() => setState({ selected2: !state.selected2 })}
          showControls={state.showControls}
        />
      </Grid.Item>
      <Grid.Item>
        <PlaylistCard
          playlist={playlist3}
          onEdit={() => console.log('edit')}
          onClick={() => console.log('click')}
          showControls={state.showControls}
        />
      </Grid.Item>
    </Grid>
    <Switch
      label="Show Controls"
      checked={state.showControls}
      onChange={showControls => setState({ showControls })}
    />
  </Column>
</App>;
```
