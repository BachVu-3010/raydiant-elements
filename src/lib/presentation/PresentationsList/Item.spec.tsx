import { mount } from 'enzyme';
import * as React from 'react';
import { v4 } from 'uuid';
import ThemeProvider from '../../core/ThemeProvider';
import ThemeSelector from '../../core/ThemeSelector';
import { testSelector } from '../../helpers';
import theme from '../../theme';
import Item from './Item';

test('Should set test ids', () => {
  const presentation = {
    id: v4(),
    themeId: 'theme_id',
    name: 'name',
    iconUrl: '',
    thumbnailUrl: '',
    applicationName: 'application_name',
    applicationThumbnailUrl: '',
    applicationVariables: {},
    hasDynamicThumbnails: false,
    appVersionId: '',
  };
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <ThemeSelector color="light">
        <Item
          testId="testId"
          presentation={presentation}
          onRemove={() => {
            return;
          }}
          selected
        />
      </ThemeSelector>
    </ThemeProvider>,
  );

  expect(wrapper.find(testSelector('testId'))).toHaveLength(1);
  expect(wrapper.find(testSelector('testId-remove'))).toHaveLength(1);
});
