const path = require('path');
const glob = require('glob');

const getPath = component =>
  `./lib/components/core/${component}/${component}.tsx`;

module.exports = {
  title: 'Mira Elements',
  sections: [
    {
      name: 'Icons',
      components: () => [
        getPath('Icon'),
        getPath('AlertIcon'),
        getPath('SuccessIcon'),
      ],
    },
    {
      name: 'Buttons',
      components: () => [getPath('Button')],
    },
    {
      name: 'Inputs',
      components: () => [
        getPath('Checkbox'),
        getPath('Switch'),
        getPath('TextField'),
        getPath('NumberField'),
        getPath('SelectField'),
        getPath('FileField'),
        getPath('ColorField'),
        getPath('ListField'),
      ],
    },
    {
      name: 'Modals',
      components: () => [getPath('Modal'), getPath('Popover')],
    },
    {
      name: 'Navigation',
      components: () => [getPath('Tab')],
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
