import { parseTime, formatTime, toISOFragment, fromISOFragment } from './time';

describe('parseTime', () => {
  let parsed;

  it('should handle h:mm a', () => {
    parsed = parseTime('8:08 pm');
    expect(parsed.hours).toBe(20);
    expect(parsed.minutes).toBe(8);

    parsed = parseTime('8:08 am');
    expect(parsed.hours).toBe(8);
    expect(parsed.minutes).toBe(8);
  });

  it('should handle h:mm A', () => {
    parsed = parseTime('8:08 PM');
    expect(parsed.hours).toBe(20);
    expect(parsed.minutes).toBe(8);

    parsed = parseTime('8:08 AM');
    expect(parsed.hours).toBe(8);
    expect(parsed.minutes).toBe(8);
  });

  it('should handle h:mma', () => {
    parsed = parseTime('8:08pm');
    expect(parsed.hours).toBe(20);
    expect(parsed.minutes).toBe(8);
  });

  it('should handle h:mm', () => {
    parsed = parseTime('8:07');
    expect(parsed.hours).toBe(8);
    expect(parsed.minutes).toBe(7);
  });

  it('should handle hpm', () => {
    parsed = parseTime('8pm');
    expect(parsed.hours).toBe(20);
    expect(parsed.minutes).toBe(0);
  });

  it('should handle hp', () => {
    parsed = parseTime('8p');
    expect(parsed.hours).toBe(20);
    expect(parsed.minutes).toBe(0);
  });

  it('should handle ham', () => {
    parsed = parseTime('8am');
    expect(parsed.hours).toBe(8);
    expect(parsed.minutes).toBe(0);
  });

  it('should handle ha', () => {
    parsed = parseTime('8a');
    expect(parsed.hours).toBe(8);
    expect(parsed.minutes).toBe(0);
  });

  it('should handle h', () => {
    parsed = parseTime('8');
    expect(parsed.hours).toBe(8);
    expect(parsed.minutes).toBe(0);
  });

  it('should handle hh', () => {
    parsed = parseTime('20');
    expect(parsed.hours).toBe(20);
    expect(parsed.minutes).toBe(0);
  });

  it('should handle hh:mma', () => {
    parsed = parseTime('20:08pm');
    expect(parsed.hours).toBe(20);
    expect(parsed.minutes).toBe(8);
  });

  it('should handle 12am, which is a little weird if you think about it. Why is the lowest available time 12, I mean really?', () => {
    parsed = parseTime('12:00 am');
    expect(parsed.hours).toBe(0);
    expect(parsed.minutes).toBe(0);
  });

  it('should reject not-numbers', () => {
    parsed = parseTime('this is not a number');
    expect(parsed).toBe(null);
  });
});

describe('formatTime', () => {
  it('should handle h:mm a', () => {
    expect(formatTime(1, 2, 'h:mm a')).toBe('1:02 am');
    expect(formatTime(13, 2, 'h:mm a')).toBe('1:02 pm');
  });
});

describe('toISOFragment', () => {
  it('should handle double-digit values', () => {
    expect(toISOFragment(12, 13)).toBe('12:13');
  });
  it('should handle single-digit values', () => {
    expect(toISOFragment(1, 2)).toBe('01:02');
  });
});

describe('fromISOFragment', () => {
  let parsed;
  it('should parse hh:mm', () => {
    parsed = fromISOFragment('12:13');
    expect(parsed.hours).toBe(12);
    expect(parsed.minutes).toBe(13);
  });
  it('should parse hh:mm:ss', () => {
    parsed = fromISOFragment('12:13:14');
    expect(parsed.hours).toBe(12);
    expect(parsed.minutes).toBe(13);
    expect(parsed.seconds).toBe(14);
  });
  it('should parse hh:mm:ss.sss', () => {
    parsed = fromISOFragment('12:13:14.1516');
    expect(parsed.hours).toBe(12);
    expect(parsed.minutes).toBe(13);
    expect(parsed.seconds).toBe(14.1516);
  });
});
