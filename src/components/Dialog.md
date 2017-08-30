## Basic dialog

```jsx
const DialogContent = require('./DialogContent').default;
const DialogTitle = require('./DialogTitle').default;
const DialogActions = require('./DialogActions').default;

initialState = {
  show: false,
  showActions: true,
  showTitle: true,
  contentSpace: true,
  contentIterations: "10",
};
const showModal = () => {
  return setState({show: true});
};
const hideModal = () => {
  setState({show: false});
};
const DTitle = () => state.showTitle ? <DialogTitle>This is a dialog</DialogTitle> : null;
const DActions = () => state.showActions ?
  <DialogActions>
    <Button onClick={hideModal} color="primary">OK</Button>
    <Button onClick={hideModal}>Cancel</Button>
  </DialogActions> :
  null;

const getContent = (n) => Array.from(new Array(n), () => 'Here is some content that is showing in a dialog.').join(' ');

<Column style={{width: '300px'}}>
  <Checkbox checked={state.showActions} onChange={(e) => setState({showActions: e.target.checked})}>Buttons</Checkbox>
  <Checkbox checked={state.showTitle} onChange={(e) => setState({showTitle: e.target.checked})}>Title</Checkbox>
  <Checkbox checked={state.contentSpace} onChange={(e) => setState({contentSpace: e.target.checked})}>Content whitespace</Checkbox>
  <TextField
    label="Content iterations"
    value={state.contentIterations}
    onChange={(e) => setState({contentIterations: e.target.value})} />
  <Button onClick={showModal} color="progress">Show Modal</Button>
  <Dialog onRequestClose={hideModal} open={state.show}>
    <DTitle />
    <DialogContent noSpace={!state.contentSpace}>
      {getContent(parseInt(state.contentIterations, 10))}
    </DialogContent>
    <DActions />
  </Dialog>
</Column>
```