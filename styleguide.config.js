const path = require('path');
const glob = require('glob');

const getCorePath = component =>
  path.join(__dirname, `src/lib/components/core/${component}/${component}.tsx`);

const getLayoutPath = component =>
  path.join(
    __dirname,
    `src/lib/components/layout/${component}/${component}.tsx`,
  );

const getApplicationPath = component =>
  path.join(
    __dirname,
    `src/lib/components/application/${component}/${component}.tsx`,
  );

module.exports = {
  title: 'Mira Elements',
  theme: {
    maxWidth: 'none',
  },
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
        getCorePath('Heading1'),
        getCorePath('Icon'),
        getCorePath('Link'),
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
        getCorePath('Title'),
      ],
    },
    {
      name: 'Layout',
      components: () => [
        getLayoutPath('Column'),
        getLayoutPath('Hidden'),
        getLayoutPath('OneThirdLayout'),
        getLayoutPath('Row'),
        getLayoutPath('Spacer'),
      ],
    },
    {
      name: 'Application',
      components: () => [
        getApplicationPath('App'),
        getApplicationPath('LoginScreen'),
        getApplicationPath('Logo'),
        getApplicationPath('Menu'),
        getApplicationPath('Titlebar'),
      ],
    },
  ],
  styleguideDir: path.join(__dirname, 'build/styleguide'),
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styleguide/components/ThemeWrapper'),
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
