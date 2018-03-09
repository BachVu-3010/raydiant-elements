// Returns the label of an array input's selected item with
// the provided property definition.
export default (item, properties, defaultLabel) => {
  // Use the first property as the label.
  const prop = properties[0];
  let label = item ? item[prop.name] : null;

  if (label === '' || label === undefined || label === null) {
    label = defaultLabel;
  } else if (prop.type === 'array') {
    label = label.join(', ');
  } else {
    // Ensure label is a string.
    label = `${label}`;
  }

  return label;
};
