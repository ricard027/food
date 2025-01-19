import { Icategory } from '@/types/category'
import { FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'

const CategoryWidget: FC<Icategory> = ({
  strCategory,
  strCategoryThumb,
  strCategoryDescription
}) => {
  return (
    <Link
      href={`/menu/${strCategory}`}
      className='bg-accent bg-gray-50 p-4 items-center text-center rounded-md  flex flex-col cursor-pointer  hover:bg-gray-100'
    >
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
    </Link>
  )
}

export default CategoryWidget
