import React from 'react';
import { mount } from 'enzyme';
import PresentationBuilderPreview from './PresentationBuilderPreview';
import PresentationPreview from './PresentationPreview';
import Tab from './Tab';

const defaultProps = () => ({
  application: {
    name: 'application',
    thumbnail_url: 'thumbnail_url',
    icon_url: 'icon_url',
    strings: {
      description: 'description',
    },
  },
  onPreviewModeChange: () => {},
});

test('Children passed through', () => {
  const props = defaultProps();
  const wrapper = mount(
    <PresentationBuilderPreview {...props}>
      <div className="unique" />
    </PresentationBuilderPreview>
  );

  expect(wrapper.find('.unique').length).toEqual(1);
});

test('Should render presentation preview', () => {
  const props = defaultProps();
  const wrapper = mount(
    <PresentationBuilderPreview {...props}>
      <div />
    </PresentationBuilderPreview>
  );

  expect(wrapper.find(PresentationPreview).length).toEqual(1);
});

test('Should call onPreviewModeChange', () => {
  const props = defaultProps();
  props.onPreviewModeChange = jest.fn();
  const wrapper = mount(
    <PresentationBuilderPreview {...props}>
      <div className="unique" />
    </PresentationBuilderPreview>
  );
  const horizontalTab = wrapper.find(Tab).at(0);
  const verticalTab = wrapper.find(Tab).at(1);
  horizontalTab.simulate('click');
  verticalTab.simulate('click');
  expect(props.onPreviewModeChange).toHaveBeenCalledTimes(2);
  expect(props.onPreviewModeChange.mock.calls[0][0]).toEqual('horizontal');
  expect(props.onPreviewModeChange.mock.calls[1][0]).toEqual('vertical');
});
