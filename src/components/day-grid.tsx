import { DayBlock, Interval } from "@/lib/types"

const HOURS = 24
const INTERVAL: Interval = 15

const SAMPLE_DAY: DayBlock = {
  day: new Date(),
  hours: [
    {
      hour: 0,
      blocks: [
        {
          id: "0",
          category: "work",
          description: "Write code",
        },
        {
          id: "1",
          category: "work",
          description: "Write more code",
        },
        {
          id: "2",
          category: "work",
          description: "Write even more code",
        },
        {
          id: "3",
          category: "work",
          description: "Write even more code",
        },
      ],
    },
  ],
}

const getFormattedDate = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

export const DayGrid = () => {
  const intervalsPerHour = 60 / INTERVAL

  return (
    <div>
      <h1>Day Grid: {getFormattedDate(SAMPLE_DAY.day)}</h1>
      <div id='day-grid'>
        <div id='header-row' className='flex justify-evenly'>
          <div></div>
          {[":00", ":15", ":30", ":45"].map((value, index) => (
            <IntervalCell key={index}>{value}</IntervalCell>
          ))}
        </div>
      </div>
    </div>
  )
}

export const IntervalCell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='border broder-rose-50 w-10 h-10 flex items-center justify-center'>
      {children}
    </div>
  )
}
