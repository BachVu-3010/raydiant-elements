import { mount } from 'enzyme';
import * as React from 'react';
import ThemeProvider from '../../core/ThemeProvider';
import ThemeSelector from '../../core/ThemeSelector';
import { testSelector } from '../../helpers';
import theme from '../../theme';
import * as P from '../PresentationTypes';

import PresentationThumbnail from './PresentationThumbnail';

test('Should set test ids', () => {
  const presentation: P.Presentation = {
    id: 'id',
    name: 'name',
    appVersionId: 'appVersionId',
    applicationThumbnailUrl: 'applicationThumbnailUrl',
    applicationName: 'applicationName',
    applicationVariables: {},
    thumbnailUrl: '',
    iconUrl: '',
    hasDynamicThumbnails: false,
  };

  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <ThemeSelector color="light">
        <PresentationThumbnail
          presentation={presentation}
          testId="testId"
          onSelect={() => {
            return;
          }}
          onEdit={() => {
            return;
          }}
          showControls
        />
      </ThemeSelector>
    </ThemeProvider>,
  );

  expect(wrapper.find(testSelector('testId'))).toHaveLength(1);
  expect(wrapper.find('button' + testSelector('testId-edit'))).toHaveLength(1);
});
