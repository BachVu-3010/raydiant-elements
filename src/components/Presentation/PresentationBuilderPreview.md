```jsx
initialState = {
  previewMode: 'horizontal',
  appVersion: {
    name: 'My Application',
    thumbnail_url: '',
    strings: {
      description: 'My awesome application',
      link: 'Link',
      text: 'Text',
      number: 'Number',
      boolean: 'Boolean',
      file: 'File',
      selection: 'Selection',
    },
  },
};

const onPreviewModeChange = previewMode => {
  setState({ previewMode });
};

<Column>
  <div style={{ height: 500, display: 'flex' }}>
    <PresentationBuilderPreview
      previewMode={state.previewMode}
      appVersion={state.appVersion}
      onPreviewModeChange={onPreviewModeChange}
    >
      <div />
    </PresentationBuilderPreview>
  </div>
</Column>;
```
