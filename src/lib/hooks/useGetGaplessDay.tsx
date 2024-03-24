import { HOURS } from "../constants"
import { BlockGrid, GridRow, Hour } from "../types"

export const useGetGaplessDay = ({grid}: {grid: BlockGrid}): BlockGrid => {

  // Loop through each hour in HOURS
  // If the hour exists in the grid, add it to the gapless grid
  // If the hour does not exist in the grid, add an empty TimeBlock
  // object to the gapless grid

  const gaplessGrid: BlockGrid = {}

  const emptyGridRow: GridRow = [
    { category: "", interval: 30 },
    { category: "", interval: 30 },
  ]

  HOURS.forEach((hour: Hour) => {
    if (grid[hour]) {
      gaplessGrid[hour] = grid[hour]
    } else {
      gaplessGrid[hour] = emptyGridRow
    }
  })

  return gaplessGrid
  
}

  