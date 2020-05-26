```jsx
const folder1 = {
  name: 'My Folder',
};

const folder2 = {
  name: 'Another Folder',
};

const folder3 = {
  name: 'Some Reeeeeeeeaaaally Long Folder',
};

<App>
  <Column>
    <Grid>
      <Grid.Item>
        <FolderCard
          folder={folder1}
          onClick={() => setState({ selected1: !state.selected1 })}
        />
      </Grid.Item>
      <Grid.Item>
        <FolderCard
          folder={folder2}
          onClick={() => setState({ selected2: !state.selected2 })}
        />
      </Grid.Item>
      <Grid.Item>
        <FolderCard folder={folder3} onClick={() => console.log('click')} />
      </Grid.Item>
    </Grid>
  </Column>
</App>;
```
