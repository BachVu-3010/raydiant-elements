const STARTUP = 'Getting Started';
const COLORS = 'Colors';
const TOGGLE = 'Selection Controls';
const BUTTON = 'Buttons';
const TEXTINPUT = 'Text Inputs';
const TYPOGRAPHY = 'Typography';
const LAYOUT = 'Layout';
const MODALS = 'Modals';
const PROGRESS = 'Progress';
const ICONS = 'Icons';
const POPOVERS = 'Popovers';
module.exports = {
  // This is the order that categories will appear in the generated docs.
  categories: [
    STARTUP,
    TOGGLE,
    BUTTON,
    TEXTINPUT,
    MODALS,
    POPOVERS,
    PROGRESS,
    TYPOGRAPHY,
    ICONS,
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
    FileField: { categories: [TEXTINPUT] },
    DatePicker: { categories: [TEXTINPUT] },
    TimePicker: { categories: [TEXTINPUT] },
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
    Popover: { categories: [POPOVERS] },
    PopoverAnchor: { categories: [POPOVERS] },
    CircularProgress: { categories: [PROGRESS] },
    Icon: { categories: [ICONS] },
    AlertIcon: { categories: [ICONS] },
    SuccessIcon: { categories: [ICONS] },
    SvgIcon: { categories: [ICONS] },
  },
};
