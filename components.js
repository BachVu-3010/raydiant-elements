const STARTUP = 'Getting Started';
const COLORS = 'Colors';
const TOGGLE = 'Selection Controls';
const BUTTON = 'Buttons';
const TEXTINPUT = 'Text Inputs';
const TYPOGRAPHY = 'Typography';
const LAYOUT = 'Layout';
const MODALS = 'Modals';
module.exports = {
  // This is the order that categories will appear in the generated docs.
  categories: [
    STARTUP,
    TOGGLE,
    BUTTON,
    TEXTINPUT,
    MODALS,
    TYPOGRAPHY,
    LAYOUT,
    COLORS,
  ],
  components: {
    Checkbox: { categories: [TOGGLE] },
    Radio: { categories: [TOGGLE] },
    Switch: { categories: [TOGGLE] },
    Button: { categories: [BUTTON] },
    TextField: { categories: [TEXTINPUT] },
    NumberField: { categories: [TEXTINPUT] },
    SelectField: { categories: [TEXTINPUT] },
    Typography: {
      Title: { categories: [TYPOGRAPHY] },
      Heading1: { categories: [TYPOGRAPHY] },
      Heading2: { categories: [TYPOGRAPHY] },
      Heading3: { categories: [TYPOGRAPHY] },
      Heading4: { categories: [TYPOGRAPHY] },
      Note: { categories: [TYPOGRAPHY] },
      Anchor: { categories: [TYPOGRAPHY] },
    },
    App: { categories: [STARTUP, LAYOUT] },
    Flex: { categories: [LAYOUT] },
    Column: { categories: [LAYOUT] },
    Row: { categories: [LAYOUT] },
    Dialog: { categories: [MODALS] },
    DialogContent: { categories: [MODALS] },
    DialogTitle: { categories: [MODALS] },
    DialogActions: { categories: [MODALS] },
  },
};
