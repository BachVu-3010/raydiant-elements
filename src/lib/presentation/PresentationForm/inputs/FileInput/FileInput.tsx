import * as React from 'react';
import FileField from '../../../../core/FileField';
import * as T from '../../../PresentationTypes';
import FakeFileList from './FakeFileList';

interface FileInputProps {
  label: string;
  value: T.FileUpload;
  constraints: {
    'content-types'?: string[];
  };
  helperText: React.ReactNode;
  error?: boolean;
  disabled?: boolean;
  onChange: (value: T.FileUpload, file: File) => any;
}

const FileInput: React.SFC<FileInputProps> = ({
  label,
  value,
  constraints,
  helperText,
  error,
  disabled,
  onChange,
}) => {
  // FileField accepts a FileList as it's value so for existing uploads to display
  // the file name in the input we need to create a fake FileList.
  let fakeFileList: FakeFileList;
  if (value && value.filename) {
    fakeFileList = new FakeFileList();
    fakeFileList.add(value.filename);
  }

  return (
    <FileField
      label={label}
      value={fakeFileList}
      helperText={helperText}
      error={error}
      disabled={disabled}
      accept={constraints['content-types']}
      onChange={fileList => {
        if (fileList && fileList.length) {
          // We don't support multiple files per presentation property.
          const file = fileList[0];

          onChange(
            // Convert to expected file upload structure for API.
            {
              filename: file.name,
              url: URL.createObjectURL(file),
              'content-type': file.type,
              'content-length': file.size,
            },
            // The raw file blob is passed separately to allow for uploading.
            file,
          );
        }
      }}
      onClear={() => onChange(null, null)}
    />
  );
};

export default FileInput;
