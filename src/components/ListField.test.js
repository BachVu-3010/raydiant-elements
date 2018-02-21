import React from 'react';
import { mount } from 'enzyme';
import HelperText from './Typography/HelperText';
import { ListField } from './ListField';

const defaultProps = () => ({
  label: 'label',
  value: [],
  onItemClick: () => {},
  onLabelClick: () => {},
  onChange: () => {},
  onAdd: () => {},
  classes: {
    label: 'label',
    itemLabel: 'itemLabel',
  },
});

test('Should render list of strings', () => {
  const props = defaultProps();
  props.value = ['a', 'b', 'c'];

  const wrapper = mount(<ListField {...props} />);
  const items = wrapper.find('.itemLabel');
  expect(items.length).toEqual(3);
  expect(items.at(0).text()).toEqual('a');
  expect(items.at(1).text()).toEqual('b');
  expect(items.at(2).text()).toEqual('c');
});

test('Should render list of objects', () => {
  const props = defaultProps();
  props.value = [{ label: 'a' }, { label: 'b' }, { label: 'c' }];
  props.getItemLabel = item => item.label;

  const wrapper = mount(<ListField {...props} />);
  const items = wrapper.find('.itemLabel');
  expect(items.length).toEqual(3);
  expect(items.at(0).text()).toEqual('a');
  expect(items.at(1).text()).toEqual('b');
  expect(items.at(2).text()).toEqual('c');
});

test('Should render children instead of list', () => {
  const props = defaultProps();
  props.value = ['a', 'b', 'c'];

  const wrapper = mount(
    <ListField {...props}>
      <div className="unique" />
    </ListField>
  );
  expect(wrapper.find('.itemLabel').length).toEqual(0);
  expect(wrapper.find('.unique').length).toEqual(1);
});

test('Should call onChange with reordered items', () => {
  const props = defaultProps();
  props.value = ['a', 'b', 'c'];
  props.onChange = jest.fn();

  const wrapper = mount(<ListField {...props} />);
  wrapper
    .instance()
    .onDragEnd({ source: { index: 0 }, destination: { index: 1 } });
  expect(props.onChange).toHaveBeenCalledTimes(1);
  expect(props.onChange).toBeCalledWith(['b', 'a', 'c']);
});

test('Should render error', () => {
  const props = defaultProps();
  props.error = true;
  props.helperText = 'error';

  const wrapper = mount(<ListField {...props} />);
  const helperText = wrapper.find(HelperText);
  expect(helperText.length).toEqual(1);
  expect(helperText.props().error).toEqual(props.error);
  expect(helperText.text()).toEqual(props.helperText);
});

test('Should button with onAdd click handler', () => {
  const props = defaultProps();
  props.value = ['a', 'b', 'c'];
  props.onAdd = jest.fn();

  const wrapper = mount(<ListField {...props} />);
  const button = wrapper.find({ onClick: props.onAdd });
  expect(button.length).toEqual(1);
});

test('Should call onLabelClick', () => {
  const props = defaultProps();
  props.value = ['a', 'b', 'c'];
  props.onLabelClick = jest.fn();

  const wrapper = mount(<ListField {...props} />);
  const label = wrapper.find('.label');
  label.simulate('click');
  expect(props.onLabelClick).toHaveBeenCalledTimes(1);
});

test('Should call onItemClick with index', () => {
  const props = defaultProps();
  props.value = ['a', 'b', 'c'];
  props.onItemClick = jest.fn();

  const wrapper = mount(<ListField {...props} />);
  const items = wrapper.find('.itemLabel');
  items.at(0).simulate('click');
  expect(props.onItemClick).toHaveBeenCalledTimes(1);
  expect(props.onItemClick).toBeCalledWith(0);
});
