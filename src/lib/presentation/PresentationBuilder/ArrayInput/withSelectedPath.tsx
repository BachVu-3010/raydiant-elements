import * as React from 'react';
import * as T from '../../PresentationTypes';

export interface InjectedProps {
  selectedPath: T.Path;
  prevSelectedPath: T.Path;
  setSelectedPath: (path: T.Path) => void;
}

export interface AdditionalProps {
  onSelectedPathChange: (path: T.Path) => void;
}

interface WithSelectedPathState {
  selectedPath: T.Path;
  prevSelectedPath: T.Path;
}

// Subtract is being combined with type intersection to combine the
// component’s  own props with the HOCs own props, minus the props that
// are injected into the component.
// https://medium.com/@jrwebdev/react-higher-order-component-patterns-in-typescript-42278f7590fb
type Omit<O, K> = Pick<O, Exclude<keyof O, K>>;
type Subtract<O, K> = Omit<O, keyof K>;

const SelectedPathContext = React.createContext<InjectedProps>(null);

export default function withSelectedPath<OriginalProps extends {}>(
  Component: React.ComponentType<OriginalProps & InjectedProps>,
): React.ComponentClass<
  Subtract<OriginalProps, InjectedProps> & AdditionalProps
> {
  class WrappedComponent extends React.Component<
    OriginalProps & AdditionalProps,
    WithSelectedPathState
  > {
    state = {
      selectedPath: [] as T.Path,
      prevSelectedPath: [] as T.Path,
    };

    setSelectedPath = (selectedPath: T.Path) => {
      this.setState(state => ({
        selectedPath,
        prevSelectedPath: state.selectedPath,
      }));

      this.props.onSelectedPathChange(selectedPath);
    };

    render() {
      // Nested array inputs need to share the selectedPath state from the top
      // level array input. React's context feature is used to pass selectedPath
      // and setSelectedPath to child array inputs.
      return (
        <SelectedPathContext.Consumer>
          {context => {
            if (context) {
              // Context is defined so we know we're rendering a child array input.
              return (
                <Component
                  {...this.props}
                  selectedPath={context.selectedPath}
                  prevSelectedPath={context.prevSelectedPath}
                  setSelectedPath={context.setSelectedPath}
                />
              );
            }

            return (
              <SelectedPathContext.Provider
                value={{
                  selectedPath: this.state.selectedPath,
                  prevSelectedPath: this.state.selectedPath,
                  setSelectedPath: this.setSelectedPath,
                }}
              >
                <Component
                  {...this.props}
                  selectedPath={this.state.selectedPath}
                  prevSelectedPath={this.state.prevSelectedPath}
                  setSelectedPath={this.setSelectedPath}
                />
              </SelectedPathContext.Provider>
            );
          }}
        </SelectedPathContext.Consumer>
      );
    }
  }

  return WrappedComponent;
}
