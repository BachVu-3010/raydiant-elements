```js
<App>
  <Titlebar>
    <Hidden smDown>
      <Titlebar.Title title="Your Library" subtitle="(12 items)" />
      <Spacer />
      <TextField type="search" label="Search" icon="search" maxWidth={260} />
      <Button label="Manage" />
      <Button label="New Content" icon="add" />
    </Hidden>
    <Hidden mdUp>
      <TextField type="search" label="Search" icon="search" />
      <Button icon="add" />
    </Hidden>
  </Titlebar>
  <Titlebar>
    <Hidden xsDown>
      Select screens below to add them to a group.
      <Spacer />
      <Button label="Done" />
      <Button label="Add to Group" color="progress" />
    </Hidden>
    <Hidden smUp>
      <Button label="Done" />
      <Spacer />
      <Button label="Add to Group" color="progress" />
    </Hidden>
  </Titlebar>
  <Titlebar>
    <Titlebar.Title title="Your Account" />
    <Spacer />
    <Button label="Sign Out" />
  </Titlebar>
  <Titlebar>
    <Titlebar.Title title="Daily good morning loop" />
  </Titlebar>
</App>
```
