import * as React from 'react';
import Link from '../../core/Link';
import * as A from '../../application/ApplicationTypes';
import * as P from '../PresentationTypes';

export interface PresentationFormHelperTextProps {
  property: A.PresentationProperty;
  path: P.Path;
  strings: A.Strings;
  error?: string;
}

const PresentationFormHelperText = ({
  property,
  path,
  strings,
  error,
}: PresentationFormHelperTextProps) => {
  if (error) {
    return <>{error}</>;
  }

  if (property.helper_link) {
    return (
      <Link target="_blank" href={property.helper_link}>
        {strings[property.helper_text] || property.helper_text}
      </Link>
    );
  }

  if (property.helper_text) {
    return <>{strings[property.helper_text] || property.helper_text}</>;
  }

  if (path.length <= 2 && property.type !== 'playlist') {
    // Inputs should always account for helper text spacing even if there isn't
    // any helper text displayed but only at the root (when path <= 2) or unless
    // its a playlist type.
    return <>&nbsp;</>;
  }

  return null;
};

export default PresentationFormHelperText;
