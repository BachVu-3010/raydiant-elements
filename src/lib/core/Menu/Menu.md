```js
initialState = {
  page: 'screens',
};

<App>
  <Menu>
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
  </Menu>
</App>;
```

### Collapsed

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
  <Menu
    open={state.open}
    title={pageTitles[state.page]}
    collapsed
    onOpen={() => setState({ open: true })}
    onClose={() => setState({ open: false })}
  >
    <Menu.Back href="/screens" onClick={() => setState({ page: 'screens' })} />
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
  </Menu>
  <div style={{ height: 200 }} />
</App>;
```
