'use client'
// import { MenuItem } from '@/service/getMenuItemService'
import Image from 'next/image'
import { FC, useState } from 'react'

import { GoHeart, GoHeartFill } from 'react-icons/go'
import { PiBowlFoodThin } from 'react-icons/pi'

interface IProduct {
  idMeal: string
  strMeal: string
  strMealThumb: string
}

const Product: FC<IProduct> = ({ idMeal, strMeal, strMealThumb }) => {
  const [favoriteProduct, setFavoriteProduct] = useState(false)
  return (
    <div className='flex flex-col justify-between bg-[#f1f1f1] gap-6 shadow-lg  rounded-lg  items-center relative mb-4'>
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
          alt={strMeal}
          src={strMealThumb}
          className='mix-blend-multiply max-h-40 rounded-full '
        />
      </div>
      <div className='flex flex-col gap-6 p-4 w-full items-center bg-white rounded-b-lg rounded-t-3xl'>
        <div className='w-full'>
          <p className='flex items-center gap-4 w-full ' title={strMeal}>
            <PiBowlFoodThin size={20} className='text-accent' />
            <span className='line-clamp-1 text-gray-600 max-w-[80%]'>
              {strMeal}
            </span>
          </p>
        </div>
        <div className='flex justify-between w-full'>
          <p>R${idMeal}</p>
        </div>
      </div>
    </div>
  )
}

export default Product
