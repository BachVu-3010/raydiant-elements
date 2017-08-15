const COLORS = 'Colors';
const TOGGLE = 'Selection Controls';
const BUTTON = 'Buttons';
const TEXTINPUT = 'Text Inputs';
module.exports = {
  // This is the order that categories will appear in the generated docs.
  categories: [TOGGLE, BUTTON, TEXTINPUT, COLORS],
  components: {
    Checkbox: { categories: [TOGGLE] },
    Radio: { categories: [TOGGLE] },
    Switch: { categories: [TOGGLE] },
    Button: { categories: [BUTTON] },
  },
};
