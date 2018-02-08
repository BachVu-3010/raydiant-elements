```jsx
initialState = {
  previewMode: 'horizontal',
};

<Column>
  <div style={{ height: 200, display: 'flex' }}>
    <PresentationPreview previewMode="horizontal">
      <div />
    </PresentationPreview>
  </div>
  <div style={{ height: 200, display: 'flex' }}>
    <PresentationPreview previewMode="vertical">
      <div />
    </PresentationPreview>
  </div>
</Column>;
```
