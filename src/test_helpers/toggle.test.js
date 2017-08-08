import React from 'react';
import { render, mount } from 'enzyme';
import testRenderer from 'react-test-renderer';
import sinon from 'sinon';

module.exports = Component => {
  test('Children passed through', () => {
    let component = render(<Component>Yes or no</Component>);
    expect(component.text()).toEqual('Yes or no');
    component = render(<Component><span>Yes</span> or <span>no</span></Component>);
    expect(component.text()).toEqual('Yes or no');
  });

  test('Checked', () => {
    let component = render(<Component checked>Yes or no</Component>);
    expect(component.find('input').prop('checked')).toEqual(true);

    component = render(<Component>Yes or no</Component>);
    expect(component.find('input').prop('checked')).toEqual(false);
  });

  test('Disabled', () => {
    let component = render(<Component disabled>Disabled</Component>);
    expect(component.find('input').prop('disabled')).toEqual(true);
    component = render(<Component>Enabled</Component>);
    expect(component.find('input').prop('disabled')).toEqual(false);
  });

  test('onChange', () => {
    const onChange = sinon.spy();
    const component = mount(<Component onChange={onChange}>Changes</Component>);
    component.find('input').simulate('change');
    expect(onChange.callCount).toEqual(1);
  });

  test('Snapshot', () => {
    const component = testRenderer.create(<Component checked>Yes or no</Component>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
};
