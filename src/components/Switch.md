## Alignment
```jsx
initialState={a: true, b: false};
const linkToBool = require('./__demo__/linkToBool')(state, setState);
<div>
  <div>
    <span>Check the baseline alignment: </span>
    <Switch {...(linkToBool('a'))}>Switch</Switch>
  </div>
  <div style={{marginTop: '10px'}}>
    <div>Check the left alignment: </div>
    <Switch {...(linkToBool('b'))}>Switch</Switch>
  </div>
</div>
```
## In a row
```jsx
initialState={a: true, b: true, c: false, d: false};
const linkToBool = require('./__demo__/linkToBool')(state, setState);
<Row>
  <Switch {...(linkToBool('a'))}>I'm checked</Switch>
  <Switch {...(linkToBool('b'))}><em>I'm</em> checked too</Switch>
  <Switch {...(linkToBool('c'))}>I'm not checked</Switch>
  <Switch {...(linkToBool('d'))}><em>I'm</em> not checked either</Switch>
</Row>
```

## In a column
```jsx
initialState={a: true, b: true, c: false, d: false};
const linkToBool = require('./__demo__/linkToBool')(state, setState);
<Column>
  <Switch {...(linkToBool('a'))}>I'm checked</Switch>
  <Switch {...(linkToBool('b'))}><em>I'm</em> checked too</Switch>
  <Switch {...(linkToBool('c'))}>I'm not checked</Switch>
  <Switch {...(linkToBool('d'))}><em>I'm</em> not checked either</Switch>
</Column>
```

## Disabled
```jsx
<Switch checked disabled>Clicking on me won't do anything</Switch>
```

## Narrow
```jsx
initialState={a: true};
const linkToBool = require('./__demo__/linkToBool')(state, setState);
<div style={{maxWidth: '300px', border: '1px dashed #999'}}>
  <Switch {...linkToBool('a')}>Here's a fairly long label in a space that's not very wide. I sure hope this works out.</Switch>
</div>
```
