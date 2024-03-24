import { TimeBlock } from "@/lib/types"
import { useState } from "react"

export const GridBlock = ({block}: {block: TimeBlock}) => {

  const [ selected, setSelected ] = useState(false)

  return (
    <div className='w-1/4  h-10 flex m-2 border border-gray-300 items-center justify-center rounded-md'>
      {block.category}
    </div>
  )
}
