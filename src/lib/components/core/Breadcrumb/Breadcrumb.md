```js
<div style={{ width: 300 }}>
  <Breadcrumb.Container onBack={() => console.log('Go back')}>
    <Breadcrumb label="Crumb 1" onClick={() => console.log('Crumb 1')} />
  </Breadcrumb.Container>
  <Breadcrumb.Container onBack={() => console.log('Go back')}>
    <Breadcrumb label="Crumb 1" onClick={() => console.log('Crumb 1')} />
    <Breadcrumb label="Crumb 2" onClick={() => console.log('Crumb 2')} />
  </Breadcrumb.Container>
  <Breadcrumb.Container onBack={() => console.log('Go back')}>
    <Breadcrumb label="Crumb 1" onClick={() => console.log('Crumb 1')} />
    <Breadcrumb label="Crumb 2" onClick={() => console.log('Crumb 2')} />
    <Breadcrumb label="Crumb 3" onClick={() => console.log('Crumb 3')} />
    <Breadcrumb label="Crumb 4" onClick={() => console.log('Crumb 4')} />
    <Breadcrumb label="Crumb 5" onClick={() => console.log('Crumb 5')} />
  </Breadcrumb.Container>
  <Breadcrumb.Container onBack={() => console.log('Go back')}>
    <Breadcrumb label="Crumb 1" onClick={() => console.log('Crumb 1')} />
    <Breadcrumb
      label="SomeReallyLongCrumb"
      onClick={() => console.log('Crumb 2')}
    />
    <Breadcrumb label="Crumb 3" onClick={() => console.log('Crumb 3')} />
  </Breadcrumb.Container>
</div>
```
