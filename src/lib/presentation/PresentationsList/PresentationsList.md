```js
const presentations = [
  {
    id: '8bb6fb3b-8b1b-4917-bf7b-f3bce17718e7',
    name: 'Horse',
    applicationThumbnailUrl:
      'https://apps-repository.staging.getmira.com/2058e0f9-8d7e-4ca0-946d-cb93e3f305b2/1.0.6/thumbnail.svg',
    thumbnailUrl:
      'https://mira-screenshot-staging.s3.amazonaws.com/8bb6fb3b-8b1b-4917-bf7b-f3bce17718e7/20190130015347353767',
    iconUrl:
      'https://apps-repository.staging.getmira.com/2058e0f9-8d7e-4ca0-946d-cb93e3f305b2/1.0.6/icon.svg',
    applicationName: 'Pictures',
    isLoading: false,
  },
  {
    id: '2ebe4b64-f4bf-475f-a2ea-d39555647010',
    name: 'Twin peaks',
    applicationThumbnailUrl:
      'https://apps-repository.staging.getmira.com/2058e0f9-8d7e-4ca0-946d-cb93e3f305b2/1.0.6/thumbnail.svg',
    thumbnailUrl:
      'https://mira-screenshot-staging.s3.amazonaws.com/2ebe4b64-f4bf-475f-a2ea-d39555647010/20190130015259624388',
    iconUrl:
      'https://apps-repository.staging.getmira.com/2058e0f9-8d7e-4ca0-946d-cb93e3f305b2/1.0.6/icon.svg',
    applicationName: 'Pictures',
    isLoading: false,
    isLocked: true,
  },
  {
    id: '7fbd6b58-ecb1-4094-8300-084457061380',
    name: 'Trinity',
    applicationThumbnailUrl:
      'https://apps-repository.staging.getmira.com/2058e0f9-8d7e-4ca0-946d-cb93e3f305b2/1.0.6/thumbnail.svg',
    thumbnailUrl:
      'https://mira-screenshot-staging.s3.amazonaws.com/7fbd6b58-ecb1-4094-8300-084457061380/20190130013911465151',
    iconUrl:
      'https://apps-repository.staging.getmira.com/2058e0f9-8d7e-4ca0-946d-cb93e3f305b2/1.0.6/icon.svg',
    applicationName: 'Pictures',
    isLoading: true,
  },
];

initialState = {
  selectedItemId: undefined,
};

<App>
  <PresentationsList presentations={presentations} onOrderChange={console.log}>
    {({ presentation, onRemove, itemId }) => (
      <PresentationsList.Item
        presentation={presentation}
        isLoading={presentation.isLoading}
        hasError={presentation.hasError}
        isLocked={presentation.isLocked}
        lockedMessage="Contact your administrator to update this content."
        onEdit={() => this.editPresentation(device.id, presentation.id)}
        onClick={() =>
          setState(({ selectedItemId }) => ({
            selectedItemId: itemId === selectedItemId ? '' : itemId,
          }))
        }
        onRemove={onRemove}
        selected={itemId === state.selectedItemId}
      />
    )}
  </PresentationsList>
</App>;
```
