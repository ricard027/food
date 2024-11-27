import { FC } from 'react'
import { ICartProduct } from './cart'
import Image from 'next/image'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import useCart from '@/hook/useCart'

const CartProduct: FC<ICartProduct> = ({
  image,
  name,
  price,
  quantity,
  id
}) => {
  const { addProduct, removeProduct } = useCart()

  const product = {
    id: id,
    name: name,
    price: price,
    img: image,
    quantity: 1
  }
  const priceFormated = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(Number(price * quantity))

  return (
    <div className='flex items-center justify-between p-2 mb-2 border-b w-full gap-2'>
      <Image src={image} alt={name} width={80} height={80} />
      <div className='flex flex-col'>
        <h3 className='text-sm font-semibold'>{name}</h3>
        <p className='text-sm text-gray-600'>{priceFormated}</p>
      </div>
      <div className='flex items-center gap-2'>
        <button
          className='rounded-sm flex items-center w-6 h-6 justify-center bg-gray-50 hover:bg-gray-100'
          onClick={() => removeProduct(id)}
        >
          <FaMinus size={15} />
        </button>
        <div className='max-w-6 text-center'>{quantity}</div>
        <button
          className='rounded-sm flex w-6 h-6 items-center justify-center bg-gray-50 hover:bg-gray-100'
          onClick={() => addProduct(product)}
        >
          <FaPlus size={15} />
        </button>
      </div>
    </div>
  )
}

export default CartProduct
