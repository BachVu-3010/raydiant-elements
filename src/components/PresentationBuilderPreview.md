```jsx
initialState = {
  previewMode: 'horizontal',
  application: {
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
  <div style={{ height: 500 }}>
    <PresentationBuilderPreview
      previewMode={state.previewMode}
      application={state.application}
      onPreviewModeChange={onPreviewModeChange}
    >
      <div />
    </PresentationBuilderPreview>
  </div>
</Column>;
```
