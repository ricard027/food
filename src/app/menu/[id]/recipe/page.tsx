import { PiBowlFoodThin } from 'react-icons/pi'
import { RecipeModel } from './recipeModel'

import ProductShelfs from './productShelfs'
import Description from './description'
import AddProduct from './addPrduct'

import BreadCrumb from '@/components/breadcrumb'
import Image from 'next/image'

const ProductDetails = async ({ searchParams }: any) => {
  const id = await searchParams

  if (!id) return

  const { ingredients, product, priceMocked, listPriceMocked } =
    (await RecipeModel(id)) as any

  if (!product) return <></>

  return (
    <div className='min-h-screen pb-20'>
      <section className='container m-auto max-w-6xl px-6'>
        <BreadCrumb />
        <div className='xs:flex sm:flex xs:flex-col md:grid md:items-center grid-cols-2 gap-4'>
          <div>
            <Image
              alt={product.strMeal}
              width={500}
              height={500}
              src={product.strMealThumb}
              className='rounded-xl w-full'
            />
          </div>
          <div className='flex flex-col'>
            <h1 className='text-3xl font-semibold mb-2'>{product.strMeal}</h1>
            <div className='flex items-center gap-2 my-2'>
              <span className='p-2 bg-gray-100 rounded-md'>
                {product.strArea}
              </span>
              <span className='p-2 bg-gray-100 rounded-md '>
                {product.strCategory}
              </span>
            </div>
            <div className=' border-b-2 pb-2 mb-4 flex items-center gap-2'>
              <PiBowlFoodThin size={20} className='text-accent' />
              <h3 className='text-lg font-semibold py-2'>ingredients</h3>
            </div>
            <div className='flex flex-wrap gap-2'>
              {ingredients.map((ingredient: string, index: number) => {
                if (!!ingredient) {
                  return (
                    <span key={index} className='p-2 rounded-md bg-gray-50'>
                      {ingredient}
                    </span>
                  )
                }
              })}
            </div>
            <div className='p-2'>
              <div>
                <p className='text-md line-through text-gray-700'>
                  {listPriceMocked}
                </p>
                <p className='text-xl font-semibold'>{priceMocked}</p>
              </div>
              <AddProduct product={product} />
            </div>
          </div>
        </div>
        <Description strInstructions={product.strInstructions} />
        <ProductShelfs area={product.strArea} category={product.strCategory} />
      </section>
    </div>
  )
}

export default ProductDetails
