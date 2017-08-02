import React from 'react';
import { shallow } from 'enzyme';
import testRenderer from 'react-test-renderer';
import Checkbox from './Checkbox';
import sinon from 'sinon';

test('Children passed through', () => {
  let component = shallow(<Checkbox>Yes or no</Checkbox>);
  expect(component.text()).toEqual('Yes or no');
  component = shallow(<Checkbox><span>Yes</span> or <span>no</span></Checkbox>);
  expect(component.text()).toEqual('Yes or no');
});

test('Checked', () => {
  let component = shallow(<Checkbox checked>Yes or no</Checkbox>);
  expect(component.find('input').prop('checked')).toEqual(true);

  component = shallow(<Checkbox>Yes or no</Checkbox>);
  expect(component.find('input').prop('checked')).toEqual(false);
});

test('Disabled', () => {
  let component = shallow(<Checkbox disabled>Disabled</Checkbox>);
  expect(component.find('input').prop('disabled')).toEqual(true);
  component = shallow(<Checkbox>Enabled</Checkbox>);
  expect(component.find('input').prop('disabled')).toEqual(false);
});

test('onChange', () => {
  const onChange = sinon.spy();
  let component = shallow(<Checkbox onChange={onChange}>Changes</Checkbox>);
  component.find('input').simulate('change');
  expect(onChange.callCount).toEqual(1);
});

test('Snapshot', () => {
  const component = testRenderer.create(<Checkbox checked>Yes or no</Checkbox>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
