const linkToBool = (state, setState) => m => ({
  checked: state[m],
  onChange: () => setState({ [m]: !state[m] }),
});

module.exports = linkToBool;
