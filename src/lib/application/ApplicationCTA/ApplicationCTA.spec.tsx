import { mount } from 'enzyme';
import * as React from 'react';
import ThemeProvider from '../../core/ThemeProvider';
import ThemeSelector from '../../core/ThemeSelector';
import { testSelector } from '../../helpers';
import theme from '../../theme';
import * as A from '../ApplicationTypes';
import ApplicationCTA from './ApplicationCTA';

test('Should set test ids', () => {
  const application1: A.Application = {
    id: 'id1',
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

  const application2: A.Application = {
    ...application1,
    id: 'id2',
  };

  const application3: A.Application = {
    ...application1,
    id: 'id3',
  };

  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <ThemeSelector color="light">
        <ApplicationCTA
          title="title"
          applications={[application1, application2, application3]}
          testId="testId"
          onApplicationClick={() => {
            return;
          }}
        />
      </ThemeSelector>
    </ThemeProvider>,
  );

  expect(wrapper.find(testSelector('testId-id1'))).toHaveLength(1);
  expect(wrapper.find(testSelector('testId-id2'))).toHaveLength(1);
  expect(wrapper.find(testSelector('testId-id3'))).toHaveLength(1);
  expect(wrapper.find('button' + testSelector('testId-more'))).toHaveLength(1);
});
