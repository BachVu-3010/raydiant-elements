import { mount } from 'enzyme';
import * as React from 'react';
import ThemeProvider from '../../core/ThemeProvider';
import ThemeSelector from '../../core/ThemeSelector';
import { testSelector } from '../../helpers';
import theme from '../../theme';
import PlaylistThumbnail from './PlaylistThumbnail';

test('Should set test ids', () => {
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <ThemeSelector color="light">
        <PlaylistThumbnail
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
