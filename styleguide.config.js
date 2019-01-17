const path = require('path');

const getApplicationPath = component =>
  path.join(__dirname, `src/lib/application/${component}/${component}.tsx`);

const getCorePath = component =>
  path.join(__dirname, `src/lib/core/${component}/${component}.tsx`);

const getDevicesPath = component =>
  path.join(__dirname, `src/lib/devices/${component}/${component}.tsx`);

const getLayoutPath = component =>
  path.join(__dirname, `src/lib/layout/${component}/${component}.tsx`);

const getLoginPath = component =>
  path.join(__dirname, `src/lib/login/${component}/${component}.tsx`);

const getPresentationPath = component =>
  path.join(__dirname, `src/lib/presentation/${component}/${component}.tsx`);

const getSchedulePath = component =>
  path.join(__dirname, `src/lib/schedule/${component}/${component}.tsx`);

module.exports = {
  title: 'Mira Elements',
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
        getCorePath('Checkbox'),
        getCorePath('CircularProgress'),
        getCorePath('ColorField'),
        getCorePath('DateField'),
        getCorePath('FileField'),
        getCorePath('Heading1'),
        getCorePath('Icon'),
        getCorePath('Logo'),
        getCorePath('Link'),
        getCorePath('ListField'),
        getCorePath('Menu'),
        getCorePath('Modal'),
        getCorePath('MultiSelectField'),
        getCorePath('NumberField'),
        getCorePath('Popover'),
        getCorePath('SelectField'),
        getCorePath('SuccessIcon'),
        getCorePath('Switch'),
        getCorePath('Tabs'),
        getCorePath('Text'),
        getCorePath('TextField'),
        getCorePath('Title'),
        getCorePath('ThemeSelector'),
      ],
    },
    {
      name: 'Layout',
      components: () => [
        getLayoutPath('Column'),
        getLayoutPath('Hidden'),
        getLayoutPath('Grid'),
        getLayoutPath('OneThirdLayout'),
        getLayoutPath('Row'),
        getLayoutPath('Spacer'),
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
        getDevicesPath('DeviceSettingsForm'),
        getDevicesPath('DeviceGroupSettingsForm'),
      ],
    },
    {
      name: 'Presentation',
      components: () => [
        getPresentationPath('PresentationBuilder'),
        getPresentationPath('PresentationCard'),
        getPresentationPath('PresentationPreview'),
        getPresentationPath('PresentationThumbnail'),
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
      name: 'Schedule',
      components: () => [getSchedulePath('ScheduleContentPopover')],
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
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500',
        },
      ],
    },
  },
};
