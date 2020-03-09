import * as React from 'react';

interface SequenceScheduleContextProps {
  setMonthVisibility?: (month: Date, isVisible: boolean) => void;
}

const SequenceScheduleContext = React.createContext<
  SequenceScheduleContextProps
>({
  setMonthVisibility: () => undefined,
});

export const withSequenceScheduleContext = <ComponentProps extends object>(
  ComponentType: React.ComponentType<
    ComponentProps & SequenceScheduleContextProps
  >,
) =>
  (class extends React.Component<ComponentProps> {
    render() {
      return (
        <SequenceScheduleContext.Consumer>
          {({ setMonthVisibility }) => (
            <ComponentType
              setMonthVisibility={setMonthVisibility}
              {...this.props}
            />
          )}
        </SequenceScheduleContext.Consumer>
      );
    }
  });

export default SequenceScheduleContext;
