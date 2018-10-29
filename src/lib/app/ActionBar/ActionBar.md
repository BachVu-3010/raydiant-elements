```js
<App>
  <ActionBar>
    <Hidden smDown>
      <ActionBar.Title title="Your Library" subtitle="(12 items)" />
      <Spacer />
      <TextField type="search" label="Search" icon="search" maxWidth={260} />
      <Button label="Manage" />
      <Button label="New Content" icon="add" />
    </Hidden>
    <Hidden mdUp>
      <TextField type="search" label="Search" icon="search" />
      <Button icon="add" />
    </Hidden>
  </ActionBar>
  <ActionBar>
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
  </ActionBar>
  <ActionBar>
    <ActionBar.Title title="Your Account" />
    <Spacer />
    <Button label="Sign Out" />
  </ActionBar>
  <ActionBar>
    <ActionBar.Title title="Daily good morning loop" />
  </ActionBar>
</App>
```

### Bottom

```js
<App>
  <ActionBar bottom>
    Select content to add to “Showroom Floor”
    <Spacer />
    <Button label="Cancel" />
    <Button label="Save" color="progress" />
  </ActionBar>
  <ActionBar bottom>
    <Button label="Add Content" icon="add" />
    <Spacer />
    <Button label="Publish" icon="publish" color="primary" />
  </ActionBar>
</App>
```

### Condensed

```js
<App>
  <ActionBar condensed bottom>
    <Button label="Cancel" />
    <Spacer />
    <Button label="Save" color="progress" />
  </ActionBar>
</App>
```
