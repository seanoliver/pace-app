"use client"

import { BlockGrid, Hour, Interval } from "@/lib/types"
import { useState } from "react"
import { GridRow } from "./GridRow"
import { useGetGaplessDay } from "@/lib/hooks/useGetGaplessDay"

const HOURS = 24
const INTERVAL: Interval = 15
const intervalsPerHour = 60 / INTERVAL

// const SAMPLE_DAY: DayBlock = {
//   day: new Date(),
//   hours: Array.from({ length: HOURS }, (_, hour) => {
//     return {
//       hour,
//       blocks: Array.from({ length: intervalsPerHour }, (_, index) => {
//         return {
//           id: index.toString(),
//           category: "work",
//           description: "Write code",
//           start: new Date(),
//           end: new Date(),
//         }
//       }),
//     }
//   }),
// }

// const getFormattedDate = (date: Date) => {
//   return date.toLocaleDateString("en-US", {
//     weekday: "short",
//     year: "numeric",
//     month: "short",
//     day: "numeric",
//   })
// }

export const Grid = ({ blockGrid }: { blockGrid: BlockGrid }) => {
  const gaplessGrid = useGetGaplessDay({ grid: blockGrid })

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-1/2">
        {Object.entries(gaplessGrid).map(([hour, row]) => {
          return <GridRow key={hour} hour={hour} row={row} />
        })}
      </div>
    </div>
  )
}

// export const DayGrid = () => {
//   const intervalsPerHour = 60 / INTERVAL

//   return (
//     <div>
//       <h1>Day Grid: {getFormattedDate(SAMPLE_DAY.day)}</h1>
//       <div id='day-grid'>
//         <div id='header-row' className='flex justify-evenly'>
//           <IntervalCell> </IntervalCell>
//           {[":00", ":15", ":30", ":45"].map((value, index) => (
//             <IntervalCell key={index}>{value}</IntervalCell>
//           ))}
//         </div>
//       </div>
//       <div id='hour-rows'>
//         {SAMPLE_DAY.hours.map(({ hour, blocks }, index) => {
//           return (
//             <div key={index} className='flex justify-evenly'>
//               <IntervalCell>{hour}</IntervalCell>
//               {blocks.map((block, index) => {
//                 return <IntervalCell key={index}>{block.category}</IntervalCell>
//               })}
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// const CELL_COLORS: Record<string, string> = {
//   blue: "bg-blue-50",
//   red: "bg-red-50",
//   green: "bg-green-50",
//   yellow: "bg-yellow-50",
// } as const

// export const IntervalCell = ({
//   children,
//   ...props
// }: {
//   children: React.ReactNode
// }) => {
//   const [ cellColor, setCellColor ] = useState<keyof typeof CELL_COLORS>(CELL_COLORS.blue)

//   const rotateColor = () => {
//     console.log('rotateColor')
//     console.log('cellColor', cellColor)
//     const colors = Object.keys(CELL_COLORS) as Array<keyof typeof CELL_COLORS>
//     console.log('colors', colors)
//     const currentIndex = colors.indexOf(cellColor)
//     console.log('currentIndex', currentIndex)
//     const nextIndex = (currentIndex + 1) % colors.length
//     console.log('nextIndex', nextIndex)
//     setCellColor(colors[nextIndex])
//   }

//   return (
//     <div
//       className={`border broder-rose-50 w-1/5 h-10 flex items-center justify-center ${cellColor}`}
//       onClick={rotateColor}
//       {...props}
//     >
//       {children}
//     </div>
//   )
// }
