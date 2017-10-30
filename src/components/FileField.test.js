import React from 'react';
import { mount } from 'enzyme';
import MUITextField from 'material-ui/TextField';
import FileField from './FileField';

test('FileField basics', () => {
  const mockFileList = [{ name: 'image.png' }];
  const component = mount(
    <FileField
      label="Image"
      name="image"
      value={mockFileList}
      accept="image/*"
    />,
  );
  const textField = component.find(MUITextField);
  expect(textField.props().label).toEqual('Image');
  expect(textField.props().value).toEqual('image.png');

  const input = component.find('input[type="file"]');
  expect(input.length).toEqual(1);
  expect(input.props().accept).toEqual('image/*');
  expect(input.props().name).toEqual('image');
});

test('Multiple', () => {
  const component = mount(<FileField label="File" value={null} multiple />);
  expect(component.find('input[type="file"]').props().multiple).toEqual(true);
});

test('Disabled', () => {
  const component = mount(<FileField label="File" disabled value={null} />);
  const textField = component.find(MUITextField);
  expect(textField.props().disabled).toEqual(true);
  expect(component.find('input[type="file"]').length).toEqual(0);
});