import { mount } from 'enzyme';
import * as React from 'react';
import ThemeProvider from '../../core/ThemeProvider';
import ThemeSelector from '../../core/ThemeSelector';
import { testSelector } from '../../helpers';
import theme from '../../theme';
import App from '../App';
import Modal from './Modal';

test('Should set test ids', () => {
  const wrapper = mount(
    <App>
      <ThemeProvider theme={theme}>
        <ThemeSelector color="light">
          <Modal testId="testId" open={true} />
        </ThemeSelector>
      </ThemeProvider>
      ,
    </App>,
  );

  expect(wrapper.find(testSelector('testId'))).toHaveLength(1);
  expect(wrapper.find(testSelector('testId-overlay'))).toHaveLength(1);
});
