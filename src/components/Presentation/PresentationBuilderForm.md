```jsx
initialState = {
  presentation: {
    duration: 10,
    application_vars: {
      string: 'string',
      text: 'text',
      boolean: true,
      number: 1,
      selection: 'opt1',
      date: '2020-02-02',
      categories: [],
      list: [
        { name: 'Item1', list2: [{ name: 'SubItem1' }, { name: 'SubItem2' }] },
        { name: 'Item2', list2: [{ name: 'SubItem1' }] },
      ],
    },
  },
  appVersion: {
    name: 'My Application',
    configurable_duration: true,
    presentation_properties: [
      {
        name: 'string',
        type: 'string',
        helper_text: 'This link will help you',
        helper_link: 'http://google.com',
        constraints: { maxlength: 10 },
      },
      { name: 'text', type: 'text', constraints: { maxlength: 100 } },
      { name: 'link', type: 'link', url: 'http://google.com' },
      {
        name: 'number',
        type: 'number',
        min: 1,
        max: 10,
        default: 1,
        helper_text: 'Here is some helpful text',
      },
      { name: 'boolean', type: 'boolean' },
      { name: 'date', type: 'date' },
      {
        name: 'file',
        type: 'file',
        optional: true,
        constraints: { 'content-types': [] },
      },
      {
        name: 'selection',
        type: 'selection',
        exclusive: true,
        options: [
          { name: 'Option 1', value: 'opt1' },
          { name: 'Option 2', value: 'opt2' },
        ],
      },
      {
        name: 'themes',
        type: 'theme',
      },
      {
        name: 'categories',
        singular_name: 'category',
        type: 'array',
        optional: true,
        properties: [
          { name: 'category', type: 'string' },
          {
            name: 'items',
            singular_name: 'item',
            type: 'array',
            optional: true,
            properties: [
              { name: 'item', type: 'string' },
              { name: 'price', type: 'string', optional: true },
              { name: 'description', type: 'text', optional: true },
              {
                name: 'variants',
                singular_name: 'variant',
                type: 'array',
                optional: true,
                properties: [
                  { name: 'variant', type: 'string' },
                  { name: 'price', type: 'string', default: '$1.00' },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'items',
        singular_name: 'item',
        type: 'array',
        optional: true,
        helper_text: 'Drag to reorder',
        properties: [{ name: 'name', type: 'string' }],
      },
    ],
    strings: {
      string: 'String',
      link: 'Link',
      text: 'Text',
      number: 'Number',
      boolean: 'Boolean',
      file: 'File',
      selection: 'Selection',
      themes: 'Themes',
      categories: 'Categories',
      category: 'Category',
      items: 'Items',
      item: 'Item',
      price: 'Price',
      description: 'Description',
      variants: 'Variants',
      variant: 'Variant',
      name: 'Name',
      label: 'Label',
      price: 'Price',
      list: 'List',
      link: 'Hacky Link',
    },
  },
  themes: [
    { id: 'a', name: 'Clean' },
    { id: 'b', name: 'Showroom' },
    { id: 'c', name: 'Slate' },
    { id: 'd', name: 'Custom' },
  ],
};

<Column>
  <div
    style={{
      height: 600,
      width: 316,
      margin: '0 auto',
      display: 'flex',
    }}
  >
    <PresentationBuilderForm
      validate
      presentation={state.presentation}
      appVersion={state.appVersion}
      themes={state.themes}
      onChange={presentation => console.log('changed', presentation)}
      onSubmit={presentation => console.log('submit', presentation)}
      onCancel={() => console.log('cancel')}
      warnings={['Oops! This is a warning.']}
    />
  </div>
</Column>;
```
