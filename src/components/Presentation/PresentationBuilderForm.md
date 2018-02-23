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
  application: {
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
        name: 'categories',
        type: 'array',
        properties: [
          { name: 'name', type: 'string' },
          {
            name: 'menuItems',
            type: 'array',
            properties: [
              { name: 'name', type: 'string' },
              {
                name: 'variants',
                type: 'array',
                properties: [
                  { name: 'label', type: 'string' },
                  { name: 'price', type: 'number', default: 1 },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'list',
        type: 'array',
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
      categories: 'Categories',
      menuItems: 'Menu Items',
      variants: 'Variants',
      name: 'Name',
      label: 'Label',
      price: 'Price',
      list: 'List',
      link: 'Hacky Link',
    },
  },
};

<Column>
  <div
    style={{
      height: 600,
      width: 400,
      margin: '0 auto',
      display: 'flex',
    }}
  >
    <PresentationBuilderForm
      validate
      presentation={state.presentation}
      application={state.application}
      onChange={presentation => console.log('changed', presentation)}
      onSubmit={presentation => console.log('submit', presentation)}
      onCancel={() => console.log('cancel')}
      warnings={['Oops! This is a warning.']}
    />
  </div>
</Column>;
```
