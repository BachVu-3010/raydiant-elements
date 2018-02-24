const path = require('path');
const pkg = require('./package.json');
const components = require('./components.js');

const componentMap = {};
const mapComponents = (comps, rel = '') => {
  Object.keys(comps).forEach(c => {
    const comp = comps[c];
    if (!comp.categories) {
      // Nested component
      mapComponents(comp, `${c}/`);
      return;
    }
    comp.categories.forEach(cat => {
      componentMap[cat] = componentMap[cat] || [];
      componentMap[cat].push(`./src/components/${rel}${c}.js`);
    });
  });
};
mapComponents(components.components);

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
const mappedCategories = components.categories.map(cat => ({
  name: cat,
  content: `./styleguide/docs/sections/${cat}.md`,
  components: () => componentMap[cat] || [],
}));
sections = sections.concat(mappedCategories);

module.exports = {
  sections,
  // require: ['./styleguide/styles.css'],
  require: ['moment'],
  title: `Mira Elements v${pkg.version}`,
  getExampleFilename: f => f.replace(/\.jsx?$/, '.md'),
  styleguideComponents: {
    StyleGuideRenderer: path.join(
      __dirname,
      'styleguide/components/StyleGuideRenderer'
    ),
    Wrapper: path.join(__dirname, 'styleguide/components/Wrapper'),
  },
  styleguideDir: './dist',
  template: path.join(__dirname, 'styleguide/index.html'),
  theme: {
    sidebarWidth: 240,
    color: {
      link: '#0683d4',
    },
    fontFamily: {
      base: 'Roboto,Noto,sans-serif',
    },
    fontSize: {
      base: 14,
      text: 14,
      small: 12,
      h1: 48,
      h2: 36,
      h3: 24,
      h4: 18,
      h5: 16,
      h6: 16,
    },
  },
  styles: {
    Playground: {
      preview: {
        padding: 0,
      },
    },
  },
};
