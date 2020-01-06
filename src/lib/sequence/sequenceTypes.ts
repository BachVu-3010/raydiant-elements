export enum DaysOfWeek {
  SU = 'Sun',
  MO = 'Mon',
  TU = 'Tue',
  WE = 'Wed',
  TH = 'Thu',
  FR = 'Fri',
  SA = 'Sat',
}

export interface RecurrenceRule {
  dtstart: string;
  freq: Frequency;
  interval: number;
  byday?: Array<keyof typeof DaysOfWeek>;
  bymonthday?: number[];
}

export enum Frequency {
  weekly = 'weekly',
  monthly = 'monthly',
}
