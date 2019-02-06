import { mount } from 'enzyme';
import * as React from 'react';
import ThemeProvider from '../../core/ThemeProvider';
import ThemeSelector from '../../core/ThemeSelector';
import { testSelector } from '../../helpers';
import theme from '../../theme';
import Checkbox from './Checkbox';

test('Should set test ids', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <ThemeSelector color="light">
        <Checkbox checked testId="testId" />
      </ThemeSelector>
    </ThemeProvider>,
  );

  expect(wrapper.find(testSelector('testId'))).toHaveLength(1);
});
