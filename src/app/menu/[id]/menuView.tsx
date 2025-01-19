'use client'
import BreadCrumb from '@/components/breadcrumb'
import Product, { IProduct } from '@/components/product'
import Select from '@/components/select'

import { IMenuViewProps } from './menu'
import GridLayout from '@/components/gridLayout'
import Image from 'next/image'

const MenuView = ({ products, categoryByParams, filters }: IMenuViewProps) => {
  return (
    <main className='min-h-screen'>
      <div className='container m-auto px-4  max-w-6xl'>
        <BreadCrumb />
      </div>
      <div className='w-full h-52 bg-accent overflow-hidden'>
        <Image
          src=''
          width={1200}
          height={200}
          alt={categoryByParams}
          className=''
        />
      </div>
      <div className='container m-auto  max-w-6xl px-4 '>
        <h1 className='text-2xl py-4'>{categoryByParams}</h1>
        <div className='pb-6 flex items-center gap-2'>
          <p>{products?.length}</p> results
        </div>
        <div className='mb-6'>
          <Select options={filters} />
        </div>
        <GridLayout>
          {products?.map(
            ({ idMeal, strMeal, strMealThumb }: IProduct, index: number) => (
              <Product
                idMeal={idMeal}
                strMeal={strMeal}
                strMealThumb={strMealThumb}
                key={index}
              />
            )
          )}
        </GridLayout>
      </div>
    </main>
  )
}

export default MenuView
