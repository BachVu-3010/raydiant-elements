// Returns the label of an array input's selected item with
// the provided property definition.
export default (item, prop) => {
  let label = item[prop.name];

  if (label === '' || label === undefined || label === null) {
    label = ' ';
  } else if (prop.type === 'array') {
    label = label.join(', ');
  } else {
    // Ensure label is a string.
    label = `${label}`;
  }

  return label;
};
