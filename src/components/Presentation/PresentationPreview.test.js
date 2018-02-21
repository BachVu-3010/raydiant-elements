import React from 'react';
import { mount } from 'enzyme';
import PresentationPreview, {
  getLayoutProperties,
} from './PresentationPreview';

test('Children passed through', () => {
  const wrapper = mount(
    <PresentationPreview>
      <div className="unique" />
    </PresentationPreview>
  );

  expect(wrapper.find('.unique').length).toEqual(1);
});

test('Fits horizontal preview in landscape container', () => {
  const result = getLayoutProperties(800, 600, 'horizontal');
  const scale = 800 / 1920;
  expect(result).toEqual({
    width: 1920,
    height: 1080,
    marginLeft: -(1920 / 2) * scale,
    marginTop: -(1080 / 2) * scale,
    transform: `scale(${scale})`,
  });
});

test('Fits horizontal preview in portrait container', () => {
  const result = getLayoutProperties(600, 800, 'horizontal');
  const scale = 600 / 1920;
  expect(result).toEqual({
    width: 1920,
    height: 1080,
    marginLeft: -(1920 / 2) * scale,
    marginTop: -(1080 / 2) * scale,
    transform: `scale(${scale})`,
  });
});

test('Fits vertical preview in landscape container', () => {
  const result = getLayoutProperties(800, 600, 'vertical');
  const scale = 600 / 1920;
  expect(result).toEqual({
    width: 1080,
    height: 1920,
    marginLeft: -(1080 / 2) * scale,
    marginTop: -(1920 / 2) * scale,
    transform: `scale(${scale})`,
  });
});

test('Fits vertical preview in portait container', () => {
  const result = getLayoutProperties(600, 800, 'vertical');
  const scale = 800 / 1920;
  expect(result).toEqual({
    width: 1080,
    height: 1920,
    marginLeft: -(1080 / 2) * scale,
    marginTop: -(1920 / 2) * scale,
    transform: `scale(${scale})`,
  });
});
