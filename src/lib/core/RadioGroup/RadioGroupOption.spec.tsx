import { mount } from 'enzyme';
import * as React from 'react';
import { testAttrName } from '../../helpers';
import theme from '../../theme';
import ThemeProvider from '../ThemeProvider';
import ThemeSelector from '../ThemeSelector';
import RadioGroupOption from './RadioGroupOption';

test('Should set test id on option', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <ThemeSelector color="light">
        <RadioGroupOption testId="testId" label="label" value="value" />
      </ThemeSelector>
    </ThemeProvider>,
  );

  expect(wrapper.find('input').prop(testAttrName)).toEqual('testId');
});
