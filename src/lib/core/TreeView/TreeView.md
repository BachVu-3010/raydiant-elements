```js
const FolderSharpIcon = require('@material-ui/icons/FolderSharp').default;
const PlaylistPlaySharpIcon = require('@material-ui/icons/PlaylistPlaySharp')
  .default;

<Column>
  <TreeView>
    <TreeView.Item icon={<FolderSharpIcon />} label="My Folder" expandable>
      <TreeView.Item icon={<PlaylistPlaySharpIcon />} label="Folder Item" />
      <TreeView.Item icon={<PlaylistPlaySharpIcon />} label="Folder Item" />
    </TreeView.Item>
    <TreeView.Item icon={<FolderSharpIcon />} label="Another Folder" expandable>
      <TreeView.Item icon={<PlaylistPlaySharpIcon />} label="Folder Item" />
    </TreeView.Item>
    <TreeView.Item icon={<PlaylistPlaySharpIcon />} label="Folder Item" />
    <TreeView.Item icon={<PlaylistPlaySharpIcon />} label="Folder Item" />
  </TreeView>
</Column>;
```
