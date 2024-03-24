import { BlockGrid, DayBlock, Hour, TimeBlock } from "@/lib/types"

export const generateSampleDay = (): BlockGrid => ({
  0: [
    { category: "Sleep", interval: 30 },
    { category: "Sleep", interval: 30 },
  ],
  1: [
    { category: "Sleep", interval: 30 },
    { category: "Sleep", interval: 30 },
  ],
  // ... other hours ...
  6: [
    { category: "Personal", note: "Wake up, morning routine", interval: 30 },
    { category: "Personal", note: "Breakfast", interval: 30 },
  ],
  7: [
    { category: "Commute", interval: 30 },
    { category: "Work", note: "Check email, plan day", interval: 30 },
  ],
  8: [
    { category: "Work", note: "Morning meetings", interval: 30 },
    { category: "Work", note: "Morning meetings", interval: 30 },
  ],
  9: [
    { category: "Deep Work", note: "Focus on important project", interval: 30 },
    { category: "Deep Work", note: "Focus on important project", interval: 30 },
  ],
  // ... other hours ...
  12: [
    { category: "Personal", note: "Lunch break", interval: 30 },
    { category: "Personal", note: "Lunch break", interval: 30 },
  ],
  13: [
    { category: "Work", note: "Afternoon meetings", interval: 30 },
    { category: "Work", note: "Afternoon meetings", interval: 30 },
  ],
  // ... other hours ...
  17: [
    { category: "Work", note: "Wrap up, plan next day", interval: 30 },
    { category: "Commute", interval: 30 },
  ],
  18: [
    { category: "Personal", note: "Dinner", interval: 30 },
    { category: "Personal", note: "Family time", interval: 30 },
  ],
  // ... other hours ...
  22: [
    { category: "Leisure", interval: 30 },
    { category: "Personal", note: "Wind down, bedtime routine", interval: 30 },
  ],
  23: [
    { category: "Sleep", interval: 30 },
    { category: "Sleep", interval: 30 },
  ],
})

export const HOURS: Hour[] = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
  12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
]