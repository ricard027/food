import { RecipeModel } from './recipeModel'

import Description from './description'
import AddProduct from './addPrduct'

import BreadCrumb from '@/components/breadcrumb'
import Image from 'next/image'
import ProductShelfs from './productShelfs'
import Ingredients from './ingredients'

const ProductDetails = async ({ searchParams }: any) => {
  const { id } = await searchParams

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
        <Ingredients ingredients={ingredients} />
        <Description strInstructions={product.strInstructions} />
        <ProductShelfs area={product.strArea} category={product.strCategory} />
      </section>
    </div>
  )
}

export default ProductDetails
