import { mount } from 'enzyme';
import * as React from 'react';
import { testAttrName } from '../../../helpers';
import theme from '../../../theme';
import ThemeProvider from '../ThemeProvider';
import ThemeSelector from '../ThemeSelector';
import Button from './Button';

test('Should set test id on button', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <ThemeSelector type="light">
        <Button testId="testId" />
      </ThemeSelector>
    </ThemeProvider>,
  );
  expect(wrapper.find('button').prop(testAttrName)).toEqual('testId');
});
