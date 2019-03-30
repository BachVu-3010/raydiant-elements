const stateChanged = <S extends Record<string, any> = Record<string, any>>(
  newState: S,
  oldState: S,
) =>
  Object.keys(newState).some(
    (key: keyof typeof newState) => newState[key] !== oldState[key],
  );

export default stateChanged;
