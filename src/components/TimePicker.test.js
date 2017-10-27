import React from 'react';
import { shallow } from 'enzyme';
import TimePicker from './TimePicker';
import TextField from './TextField';

test('onTimeChange', () => {
  const onTimeChange = jest.fn();
  const component = shallow(
    <TimePicker label="changes" onTimeChange={onTimeChange} value="00:00" />
  );
  const input = component.find(TextField);
  // onChange shouldn't be called on changes. It should only be called on blur.
  input.simulate('change', { target: { value: '00:01' } });
  expect(onTimeChange.mock.calls.length).toEqual(0);
  // onChange should only be called on blur if the value's changed.
  input.simulate('blur');
  expect(onTimeChange.mock.calls.length).toEqual(1);
  component.setProps({ value: '00:01' });
  input.simulate('blur');
  expect(onTimeChange.mock.calls.length).toEqual(1);
});
