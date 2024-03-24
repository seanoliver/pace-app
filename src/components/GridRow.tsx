import { GridRow as GridRowType, Hour } from "@/lib/types"
import { GridBlock } from "./GridBlock"

export const GridRow = ({hour, row}: {hour: Hour, row: GridRowType}) => {

  return (
    <div className='flex flex-row'>
      <div className='w-10 h-10 flex m-2 border border-gray-300 items-center justify-center text-sm rounded-md'>
        {hour}
      </div>
      {row.map((block, index) => {
        return <GridBlock key={index} block={block} />
      })}
    </div>
  )
}

export const HeaderGridRow = () => {

}