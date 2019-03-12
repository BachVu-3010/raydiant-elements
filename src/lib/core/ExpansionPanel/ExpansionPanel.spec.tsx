import { mount } from 'enzyme';
import * as React from 'react';

import { testSelector } from '../../helpers';
import theme from '../../theme';
import ThemeProvider from '../ThemeProvider';
import ThemeSelector from '../ThemeSelector';
import ExpansionPanel from './ExpansionPanel';

test('Should set test id on button', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <ThemeSelector color="light">
        <ExpansionPanel>
          <ExpansionPanel.Summary testId="testId">
            First Item
          </ExpansionPanel.Summary>
          <ExpansionPanel.Details>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </ExpansionPanel.Details>
        </ExpansionPanel>
      </ThemeSelector>
    </ThemeProvider>,
  );

  expect(wrapper.find('div' + testSelector('testId'))).toHaveLength(1);
});
