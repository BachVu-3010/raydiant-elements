import { mount } from 'enzyme';
import * as React from 'react';
import ThemeProvider from '../../core/ThemeProvider';
import ThemeSelector from '../../core/ThemeSelector';
import { testSelector } from '../../helpers';
import theme from '../../theme';
import AffectedDevicesPopover from './AffectedDevicesPopover';

test('Should set test ids', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <ThemeSelector color="light">
        <AffectedDevicesPopover
          open
          devices={[]}
          onClose={() => {
            return;
          }}
          testId="testId"
        />
      </ThemeSelector>
    </ThemeProvider>,
  );

  expect(wrapper.find('button' + testSelector('testId-ok'))).toHaveLength(1);
});

test('Should set test ids for deleting', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <ThemeSelector color="light">
        <AffectedDevicesPopover
          open
          devices={[]}
          onClose={() => {
            return;
          }}
          testId="testId"
          isDeleting
        />
      </ThemeSelector>
    </ThemeProvider>,
  );

  expect(wrapper.find('button' + testSelector('testId-delete'))).toHaveLength(
    1,
  );
});
