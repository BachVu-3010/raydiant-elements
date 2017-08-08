const TOGGLE = 'Selection Controls';
const TEXTINPUT = 'Text Inputs';
module.exports = {
  // This is the order that categories will appear in the generated docs.
  categories: [TOGGLE, TEXTINPUT],
  components: {
    Checkbox: { categories: [TOGGLE] },
    Radio: { categories: [TOGGLE] },
    Switch: { categories: [TOGGLE] },
  },
};
