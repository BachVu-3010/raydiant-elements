const hasMissingChildValue = (
  prevChildren: Array<React.ReactElement<any>>,
  nextChildren: Array<React.ReactElement<any>>,
) => {
  if (prevChildren.length !== nextChildren.length) return true;

  return prevChildren.some(child => {
    const nextChildWithValue = nextChildren.find(
      nextChild => nextChild.props.value === child.props.value,
    );
    return !nextChildWithValue;
  });
};
export default hasMissingChildValue;
