import { TimeBlock } from "@/lib/types"

export const GridBlock = ({block}: {block: TimeBlock}) => {
  return (
    <div className='w-1/4  h-10 flex m-2 border border-gray-300 items-center justify-center rounded-md'>
      {block.category}
    </div>
  )
}
