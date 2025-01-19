'use client'

import Button from '@/components/button'
import Quantity from '@/components/product/Quantity'
import useCart from '@/hook/useCart'
import { BsCart2 } from 'react-icons/bs'

const AddProduct = ({ product }: any) => {
  const { addProduct, cartProducts, toggleCart } = useCart()

  const _product = {
    id: product.idMeal,
    name: product.strMeal,
    price: Number(product.idMeal / 1000),
    img: product.strMealThumb,
    quantity: 1
  }
  const productExists = cartProducts.find(({ id }) => id === product.idMeal)

  if (!!productExists) {
    return (
      <div className='max-w-max mt-2 p-4'>
        <Quantity product={productExists as any} />
      </div>
    )
  }
  return (
    <div className='mt-4'>
      <Button
        onClick={() => {
          addProduct(_product as any)

          toggleCart()
        }}
      >
        <BsCart2 size={20} />
        Add to cart
      </Button>
    </div>
  )
}

export default AddProduct
