const path = require('path');
const glob = require('glob');

const getCorePath = component =>
  `./lib/components/core/${component}/${component}.tsx`;

const getApplicationPath = component =>
  `./lib/components/application/${component}/${component}.tsx`;

module.exports = {
  title: 'Mira Elements',
  pagePerSection: true,
  sections: [
    {
      name: 'Core',
      components: () => [
        getCorePath('AlertIcon'),
        getCorePath('Breadcrumb'),
        getCorePath('Button'),
        getCorePath('Checkbox'),
        getCorePath('CircularProgress'),
        getCorePath('ColorField'),
        getCorePath('DateField'),
        getCorePath('FileField'),
        getCorePath('Icon'),
        getCorePath('ListField'),
        getCorePath('Modal'),
        getCorePath('NumberField'),
        getCorePath('Popover'),
        getCorePath('SelectField'),
        getCorePath('SuccessIcon'),
        getCorePath('Switch'),
        getCorePath('Tab'),
        getCorePath('Text'),
        getCorePath('TextField'),
        getCorePath('Theme'),
        getCorePath('Column'),
        getCorePath('Row'),
        getCorePath('Hidden'),
      ],
    },
    {
      name: 'Application',
      components: () => [
        getApplicationPath('App'),
        getApplicationPath('Menu'),
        getApplicationPath('OneThirdLayout'),
        getApplicationPath('Titlebar'),
      ],
    },
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
