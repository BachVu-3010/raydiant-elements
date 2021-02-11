import * as React from 'react';

interface EmbeddedFrameProps {
  src: string;
  onMessage: (type: string, payload: object) => void;
}

interface EmbeddedFrameState {}

interface EmbeddedFrameMessageEvent extends MessageEvent {
  data: {
    type: string;
    payload: object;
    namespace: string;
  };
}

class EmbeddedFrame extends React.Component<
  EmbeddedFrameProps,
  EmbeddedFrameState
> {
  static defaultProps = {};

  componentDidMount(): void {
    window.addEventListener('message', this.receiveMessage, false);
  }

  componentWillUnmount(): void {
    window.removeEventListener('message', this.receiveMessage);
  }

  isValidMessage = (event: EmbeddedFrameMessageEvent) =>
    event.data &&
    typeof event.data === 'object' &&
    event.data.namespace === 'raydiant-dash';

  receiveMessage = (event: EmbeddedFrameMessageEvent) => {
    if (!this.isValidMessage(event)) return;

    const { type, payload } = event.data;

    this.props.onMessage(type, payload);
  };

  render() {
    const { src } = this.props;

    return (
      <iframe
        title="embedded-frame"
        src={src}
        style={{ width: '100%', height: '100%', border: 0 }}
      />
    );
  }
}

export default EmbeddedFrame;
