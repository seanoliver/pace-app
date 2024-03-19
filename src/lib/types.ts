export type Interval = 15 | 30

export type TimeBlock = {
  id: string,
  category: string, // TODO: Type to user-defined enum
  description: string,
}

export type HourBlock = {
  hour: number,
  blocks: Array<TimeBlock>,
}

export type DayBlock = {
  day: Date,
  hours: Array<HourBlock>,
}