import React from 'react';
import { render, mount } from 'enzyme';
import Button from './Button';

test('Button basics', () => {
  const component = render(<Button>Testing</Button>);
  expect(component.find('button').length).toEqual(1);
  expect(component.text()).toEqual('Testing');
});

test('onClick', () => {
  const onClick = jest.fn();
  const component = mount(<Button onClick={onClick}>Testing</Button>);
  expect(!onClick.mock.called);
  component.find('button').simulate('click');
  expect(onClick.mock.calls.length).toBe(1);
});

test('Disabled', () => {
  let component = render(<Button disabled>Disabled</Button>);
  expect(component.find('button').prop('disabled')).toEqual(true);
  component = render(<Button>Enabled</Button>);
  expect(component.find('button').prop('disabled')).toEqual(false);
});
