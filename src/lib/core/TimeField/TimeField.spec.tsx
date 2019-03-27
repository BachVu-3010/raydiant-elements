import { mount } from 'enzyme';
import * as React from 'react';
import { testSelector } from '../../helpers';
import theme from '../../theme';
import ThemeProvider from '../ThemeProvider';
import ThemeSelector from '../ThemeSelector';
import TimeField from './TimeField';

test('Should set test id on TimeField', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <ThemeSelector color="light">
        <TimeField testId="testId" />
      </ThemeSelector>
    </ThemeProvider>,
  );
  expect(wrapper.find(testSelector('testId'))).toHaveLength(1);
});
