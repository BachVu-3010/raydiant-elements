const path = require('path');
const glob = require('glob');

module.exports = {
  title: 'Mira Elements',
  components: () =>
    glob
      .sync(path.resolve(__dirname, 'components/**/*.tsx'))
      .filter(module => /\/[A-Z]\w*\.tsx$/.test(module)),
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
  propsParser: require('react-docgen-typescript').withDefaultConfig({
    propFilter: { skipPropsWithoutDoc: true },
  }).parse,
  styleguideDir: path.join(__dirname, 'styleguide/build'),
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'styleguide/ThemeWrapper'),
  },
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
          overflowX: 'auto',
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
