const isElementSelected = (
  value: string | string[],
  child: React.ReactElement<any>,
) => {
  const optionId = child.props.value;
  if (Array.isArray(value)) {
    return value.includes(optionId);
  }
  return value === optionId;
};

export default isElementSelected;
