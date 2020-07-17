import * as P from '../../lib/presentation/PresentationTypes';

// Replace {{propName}} with the prop values in the URL.
//   ie. ?access_token={{accessToken}} => ?access_token=abc123
const replacePropNameWithValue = (
  url: string,
  parentValue: P.ApplicationVariables,
  encodeURI= false,
) => {
  return url.replace(
    /\{\{(.*?)\}\}/g,
    (_, propName) => (encodeURI ? encodeURIComponent(parentValue[propName]) : parentValue[propName]) || '',
  );
};
export default replacePropNameWithValue;
