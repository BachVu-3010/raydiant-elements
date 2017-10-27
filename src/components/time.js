import moment from 'moment';

export const toISOFragment = (hours, minutes) =>
  `${hours < 10 ? `0${hours}` : hours}:${minutes < 10
    ? `0${minutes}`
    : minutes}`;
// Returns the hours and minutes (and optional seconds) from as ISO
// time fragment (hh:mm:ss.sss)
export const fromISOFragment = fragment => {
  const match = fragment.match(/^(\d+):(\d+)(:(\d+(\.\d+)?))?/);
  if (!match) {
    return { hours: null, minutes: null, seconds: null };
  }
  return {
    hours: parseInt(match[1], 10),
    minutes: parseInt(match[2], 10),
    seconds: parseFloat(match[4], 10),
  };
};

export const formatTime = (hours, minutes, format) =>
  moment(`2017-01-01T${toISOFragment(hours, minutes)}`).format(format);

export const parseTime = time => {
  if (time) {
    time.trim().toLowerCase();
    let hours;
    let minutes;
    const match = time.match(/^(\d+)([: ](\d+))?\s*([ap]m?)?$/i);
    if (match) {
      hours = parseInt(match[1], 10);
      minutes = match[2] ? parseInt(match[3], 10) : 0;
      // Check for am/pm
      if (match[4]) {
        if (match[4].match(/^p/i) && hours < 12) {
          hours += 12;
        } else if (match[4].match(/^a/i) && hours >= 12) {
          hours -= 12;
        }
      }

      return { hours: hours % 24, minutes: minutes % 60 };
    }
  }
  return null;
};
