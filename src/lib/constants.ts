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

export const HOURS_MAP = {
  0: "12:00 AM",
  1: "1:00 AM",
  2: "2:00 AM",
  3: "3:00 AM",
  4: "4:00 AM",
  5: "5:00 AM",
  6: "6:00 AM",
  7: "7:00 AM",
  8: "8:00 AM",
  9: "9:00 AM",
  10: "10:00 AM",
  11: "11:00 AM",
  12: "12:00 PM",
  13: "1:00 PM",
  14: "2:00 PM",
  15: "3:00 PM",
  16: "4:00 PM",
  17: "5:00 PM",
  18: "6:00 PM",
  19: "7:00 PM",
  20: "8:00 PM",
  21: "9:00 PM",
  22: "10:00 PM",
  23: "11:00 PM",
}

