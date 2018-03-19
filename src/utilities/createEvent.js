export default type => {
  if (typeof Event === 'function') {
    return new Event(type);
  }
  const event = document.createEvent('Event');
  event.initEvent(type, true, true);
  return event;
};
