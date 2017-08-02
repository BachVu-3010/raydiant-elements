const pkg = require('./package.json');
const components = require('./components.js');

const componentMap = {};
for (const c in components.components) {
  const comp = components.components[c];
  comp.categories.forEach(cat => {
    componentMap[cat] = componentMap[cat] || [];
    componentMap[cat].push(`./src/components/${c}.js`);
  });
}

let sections = [
  {
    name: 'Mira Elements',
    content: './README.md',
  },
  {
    name: 'Usage',
    content: './usage.md',
  },
  {
    name: 'Development',
    content: './development.md',
  },
];
// Build the component sections based on components.json
sections = sections.concat(
  components.categories.map(cat => ({
    name: cat,
    content: `./styleguide/docs/sections/${cat}.md`,
    components: () => componentMap[cat] || [],
  }))
);

module.exports = {
  sections,
  // require: ['./styleguide/styles.css'],
  title: `Mira Elements v${pkg.version}`,
  getExampleFilename: f => f.replace(/\.jsx?$/, '.md'),
  theme: {
    fontFamily: { base: ['Roboto', 'sans-serif'] },
  },
  webpackConfig: {
    module: {
      loaders: [
        // Babel loader, will use your project’s .babelrc
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        // Other loaders that are needed for your components
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader?modules'
        }
      ]
    }
  }
};
