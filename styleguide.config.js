const path = require('path');
const glob = require('glob');

const getPath = component =>
  `./lib/components/core/${component}/${component}.tsx`;

module.exports = {
  title: 'Mira Elements',
  pagePerSection: true,
  sections: [
    {
      name: 'Core',
      components: () => [
        getPath('AlertIcon'),
        getPath('Breadcrumb'),
        getPath('Button'),
        getPath('Checkbox'),
        getPath('CircularProgress'),
        getPath('ColorField'),
        getPath('DateField'),
        getPath('FileField'),
        getPath('Icon'),
        getPath('ListField'),
        getPath('Modal'),
        getPath('NumberField'),
        getPath('Popover'),
        getPath('SelectField'),
        getPath('SuccessIcon'),
        getPath('Switch'),
        getPath('Tab'),
        getPath('TextField'),
      ],
    },
    { name: 'Presentation', components: () => [] },
  ],
  styleguideDir: path.join(__dirname, 'build/styleguide'),
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'styleguide/components/ThemeWrapper'),
  },
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
  propsParser: require('react-docgen-typescript').withDefaultConfig({
    propFilter: { skipPropsWithoutDoc: true },
  }).parse,
  styles: {
    StyleGuide: {
      '@global html': {
        fontSize: 14,
      },
    },
    Playground: {
      preview: {
        padding: 0,
        border: 0,

        '& > div': {
          width: '100%',
          display: 'flex',
        },
      },
    },
  },
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500',
        },
      ],
    },
  },
};
