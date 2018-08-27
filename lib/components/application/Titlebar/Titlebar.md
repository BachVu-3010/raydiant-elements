```js
<div style={{ width: '100%' }}>
  <Titlebar>
    <Hidden xsDown>
      <Titlebar.Title title="Your Library" subtitle="(12 items)" />
      <Titlebar.Spacer />
      <TextField type="search" label="Search" icon="search" maxWidth={260} />
      <Button label="Manage" />
      <Button label="New Content" icon="add" />
    </Hidden>
    <Hidden smUp>
      <TextField type="search" label="Search" icon="search" />
      <Button icon="add" />
    </Hidden>
  </Titlebar>
  <Titlebar>
    <Hidden xsDown>
      Select screens below to add them to a group.
      <Titlebar.Spacer />
      <Button label="Done" />
      <Button label="Add to Group" color="progress" />
    </Hidden>
    <Hidden smUp>
      <Button label="Done" />
      <Titlebar.Spacer />
      <Button label="Add to Group" color="progress" />
    </Hidden>
  </Titlebar>
  <Titlebar>
    <Titlebar.Title title="Your Account" />
    <Titlebar.Spacer />
    <Button label="Sign Out" />
  </Titlebar>
  <Titlebar>
    <Titlebar.Title title="Daily good morning loop" />
  </Titlebar>
</div>
```
