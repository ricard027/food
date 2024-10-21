import { Icategory } from '@/types/category'
import { FC } from 'react'

import Image from 'next/image'

const CategoryWidget: FC<Icategory> = ({
  strCategory,
  strCategoryThumb,
  strCategoryDescription
}) => {
  return (
    <div className='bg-accent bg-gray-50 p-4 items-center text-center rounded-md flex flex-col cursor-pointer'>
      <div>
        <Image
          className='scale-75 '
          width={200}
          height={200}
          src={strCategoryThumb}
          alt={strCategoryDescription}
        />
        <p className='font-semibold'>{strCategory.toUpperCase()}</p>
      </div>
    </div>
  )
}

export default CategoryWidget
