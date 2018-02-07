import React from 'react';
import { mount, shallow } from 'enzyme';
import PresentationBuilderForm from './PresentationBuilderForm';
import Switch from './Switch';
import Anchor from './Typography/Anchor';
import NumberField from './NumberField';
import SelectField from './SelectField';
import FileField from './FileField';
import DatePicker from './DatePicker';
import TextField from './TextField';

const findProps = (wrapper, componentClass, props) =>
  wrapper
    .find(componentClass)
    .map(component => component.props())
    .filter(componentProps =>
      Object.keys(props).every(prop => componentProps[prop] === props[prop])
    );

const defaultProps = () => ({
  presentation: {
    name: 'name',
    duration: 10,
    application_vars: {
      boolean: true,
      number: 4,
      text: 'text',
      selection: 'selection',
      file: {
        filename: 'filename',
        url: 'url',
      },
      date: '2020-02-02',
      string: 'string',
    },
  },
  application: {
    name: 'application',
    thumbnail_url: 'thumb',
    icon_url: 'icon',
    configurable_duration: true,
    presentation_properties: [
      { name: 'boolean', type: 'boolean' },
      { name: 'number', type: 'number', constraints: { min: 0, max: 10 } },
      {
        name: 'text',
        type: 'text',
        optional: true,
        constraints: { maxlength: 10 },
      },
      {
        name: 'selection',
        type: 'selection',
        options: [{ label: 'selection', value: 'selection' }],
      },
      {
        name: 'file',
        type: 'file',
        constraints: { 'content-types': ['accept1', 'accept2'] },
      },
      { name: 'date', type: 'date' },
      {
        name: 'string',
        type: 'string',
        helper_text: 'helperText',
        helper_link: 'helperLink',
        constraints: { maxlength: 10 },
      },
    ],
    strings: {},
  },
  minDuration: 10,
  onChange: () => {},
  onSubmit: () => {},
  onBlur: () => {},
  onFile: () => {},
});

test('Should render form', () => {
  const props = defaultProps();
  const wrapper = mount(<PresentationBuilderForm {...props} />);
  expect(
    findProps(wrapper, TextField, { label: 'Name', value: 'name' }).length
  ).toEqual(1);
  expect(
    findProps(wrapper, NumberField, { label: 'Duration', value: 10 }).length
  ).toEqual(1);
  // Presentation properties
  expect(wrapper.find(Switch).length).toEqual(1);
  expect(
    findProps(wrapper, NumberField, { label: 'number', value: 4 }).length
  ).toEqual(1);
  expect(
    findProps(wrapper, TextField, { label: 'text', value: 'text' }).length
  ).toEqual(1);
  expect(
    findProps(wrapper, SelectField, {
      label: 'selection',
      value: 'selection',
    }).length
  ).toEqual(1);
  expect(
    findProps(wrapper, FileField, {
      label: 'file',
      accept: 'accept1,accept2',
    }).length
  ).toEqual(1);
  expect(
    findProps(wrapper, DatePicker, {
      label: 'date',
      value: '2020-02-02',
    }).length
  ).toEqual(1);

  const tf = findProps(wrapper, TextField, {
    label: 'string',
    value: 'string',
  });
  expect(tf.length).toEqual(1);
  expect(tf[0].helperText.type === Anchor);
});

test('Should not render duration field for dynamic duration', () => {
  const props = defaultProps();
  props.application.configurable_duration = false;
  const wrapper = shallow(<PresentationBuilderForm {...props} />);
  expect(findProps(wrapper, NumberField, { label: 'Duration' }).length).toEqual(
    0
  );
});

test('Should call onChange with updated presentation application variable', () => {
  const props = defaultProps();
  props.onChange = jest.fn();
  const wrapper = mount(<PresentationBuilderForm {...props} />);

  const input = wrapper.find({ type: 'text', value: 'string' });
  input.simulate('change', { target: { value: 'changed' } });

  expect(props.onChange).toHaveBeenCalledTimes(1);
  expect(props.onChange.mock.calls[0][0].application_vars.string).toEqual(
    'changed'
  );
  const prop = props.application.presentation_properties.find(
    p => p.name === 'string'
  );
  expect(props.onChange.mock.calls[0][1]).toEqual(prop);
  expect(props.onChange.mock.calls[0][2]).toEqual('changed');
});

test('Should call onBlur', () => {
  const props = defaultProps();
  props.onBlur = jest.fn();
  const wrapper = mount(<PresentationBuilderForm {...props} />);
  const input = wrapper.find({ type: 'text', value: 'string' });
  input.simulate('blur');
  expect(props.onBlur).toHaveBeenCalledTimes(1);
});

test('Should call onSubmit when submitting valid presentation', () => {
  const props = defaultProps();
  props.onSubmit = jest.fn();
  const wrapper = shallow(<PresentationBuilderForm {...props} />);
  wrapper
    .dive()
    .instance()
    .handleSubmit();
  expect(props.onSubmit).toHaveBeenCalledTimes(1);
  expect(props.onSubmit.mock.calls[0][0]).toEqual(props.presentation);
});

test('Should not call onSubmit when submitting invalid presentation', () => {
  const props = defaultProps();
  props.onSubmit = jest.fn();
  delete props.presentation.application_vars.string;
  const wrapper = shallow(<PresentationBuilderForm {...props} />);
  wrapper
    .dive()
    .instance()
    .handleSubmit();
  expect(props.onSubmit).toHaveBeenCalledTimes(0);
});

test('Should call onFile with new file', () => {
  // jsdom doesn't currently support URL.createObjectURL
  // https://github.com/jsdom/jsdom/issues/1721
  global.URL.createObjectURL = () => 'object-url';
  const props = defaultProps();
  props.onFile = jest.fn();
  const wrapper = mount(<PresentationBuilderForm {...props} />);
  const input = wrapper.find({ type: 'file' });
  const file = {
    name: 'name',
    type: 'image/png',
    size: 1,
  };
  input.simulate('change', {
    target: {
      files: [file],
    },
  });
  expect(props.onFile).toHaveBeenCalledTimes(1);
  expect(props.onFile.mock.calls[0]).toEqual(['file', file]);
});
