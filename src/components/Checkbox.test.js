import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from './Checkbox';
import FormControlLabel from './FormControlLabel';
import toggleTest from '../test_helpers/toggle.test';

toggleTest(Checkbox);

test('Round', () => {
  const getVariant = c =>
    c.find(FormControlLabel).prop('control').props.variant;
  let component;
  // Checkbox without label -> round
  component = shallow(<Checkbox />);
  expect(getVariant(component)).toBe('round');
  // Checkbox with label -> default
  component = shallow(<Checkbox>Check it out</Checkbox>);
  expect(getVariant(component)).toBe(null);
  // Checkbox with labelledBy -> default
  component = shallow(<Checkbox labelledBy="foo" />);
  expect(getVariant(component)).toBe(null);
});
