const path = require('path');

const componentPathGetter = pathname => component =>
  path.join(__dirname, 'src', 'lib', pathname, component, `${component}.tsx`);

const getApplicationPath = componentPathGetter('application');
const getCorePath = componentPathGetter('core');
const getDevicesPath = componentPathGetter('devices');
const getLayoutPath = componentPathGetter('layout');
const getLoginPath = componentPathGetter('login');
const getPresentationPath = componentPathGetter('presentation');
const getSchedulePath = componentPathGetter('schedule');
const getSequencePath = componentPathGetter('sequence');
const getTypographyPath = componentPathGetter('typography');
const getPlaylistPath = componentPathGetter('playlist');

module.exports = {
  title: 'Raydiant Elements',
  theme: {
    maxWidth: 'none',
  },
  pagePerSection: true,
  sections: [
    {
      name: 'Core',
      components: () => [
        getCorePath('ActionBar'),
        getCorePath('AlertIcon'),
        getCorePath('App'),
        getCorePath('Breadcrumb'),
        getCorePath('Button'),
        getCorePath('Card'),
        getCorePath('Checkbox'),
        getCorePath('CircularProgress'),
        getCorePath('ColorField'),
        getCorePath('DateField'),
        getCorePath('Divider'),
        getCorePath('ExpansionPanel'),
        getCorePath('FileDropper'),
        getCorePath('FileField'),
        getCorePath('Icon'),
        getCorePath('ImagePickerField'),
        getCorePath('SVGIcon'),
        getCorePath('Link'),
        getCorePath('ListField'),
        getCorePath('Logo'),
        getCorePath('Menu'),
        getCorePath('Modal'),
        getCorePath('MultiSelectField'),
        getCorePath('NumberField'),
        getCorePath('Popover'),
        getCorePath('RecurrenceSelector'),
        getCorePath('RadioGroup'),
        getCorePath('SelectField'),
        getCorePath('SuccessIcon'),
        getCorePath('Switch'),
        getCorePath('Tabs'),
        getCorePath('TextField'),
        getCorePath('ThemeSelector'),
        getCorePath('TimeField'),
        getCorePath('ToggleButtonGroup'),
      ],
    },
    {
      name: 'Layout',
      components: () => [
        getLayoutPath('Center'),
        getLayoutPath('Column'),
        getLayoutPath('Hidden'),
        getLayoutPath('Grid'),
        getLayoutPath('OneThirdLayout'),
        getLayoutPath('Row'),
        getLayoutPath('Scrollable'),
        getLayoutPath('Spacer'),
        getLayoutPath('SpaceAround'),
      ],
    },
    {
      name: 'Login',
      components: () => [getLoginPath('LoginScreen')],
    },
    {
      name: 'Devices',
      components: () => [
        getDevicesPath('DeviceList'),
        getDevicesPath('AddToGroupPopover'),
        getDevicesPath('AffectedScreensPopover'),
        getDevicesPath('ManageGroupPopover'),
        getDevicesPath('AddDevice'),
        getDevicesPath('AddDevicePopover'),
        getDevicesPath('ScreenPreview'),
      ],
    },
    {
      name: 'Presentation',
      components: () => [
        getPresentationPath('PresentationBuilder'),
        getPresentationPath('PresentationCard'),
        getPresentationPath('PresentationPreview'),
        getPresentationPath('PresentationThumbnail'),
        getPresentationPath('PresentationsList'),
      ],
    },
    {
      name: 'Application',
      components: () => [
        getApplicationPath('ApplicationCard'),
        getApplicationPath('ApplicationCTA'),
      ],
    },
    {
      name: 'Playlist',
      components: () => [getPlaylistPath('PlaylistCard')],
    },
    {
      name: 'Schedule',
      components: () => [getSchedulePath('ScheduleContentPopover')],
    },
    {
      name: 'Typography',
      components: () => [
        getTypographyPath('Heading1'),
        getTypographyPath('Heading2'),
        getTypographyPath('Text'),
        getTypographyPath('Title'),
      ],
    },
    {
      name: 'Sequence',
      components: () => [
        getSequencePath('OccurrenceList'),
        getSequencePath('SequenceSchedule'),
      ],
    },
  ],
  styleguideDir: path.join(__dirname, 'build/styleguide'),
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styleguide/components/ThemeWrapper'),
  },
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
  propsParser: require('react-docgen-typescript').withDefaultConfig({
    propFilter: { skipPropsWithoutDoc: true },
  }).parse,
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
        },
      },
    },
  },
};
