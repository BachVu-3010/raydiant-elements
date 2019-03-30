const throttle = <T extends any[], U>(
  fn: (...args: T) => U,
  timeoutFn: (cb: () => void, ...args: T) => void,
) => {
  let blocked = false;
  let nextArgs: T = null;

  const unblock = () => {
    blocked = false;
    if (nextArgs) {
      fn(...nextArgs);
      nextArgs = null;
    }
  };

  return (...args: T) => {
    if (!blocked) {
      blocked = true;
      timeoutFn(unblock, ...args);
      fn(...args);
    } else {
      nextArgs = args;
    }
  };
};

export default throttle;
