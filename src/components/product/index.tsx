'use client'
import { MenuItem } from '@/service/getMenuItemService'
import Image from 'next/image'
import { FC, useState } from 'react'

import { GoHeart, GoHeartFill, GoStar } from 'react-icons/go'

const Product: FC<MenuItem> = ({ image, title, price, likes }) => {
  const [favoriteProduct, setFavoriteProduct] = useState(false)
  return (
    <div className='flex flex-col justify-between bg-[#f1f1f1] gap-6 shadow-lg  rounded-lg flex-1 items-center relative '>
      <div
        className='absolute flex items-center justify-center  left-4 top-4 cursor-pointer z-10'
        onClick={() => setFavoriteProduct((prev) => !prev)}
      >
        {favoriteProduct ? <GoHeartFill /> : <GoHeart />}
      </div>
      <div className='p-6 pb-0 relative overflow-hidden w-full flex items-center justify-center pointer-events-none'>
        <Image
          width={150}
          height={150}
          alt={title}
          src={image}
          className='mix-blend-multiply max-h-40 '
        />
      </div>
      <div className='flex flex-col gap-6 p-4 w-full items-center bg-white rounded-b-lg rounded-t-3xl'>
        <div>
          <p className='line-clamp-1' title={title}>
            {title}
          </p>
        </div>
        <div className='flex justify-between w-full'>
          <p>R${price}</p>
          <div className='flex items-center justify-center '>
            {likes}
            <GoStar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
