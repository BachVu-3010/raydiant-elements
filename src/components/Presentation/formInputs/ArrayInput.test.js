import React from 'react';
import { shallow } from 'enzyme';
import { ArrayInput } from './ArrayInput';
import ListField from '../../ListField';
import Button from '../../Button';

const defaultProps = () => ({
  propPath: [],
  selectedPath: [],
  properties: [],
  strings: {},
  label: 'List',
  value: [],
  helperText: null,
  hasError: false,
  onChange: () => {},
  onAdd: () => {},
  onRemove: () => {},
  setSelectedPath: () => {},
  renderAppVars: () => {},
  classes: {
    form: 'form',
  },
});

test('Should render ArrayInput', () => {
  const props = defaultProps();
  const wrapper = shallow(<ArrayInput {...props} />);
  expect(wrapper.find(ListField).length).toEqual(1);
});

test('Should call renderAppVars with selected item', () => {
  const props = defaultProps();
  props.propPath = ['list'];
  props.selectedPath = ['list', 0];
  props.value = [{ string: 'string' }];
  props.properties = [{ name: 'string', type: 'string' }];
  props.renderAppVars = jest.fn();

  shallow(<ArrayInput {...props} />);
  expect(props.renderAppVars).toHaveBeenCalledTimes(1);
  expect(props.renderAppVars).toHaveBeenCalledWith(
    props.value[0],
    props.properties,
    props.strings,
    ['list', 0]
  );
});

test('Should call renderAppVars with child list', () => {
  const props = defaultProps();
  props.propPath = ['list'];
  props.selectedPath = ['list', 0, 'list2', 1];
  props.value = [{ string: 'string', list2: [{ string: 'string' }] }];
  props.properties = [
    { name: 'string', type: 'string' },
    {
      name: 'list2',
      type: 'array',
      properties: [{ name: 'string', type: 'string' }],
    },
  ];
  props.renderAppVars = jest.fn();

  shallow(<ArrayInput {...props} />);
  expect(props.renderAppVars).toHaveBeenCalledTimes(1);
  expect(props.renderAppVars).toHaveBeenCalledWith(
    props.value[0],
    [props.properties[1]], // Only renders the child list properties
    { list2: 'string' }, // Overrides the label with the selected item
    ['list', 0]
  );
});

test('Should set selected path on item click', () => {
  const props = defaultProps();
  props.propPath = ['list'];
  props.selectedPath = ['list', 0];
  props.value = [{ string: 'string' }];
  props.properties = [{ name: 'string', type: 'string' }];
  props.setSelectedPath = jest.fn();

  const wrapper = shallow(<ArrayInput {...props} />);
  const listField = wrapper.find(ListField);
  listField.props().onItemClick(0);
  expect(props.setSelectedPath).toHaveBeenCalledTimes(1);
  expect(props.setSelectedPath).toHaveBeenCalledWith(['list', 0]);
});

test('Should set selected path to empty on label click when list is top-most crumb', () => {
  const props = defaultProps();
  props.propPath = ['list'];
  props.selectedPath = ['list', 0];
  props.value = [{ string: 'string' }];
  props.properties = [{ name: 'string', type: 'string' }];
  props.setSelectedPath = jest.fn();

  const wrapper = shallow(<ArrayInput {...props} />);
  const listField = wrapper.find(ListField);
  listField.props().onLabelClick();
  expect(props.setSelectedPath).toHaveBeenCalledTimes(1);
  expect(props.setSelectedPath).toHaveBeenCalledWith([]);
});

test('Should set selected path to previous crumb on label click for nested lists', () => {
  const props = defaultProps();
  props.propPath = ['list', 0, 'list2'];
  props.selectedPath = ['list', 0, 'list2', 0];
  props.value = [{ string: 'string' }];
  props.properties = [{ name: 'string', type: 'string' }];
  props.setSelectedPath = jest.fn();

  const wrapper = shallow(<ArrayInput {...props} />);
  const listField = wrapper.find(ListField);
  listField.props().onLabelClick();
  expect(props.setSelectedPath).toHaveBeenCalledTimes(1);
  expect(props.setSelectedPath).toHaveBeenCalledWith(['list', 0]);
});

test('Should call onAdd and set selected path on add', () => {
  const props = defaultProps();
  props.propPath = ['list'];
  props.selectedPath = ['list', 0];
  props.value = [{ string: 'string' }];
  props.properties = [{ name: 'string', type: 'string' }];
  props.onAdd = jest.fn();
  props.setSelectedPath = jest.fn();

  const wrapper = shallow(<ArrayInput {...props} />);
  const listField = wrapper.find(ListField);
  listField.props().onAdd();
  expect(props.onAdd).toHaveBeenCalledTimes(1);
  expect(props.setSelectedPath).toHaveBeenCalledTimes(1);
  expect(props.setSelectedPath).toHaveBeenCalledWith(['list', 1]);
});

test('Should call onRemove and set selected path on add', () => {
  const props = defaultProps();
  props.propPath = ['list'];
  props.selectedPath = ['list', 0];
  props.value = [{ string: 'string' }];
  props.properties = [{ name: 'string', type: 'string' }];
  props.onRemove = jest.fn();
  props.setSelectedPath = jest.fn();

  const wrapper = shallow(<ArrayInput {...props} />);
  const removeBtn = wrapper.find(Button);
  removeBtn.props().onClick();
  expect(props.onRemove).toHaveBeenCalledTimes(1);
  expect(props.setSelectedPath).toHaveBeenCalledTimes(1);
  expect(props.setSelectedPath).toHaveBeenCalledWith(['list']);
});
