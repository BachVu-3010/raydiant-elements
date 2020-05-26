```js
const SearchIcon = require('@material-ui/icons/Search').default;
const FilterListIcon = require('@material-ui/icons/FilterList').default;
const CreateNewFolderSharpIcon = require('@material-ui/icons/CreateNewFolderSharp')
  .default;
const ManageMultipleIcon = require('../../icons/ManageMultiple').default;
const CloseIcon = require('@material-ui/icons/Close').default;
const SwapVertIcon = require('@material-ui/icons/SwapVert').default;

const initialState = {
  active: '',
  sortOrder: 'name',
};

<App>
  <ActionBar doubleMargin>
    <ActionBar.Action
      icon={state.selected === 'sort' ? <CloseIcon /> : <FilterListIcon />}
      label="Sort"
      selected={state.selected === 'sort'}
      disabled={state.selected === 'manageMultiple'}
      onClick={() => setState({ selected: state.selected ? '' : 'sort' })}
    />
    {state.selected === 'sort' && (
      <>
        <ActionBar.Action
          subAction
          icon={<SwapVertIcon />}
          label="Name"
          selected={state.sortOrder === 'name'}
          onClick={() => setState({ sortOrder: 'name' })}
        />
        <ActionBar.Action
          subAction
          icon={<SwapVertIcon />}
          label="Type"
          selected={state.sortOrder === 'type'}
          onClick={() => setState({ sortOrder: 'type' })}
        />
        <ActionBar.Action
          subAction
          icon={<SwapVertIcon />}
          label="Date"
          selected={state.sortOrder === 'date'}
          onClick={() => setState({ sortOrder: 'date' })}
        />
      </>
    )}
    <ActionBar.Action
      icon={<CreateNewFolderSharpIcon />}
      label={state.selected === 'sort' ? '' : 'New Folder'}
      disabled={state.selected === 'manageMultiple'}
      onClick={() => {}}
    />
    <ActionBar.Action
      icon={
        state.selected === 'manageMultiple' ? (
          <CloseIcon />
        ) : (
          <ManageMultipleIcon />
        )
      }
      label={state.selected === 'sort' ? '' : 'Manage Multiple'}
      selected={state.selected === 'manageMultiple'}
      onClick={() =>
        setState({ selected: state.selected ? '' : 'manageMultiple' })
      }
    />
    <Spacer />
    <ActionBar.Input
      icon={<SearchIcon />}
      type="search"
      label="Search"
      maxWidth={200}
    />
    <Spacer />
  </ActionBar>
</App>;
```
