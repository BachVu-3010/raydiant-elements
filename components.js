const COLORS = 'Colors';
const TOGGLE = 'Selection Controls';
const BUTTON = 'Buttons';
const TEXTINPUT = 'Text Inputs';
const TYPOGRAPHY = 'Typography';
const LAYOUT = 'Layout';
module.exports = {
  // This is the order that categories will appear in the generated docs.
  categories: [TOGGLE, BUTTON, TEXTINPUT, TYPOGRAPHY, LAYOUT, COLORS],
  components: {
    Checkbox: { categories: [TOGGLE] },
    Radio: { categories: [TOGGLE] },
    Switch: { categories: [TOGGLE] },
    Button: { categories: [BUTTON] },
    Typography: {
      Title: { categories: [TYPOGRAPHY] },
      Heading1: { categories: [TYPOGRAPHY] },
      Heading2: { categories: [TYPOGRAPHY] },
      Heading3: { categories: [TYPOGRAPHY] },
      Heading4: { categories: [TYPOGRAPHY] },
      Note: { categories: [TYPOGRAPHY] },
      Anchor: { categories: [TYPOGRAPHY] },
    },
    Row: { categories: [LAYOUT] },
  },
};
