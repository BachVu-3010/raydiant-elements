import { mount } from 'enzyme';
import * as React from 'react';
import { testAttrName } from '../../helpers';
import theme from '../../theme';
import ThemeProvider from '../ThemeProvider';
import ThemeSelector from '../ThemeSelector';
import TextField from './TextField';

test('Should set test id on button', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <ThemeSelector color="light">
        <TextField label="test" testId="testId" />
      </ThemeSelector>
    </ThemeProvider>,
  );
  expect(wrapper.find('input').prop(testAttrName)).toEqual('testId');
});
