import { mount } from 'enzyme';
import * as React from 'react';
import { testAttrName } from '../../../helpers';
import theme from '../../../theme';
import ThemeProvider from '../ThemeProvider';
import ThemeSelector from '../ThemeSelector';
import Link from './Link';

test('Should set test id on button', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <ThemeSelector type="light">
        <Link href="test" testId="testId" />
      </ThemeSelector>
    </ThemeProvider>,
  );
  expect(wrapper.find('a').prop(testAttrName)).toEqual('testId');
});
