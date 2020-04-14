const isElementSelected = (value: string[], child: React.ReactElement<any>) => {
  const optionId = child.props.value;
  return value.includes(optionId);
};

export default isElementSelected;
