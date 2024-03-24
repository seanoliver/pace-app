export type Interval = 15 | 30

export type TimeBlock = {
  category: string
  note?: string
  interval: Interval
}

export type GridRow =
  | [TimeBlock, TimeBlock]
  | [TimeBlock | TimeBlock | TimeBlock | TimeBlock]

export type HourBlocks = Record<Hour, GridRow>
export type BlockGrid = Partial<HourBlocks>


export type DayBlock = {
  day: Date
  grid: BlockGrid
}

export type Hour =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
