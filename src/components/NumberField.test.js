import React from 'react';
import { render, mount } from 'enzyme';
import sinon from 'sinon';
import NumberField from './NumberField';

test('Value passed through', () => {
  const tf = render(<NumberField label="label" value={1} />);
  expect(tf.find('input').prop('value')).toEqual('1');
});

test('Min / max passed through', () => {
  const tf = mount(<NumberField label="label" value={1} min={0} max={2} />);
  const domNode = tf.find('input').getDOMNode();
  expect(domNode.getAttribute('min')).toEqual('0');
  expect(domNode.getAttribute('max')).toEqual('2');
});

test('onChange', () => {
  const onChange = sinon.spy();
  const component = mount(
    <NumberField label="changes" value={1} onChange={onChange} />,
  );
  component.find('input').simulate('change');
  expect(onChange.callCount).toEqual(1);
});
