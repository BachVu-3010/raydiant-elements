const path = require('path');
const glob = require('glob');

module.exports = {
  title: 'Mira Elements',
  sections: [
    {
      name: 'Buttons',
      components: () => ['./components/Button/Button.tsx'],
    },
    {
      name: 'Inputs',
      components: () => [
        './components/TextField/TextField.tsx',
        './components/NumberField/NumberField.tsx',
        './components/SelectField/SelectField.tsx',
        './components/FileField/FileField.tsx',
        './components/ColorField/ColorField.tsx',
        './components/Checkbox/Checkbox.tsx',
        './components/Switch/Switch.tsx',
      ],
    },
    {
      name: 'Icons',
      components: () => ['./components/Icon/Icon.tsx'],
    },
  ],
  styleguideDir: path.join(__dirname, 'styleguide/build'),
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
