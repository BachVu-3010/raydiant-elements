## Alignment
```jsx
initialState={a: true, b: false};
const linkToBool = require('./__demo__/linkToBool')(state, setState);
<div>
  <div>
    <span>Check the baseline alignment: </span>
    <Checkbox {...(linkToBool('a'))}>Checkbox</Checkbox>
  </div>
  <div style={{marginTop: '10px'}}>
    <div>Check the left alignment: </div>
    <Checkbox {...(linkToBool('b'))}>Checkbox</Checkbox>
  </div>
</div>
```
## In a row
```jsx
initialState={a: true, b: true, c: false, d: false};
const linkToBool = require('./__demo__/linkToBool')(state, setState);
<Row>
  <Checkbox {...(linkToBool('a'))}>I'm checked</Checkbox>
  <Checkbox {...(linkToBool('b'))}><em>I'm</em> checked too</Checkbox>
  <Checkbox {...(linkToBool('c'))}>I'm not checked</Checkbox>
  <Checkbox {...(linkToBool('d'))}><em>I'm</em> not checked either</Checkbox>
</Row>
```

## In a column
```jsx
initialState={a: true, b: true, c: false, d: false};
const linkToBool = require('./__demo__/linkToBool')(state, setState);
<Column>
  <Checkbox {...(linkToBool('a'))}>I'm checked</Checkbox>
  <Checkbox {...(linkToBool('b'))}><em>I'm</em> checked too</Checkbox>
  <Checkbox {...(linkToBool('c'))}>I'm not checked</Checkbox>
  <Checkbox {...(linkToBool('d'))}><em>I'm</em> not checked either</Checkbox>
</Column>
```

Disabled:
```jsx
<Checkbox checked disabled>Clicking on me won't do anything</Checkbox>
```

Narrow:
```jsx
initialState={a: true};
const linkToBool = require('./__demo__/linkToBool')(state, setState);
<div style={{maxWidth: '300px', border: '1px dashed #999'}}>
  <Checkbox {...linkToBool('a')}>Here's a fairly long label in a space that's not very wide. I sure hope this works out.</Checkbox>
</div>
```

Round:
```jsx
initialState = {a: true};
const linkToBool = require('./__demo__/linkToBool')(state, setState);
<Checkbox {...linkToBool('a')}/>
```