module.exports = {
  require: ['./styleguide/styles.css'],
  sections: [
    {
      name: 'Mira Elements',
      content: './README.md',
    },
    {
      name: 'Usage',
      content: './styleguide/docs/usage.md',
    },
    {
      name: 'Development',
      content: './styleguide/docs/development.md',
    },
    {
      name: 'UI Components',
      components: './src/components/*.js',
    },
  ],
  theme: {
    font: ['Roboto', 'sans-serif'],
  },
};
