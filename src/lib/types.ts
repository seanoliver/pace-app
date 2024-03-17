export type TimeBlock = {
  id: string,
  category: string, // TODO: Type to user-defined enum
  description: string,
}

export type Schedule = Array<TimeBlock>
