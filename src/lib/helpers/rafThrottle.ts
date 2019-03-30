import throttle from './throttle';

const rafThrottle = <T extends any[], U>(fn: (...args: T) => U) =>
  throttle(fn, cb => requestAnimationFrame(cb));

export default rafThrottle;
