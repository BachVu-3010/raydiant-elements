import React from 'react';

export default WrappedComponent =>
  class extends React.Component {
    state = { selectedPath: [] };
    render() {
      const { selectedPath } = this.state;
      return (
        <WrappedComponent
          {...this.props}
          selectedPath={selectedPath}
          setSelectedPath={path => this.setState({ selectedPath: path })}
        />
      );
    }
  };
