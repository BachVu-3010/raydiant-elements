```jsx
<div style={{ width: 200 }}>
  <Breadcrumbs onBack={() => console.log('Go back')}>
    <Breadcrumb label="Crumb 1" onClick={() => console.log('Crumb 1')} />
  </Breadcrumbs>
  <Breadcrumbs onBack={() => console.log('Go back')}>
    <Breadcrumb label="Crumb 1" onClick={() => console.log('Crumb 1')} />
    <Breadcrumb label="Crumb 2" onClick={() => console.log('Crumb 2')} />
  </Breadcrumbs>
  <Breadcrumbs onBack={() => console.log('Go back')}>
    <Breadcrumb label="Crumb 1" onClick={() => console.log('Crumb 1')} />
    <Breadcrumb label="Crumb 2" onClick={() => console.log('Crumb 2')} />
    <Breadcrumb label="Crumb 3" onClick={() => console.log('Crumb 3')} />
    <Breadcrumb label="Crumb 4" onClick={() => console.log('Crumb 4')} />
    <Breadcrumb label="Crumb 5" onClick={() => console.log('Crumb 5')} />
  </Breadcrumbs>
  <Breadcrumbs onBack={() => console.log('Go back')}>
    <Breadcrumb label="Crumb 1" onClick={() => console.log('Crumb 1')} />
    <Breadcrumb
      label="SomeReallyLongCrumb"
      onClick={() => console.log('Crumb 2')}
    />
    <Breadcrumb label="Crumb 3" onClick={() => console.log('Crumb 3')} />
  </Breadcrumbs>
</div>
```
