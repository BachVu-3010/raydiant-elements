```js
const presentation = {
  id: 'a',
  appVersionId: 'b',
  name: 'New Presentation',
  themeId: 'c',
  applicationVariables: {
    facebookAuth: undefined,
    googleAuth: undefined,
    oAuth: undefined,
    string: 'string',
    text: 'text',
    boolean: true,
    number: 1,
    selection: 'opt1',
    multiselection: ['opt1'],
    date: '02/02/2020',
    categories: [],
    items: [
      { name: 'Item1', subitems: [{ name: 'SubItem1' }, { name: 'SubItem2' }] },
      { name: 'Item2', subitems: [{ name: 'SubItem1' }] },
    ],
  },
};

const appVersion = {
  id: 'b',
  name: 'My Mira App',
  presentationProperties: [
    {
      name: 'oAuth',
      type: 'oAuth',
      optional: true,
      auth_url:
        'https://spqbfu5spd.execute-api.us-west-2.amazonaws.com/staging/auth',
      verify_url:
        'https://spqbfu5spd.execute-api.us-west-2.amazonaws.com/staging/verify',
      verify_qs_param: 'access_token',
    },
    {
      name: 'facebookAuth',
      type: 'facebookAuth',
      optional: true,
      auth_url:
        'https://spqbfu5spd.execute-api.us-west-2.amazonaws.com/staging/auth',
      verify_url:
        'https://spqbfu5spd.execute-api.us-west-2.amazonaws.com/staging/verify',
      verify_qs_param: 'access_token',
      logout_url:
        'https://spqbfu5spd.execute-api.us-west-2.amazonaws.com/staging/logout',
      logout_qs_param: 'access_token',
    },
    {
      name: 'googleAuth',
      type: 'googleAuth',
      optional: true,
      auth_url:
        'https://rfx4m8d3g5.execute-api.us-east-1.amazonaws.com/dev/auth',
      verify_url:
        'https://rfx4m8d3g5.execute-api.us-east-1.amazonaws.com/dev/verify',
      verify_qs_param: 'access_token',
    },
    {
      name: 'calendars',
      type: 'selection',
      optional: true,
      multiple: true,
      helper_text: 'Log in with Google to select your calendar(s)',
      options_url:
        'https://rfx4m8d3g5.execute-api.us-east-1.amazonaws.com/dev/calendars?access_token={{googleAuth}}',
    },
    {
      name: 'string',
      type: 'string',
      helper_text: 'Max 10 characters',
      constraints: { maxlength: 10 },
    },
    {
      name: 'text',
      type: 'text',
      helper_text: 'Max 100 characters',
      constraints: { maxlength: 100 },
    },
    {
      name: 'number',
      type: 'number',
      constraints: {
        min: 1,
        max: 10,
      },
      default: 1,
      helper_text: 'Here is some helpful text',
    },
    { name: 'boolean', type: 'boolean', helper_text: 'Some helper text' },
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
      optional: true,
      options: [
        { name: 'Option 1', value: 'opt1' },
        { name: 'Option 2', value: 'opt2' },
      ],
    },
    {
      name: 'multiselection',
      type: 'selection',
      multiple: true,
      optional: true,
      options: [
        { name: 'Option 1', value: 'opt1' },
        { name: 'Option 2', value: 'opt2' },
        { name: 'Option 3', value: 'opt3' },
        { name: 'Option 4', value: 'opt4' },
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
      constraints: { max_items: 4 },
      properties: [
        { name: 'category', type: 'string' },
        {
          name: 'items',
          singular_name: 'item',
          type: 'array',
          optional: true,
          constraints: { max_items: 3 },
          properties: [
            { name: 'item', type: 'string' },
            { name: 'price', type: 'string', optional: true },
            { name: 'itemDescription', type: 'text', optional: true },
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
      constraints: { max_items: 4 },
      properties: [
        { name: 'name', type: 'string' },
        {
          name: 'subitems',
          singular_name: 'subitem',
          type: 'array',
          optional: true,
          constraints: { max_items: 6 },
          properties: [{ name: 'name', type: 'string' }],
        },
      ],
    },
  ],
  strings: {
    description: 'Create your first Mira app.',
    oAuth: 'Connect to Provider',
    calendars: 'Calendars',
    string: 'String',
    link: 'Link',
    text: 'Text',
    number: 'Number',
    boolean: 'Boolean',
    file: 'File',
    date: 'Date',
    selection: 'Selection',
    multiselection: 'Multi-Selection',
    themes: 'Themes',
    categories: 'Categories',
    category: 'Category',
    items: 'Items',
    item: 'Item',
    price: 'Price',
    itemDescription: 'Description',
    variants: 'Variants',
    variant: 'Variant',
    name: 'Name',
    label: 'Label',
    price: 'Price',
    list: 'List',
    subitem: 'Sub Item',
    subitems: 'Sub Items',
  },
  hasConfigurableDuration: false,
};

const themes = [
  { id: 'a', name: 'Clean' },
  { id: 'b', name: 'Showroom' },
  { id: 'c', name: 'Slate' },
  { id: 'd', name: 'Custom' },
];

initialState = {
  // Default to opening the modal for development by
  // appending &showModal to the url.
  // ie. http://localhost:6060/#/Presentation?id=presentationbuilder&showModal
  open: window.location.href.indexOf('showModal') >= 0,
  presentation,
};

<App>
  <Row inline>
    <Button
      icon="add"
      label="New Content"
      onClick={() => setState({ open: true })}
    />
  </Row>
  <Modal open={state.open}>
    <PresentationBuilder
      presentation={state.presentation}
      appVersion={appVersion}
      themes={themes}
      warnings={[
        <span>
          Oops! This is a warning.{' '}
          <Link href="http://google.com">Need help?</Link>
        </span>,
      ]}
      onChange={(...args) => console.log('change', ...args)}
      onCancel={() => setState({ open: false })}
      onSave={p => {
        console.log('save', p);
        setState({ open: false });
      }}
    >
      {(presentation, errors) =>
        errors.length === 0 && (
          <pre
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              padding: 10,
              overflow: 'auto',
              fontSize: 25,
            }}
          >
            {JSON.stringify(presentation, null, '  ')}
          </pre>
        )
      }
    </PresentationBuilder>
  </Modal>
</App>;
```
