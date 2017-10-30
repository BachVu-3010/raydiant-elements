/* globals SVGElement */
// Shim required for react-datepicker
export default () => {
  if (!('classList' in SVGElement.prototype)) {
    Object.defineProperty(SVGElement.prototype, 'classList', {
      get() {
        return {
          contains: className =>
            this.className.baseVal.split(' ').indexOf(className) !== -1,
        };
      },
    });
  }
};
