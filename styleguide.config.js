const path = require('path');
const pkg = require('./package.json');
const components = require('./components.js');

const componentMap = {};
Object.keys(components.components).forEach(c => {
  const comp = components.components[c];
  comp.categories.forEach(cat => {
    componentMap[cat] = componentMap[cat] || [];
    componentMap[cat].push(`./src/components/${c}.js`);
  });
});

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
  styleguideComponents: {
    StyleGuideRenderer: path.join(__dirname, 'styleguide/components/StyleGuide'),
    Wrapper: path.join(__dirname, 'styleguide/components/Wrapper'),
  },
  styleguideDir: './dist',
};
