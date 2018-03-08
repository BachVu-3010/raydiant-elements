import React from 'react';
import FileField from '../../FileField';
import { propTypes, defaultProps } from './propTypes';

const FileInput = ({
  label,
  value,
  autoFocus,
  propPath,
  helperText,
  constraints,
  optional,
  hasError,
  onChange,
  onRemove,
  onFile,
  onBlur,
}) => {
  const accept = constraints['content-types'].join(',');
  // FileField accepts a FileList as it's value so for existing uploads to display
  // the file name in the input we need to create a fake FileList.
  let fileList;
  if (value && value.filename) {
    fileList = [{ name: value.filename }];
  }

  return (
    <FileField
      label={label}
      value={fileList}
      helperText={helperText}
      error={hasError}
      autoFocus={autoFocus}
      accept={accept}
      optional={optional}
      onChange={e => {
        const files = e.target.files;
        if (files && files.length) {
          // We don't support multiple files per presentation property.
          const file = files[0];
          const fileValue = {
            filename: file.name,
            url: URL.createObjectURL(file),
            'content-type': file.type,
            'content-length': file.size,
          };

          onFile(file);
          onChange(fileValue);
        }
      }}
      onClear={() => {
        onFile(null);
        onRemove(propPath);
      }}
      onBlur={onBlur}
    />
  );
};

FileInput.propTypes = propTypes;
FileInput.defaultProps = defaultProps;

export default FileInput;
