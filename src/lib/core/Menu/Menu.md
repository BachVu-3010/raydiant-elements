```js
initialState = {
  page: 'screens',
};

<App>
  <Menu>
    <Menu.Header border>
      <Menu.Logo href="/" onClick={() => setState({ page: 'screens' })} />
      <Menu.Item
        href="/screens"
        label="Screens"
        active={state.page === 'screens'}
        onClick={() => setState({ page: 'screens' })}
      />
      <Menu.Item
        href="/library"
        label="Library"
        active={state.page === 'library'}
        onClick={() => setState({ page: 'library' })}
      />
      <Menu.Item
        href="/account"
        label="Account"
        active={state.page === 'account'}
        onClick={() => setState({ page: 'account' })}
      />
      <Spacer />
      <Menu.Item href="/support" label="Support" />
      <Menu.Item href="/feedback" label="Feedback" />
    </Menu.Header>
  </Menu>
</App>;
```

### Mobile

```js
pageTitles = {
  screens: 'Screens',
  library: 'Library',
  account: 'Account',
};

initialState = {
  open: false,
  page: 'screens',
};

<App>
  <Menu>
    <Menu.Header border>
      <Menu.Back
        href="/screens"
        onClick={() => setState({ page: 'screens', open: false })}
      />
      <Spacer />
      <Menu.Title label={pageTitles[state.page]} />
      <Button
        hideBorder
        icon={state.open ? 'close' : 'menu'}
        onClick={() => setState({ open: !state.open })}
      />
    </Menu.Header>
    <Menu.Drawer open={state.open}>
      <Menu.DrawerItem
        href="/screens"
        label={pageTitles.screens}
        active={state.page === 'screens'}
        onClick={() => setState({ page: 'screens', open: false })}
      />
      <Menu.DrawerItem
        href="/library"
        label={pageTitles.library}
        active={state.page === 'library'}
        onClick={() => setState({ page: 'library', open: false })}
      />
      <Menu.DrawerItem
        href="/account"
        label={pageTitles.account}
        active={state.page === 'account'}
        onClick={() => setState({ page: 'account', open: false })}
      />
      <Menu.DrawerItem href="/support" label="Support" />
      <Menu.DrawerItem href="/feedback" label="Feedback" />
    </Menu.Drawer>
  </Menu>
  <div style={{ height: 200 }} />
</App>;
```
