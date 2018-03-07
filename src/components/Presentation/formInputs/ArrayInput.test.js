import React from 'react';
import { shallow } from 'enzyme';
import { ArrayInput } from './ArrayInput';
import Breadcrumbs from '../../Breadcrumbs';
import Breadcrumb from '../../Breadcrumb';
import ListField from '../../ListField';
import Popover from '../../Popover';

const defaultProps = () => ({
  label: 'Items',
  singularLabel: 'Item',
  helperText: undefined,
  value: [],
  parentValue: undefined,
  properties: [],
  parentProperties: [],
  propPath: ['application_vars', 'items'],
  selectedPath: [],
  strings: {},
  onChange: () => {},
  onAdd: () => {},
  onRemove: () => {},
  setSelectedPath: () => {},
  renderAppVars: () => {},
  classes: {
    remove: 'remove',
  },
});

test('Should render Breadcrumbs if root crumb', () => {
  const props = defaultProps();
  const wrapper = shallow(<ArrayInput {...props} />);
  expect(wrapper.find(Breadcrumbs).length).toEqual(1);
  expect(wrapper.find(Breadcrumb).length).toEqual(1);
});

test('Should not render Breadcrumbs if not root crumb', () => {
  const props = defaultProps();
  props.parentValue = { string: 'string' };
  props.parentProperties = [{ name: 'string', type: 'string' }];
  const wrapper = shallow(<ArrayInput {...props} />);
  expect(wrapper.find(Breadcrumbs).length).toEqual(0);
});

test('Should render ListField', () => {
  const props = defaultProps();
  const wrapper = shallow(<ArrayInput {...props} />);
  expect(wrapper.find(ListField).length).toEqual(1);
});

test('Should call renderAppVars with last crumb', () => {
  const props = defaultProps();
  props.selectedPath = ['application_vars', 'items', 0];
  props.value = [{ string: 'string' }];
  props.properties = [{ name: 'string', type: 'string' }];
  props.renderAppVars = jest.fn();

  shallow(<ArrayInput {...props} />);
  expect(props.renderAppVars).toHaveBeenCalledTimes(1);
  expect(props.renderAppVars).toHaveBeenCalledWith(
    props.value[0],
    props.properties,
    props.strings,
    ['application_vars', 'items', 0], // last crumb
    props.properties, // parent properties for next render
    props.value[0] // parent value for next render
  );
});

test('Should set selected path on item click', () => {
  const props = defaultProps();
  props.value = [{ string: 'string' }];
  props.properties = [{ name: 'string', type: 'string' }];
  props.setSelectedPath = jest.fn();

  const wrapper = shallow(<ArrayInput {...props} />);
  const listField = wrapper.find(ListField);
  listField.props().onItemClick(0);
  expect(props.setSelectedPath).toHaveBeenCalledTimes(1);
  expect(props.setSelectedPath).toHaveBeenCalledWith([...props.propPath, 0]);
});

test('Should set selected path on crumb click', () => {
  const props = defaultProps();
  props.selectedPath = ['application_vars', 'items', 0];
  props.value = [{ string: 'string' }];
  props.properties = [{ name: 'string', type: 'string' }];
  props.setSelectedPath = jest.fn();

  const wrapper = shallow(<ArrayInput {...props} />);
  const breadcrumbs = wrapper.find(Breadcrumb);
  expect(breadcrumbs.length).toEqual(2);
  breadcrumbs.get(0).props.onClick();
  expect(props.setSelectedPath).toHaveBeenCalledTimes(1);
  expect(props.setSelectedPath).toHaveBeenCalledWith([]); // root crumb resets to []

  props.setSelectedPath.mockReset();
  breadcrumbs.get(1).props.onClick();
  expect(props.setSelectedPath).toHaveBeenCalledTimes(1);
  expect(props.setSelectedPath).toHaveBeenCalledWith([
    'application_vars',
    'items',
    0,
  ]);
});

test('Should call onAdd and set selected path on add', () => {
  const props = defaultProps();
  props.value = [{ string: 'string' }];
  props.properties = [{ name: 'string', type: 'string' }];
  props.onAdd = jest.fn();
  props.setSelectedPath = jest.fn();

  const wrapper = shallow(<ArrayInput {...props} />);
  const listField = wrapper.find(ListField);
  listField.props().onAdd();
  expect(props.onAdd).toHaveBeenCalledTimes(1);
  expect(props.setSelectedPath).toHaveBeenCalledTimes(1);
  expect(props.setSelectedPath).toHaveBeenCalledWith([...props.propPath, 1]);
});

test('Should open delete popover on remove', () => {
  const props = defaultProps();
  props.selectedPath = ['application_vars', 'items', 0];
  props.value = [{ string: 'string' }];
  props.properties = [{ name: 'string', type: 'string' }];

  const wrapper = shallow(<ArrayInput {...props} />);
  const remove = wrapper.find('.remove');
  expect(remove.length).toEqual(1);
  remove.props().onClick();
  expect(wrapper.find(Popover).length).toEqual(1);
});

test('Should call onRemove and set selected path on remove', () => {
  const props = defaultProps();
  props.selectedPath = ['application_vars', 'items', 0];
  props.value = [{ string: 'string' }];
  props.properties = [{ name: 'string', type: 'string' }];
  props.onRemove = jest.fn();
  props.setSelectedPath = jest.fn();

  const wrapper = shallow(<ArrayInput {...props} />);
  const remove = wrapper.find('.remove');
  expect(remove.length).toEqual(1);
  remove.props().onClick();
  expect(wrapper.find(Popover).length).toEqual(1);

  const removeConfirm = wrapper.find({ color: 'destructive' });
  expect(removeConfirm.length).toEqual(1);
  removeConfirm.props().onClick();
  expect(props.onRemove).toHaveBeenCalledTimes(1);
  expect(props.setSelectedPath).toHaveBeenCalledTimes(1);
  expect(props.setSelectedPath).toHaveBeenCalledWith(props.propPath);
});
