```js
<div style={{ width: 300 }}>
  <Breadcrumb onBack={() => console.log('Go back')}>
    <Breadcrumb.Crumb label="Crumb 1" onClick={() => console.log('Crumb 1')} />
  </Breadcrumb>
  <Breadcrumb onBack={() => console.log('Go back')}>
    <Breadcrumb.Crumb label="Crumb 1" onClick={() => console.log('Crumb 1')} />
    <Breadcrumb.Crumb label="Crumb 2" onClick={() => console.log('Crumb 2')} />
  </Breadcrumb>
  <Breadcrumb onBack={() => console.log('Go back')}>
    <Breadcrumb.Crumb label="Crumb 1" onClick={() => console.log('Crumb 1')} />
    <Breadcrumb.Crumb label="Crumb 2" onClick={() => console.log('Crumb 2')} />
    <Breadcrumb.Crumb label="Crumb 3" onClick={() => console.log('Crumb 3')} />
    <Breadcrumb.Crumb label="Crumb 4" onClick={() => console.log('Crumb 4')} />
    <Breadcrumb.Crumb label="Crumb 5" onClick={() => console.log('Crumb 5')} />
  </Breadcrumb>
  <Breadcrumb onBack={() => console.log('Go back')}>
    <Breadcrumb.Crumb label="Crumb 1" onClick={() => console.log('Crumb 1')} />
    <Breadcrumb.Crumb
      label="SomeReallyLongCrumb"
      onClick={() => console.log('Crumb 2')}
    />
    <Breadcrumb.Crumb label="Crumb 3" onClick={() => console.log('Crumb 3')} />
  </Breadcrumb>
</div>
```
