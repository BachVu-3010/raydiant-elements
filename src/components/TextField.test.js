import React from 'react';
import { render, mount } from 'enzyme';
import TestRenderer from 'react-test-renderer/shallow';
import sinon from 'sinon';
import TextField from './TextField';

test('Value passed through', () => {
  const tf = render(<TextField label="label" value="test" />);
  expect(tf.find('input').prop('value')).toEqual('test');
});

test('onChange', () => {
  const onChange = sinon.spy();
  const component = mount(<TextField label="changes" onChange={onChange} />);
  component.find('input').simulate('change');
  expect(onChange.callCount).toEqual(1);
});

test('Snapshot', () => {
  const testRenderer = new TestRenderer();
  const component = testRenderer.render(
    <TextField
      value="a value"
      label="a label"
    />,
  );
  expect(component).toMatchSnapshot();
});
