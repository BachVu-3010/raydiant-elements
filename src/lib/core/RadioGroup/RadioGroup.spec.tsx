import { mount } from 'enzyme';
import * as React from 'react';
import { testAttrName } from '../../helpers';
import theme from '../../theme';
import ThemeProvider from '../ThemeProvider';
import ThemeSelector from '../ThemeSelector';
import RadioGroup from './RadioGroup';

test('Should set test id on group', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <ThemeSelector color="light">
        <RadioGroup testId="testId" />
      </ThemeSelector>
    </ThemeProvider>,
  );

  expect(wrapper.find('div[role="radiogroup"]').prop(testAttrName)).toEqual(
    'testId',
  );
});
