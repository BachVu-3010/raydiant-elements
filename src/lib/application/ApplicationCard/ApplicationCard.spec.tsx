import { mount } from 'enzyme';
import * as React from 'react';
import ThemeProvider from '../../core/ThemeProvider';
import ThemeSelector from '../../core/ThemeSelector';
import { testSelector } from '../../helpers';
import theme from '../../theme';
import * as A from '../ApplicationTypes';
import ApplicationCard from './ApplicationCard';

test('Should set test ids', () => {
  const application: A.Application = {
    id: 'id',
    currentAppVersion: {
      id: 'id1',
      name: 'name',
      presentationProperties: [],
      thumbnailUrl:
        'https://apps-repository.staging.getmira.com/3390b318-e587-42ae-8dac-6bcb2c1c36be/1.3.3/thumbnail.svg',
      strings: {
        callToAction: 'Add Menu',
      },
    },
  };

  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <ThemeSelector color="light">
        <ApplicationCard application={application} testId="testId" />
      </ThemeSelector>
    </ThemeProvider>,
  );

  expect(wrapper.find('button' + testSelector('testId'))).toHaveLength(1);
});
