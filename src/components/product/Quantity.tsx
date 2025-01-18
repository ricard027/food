import useCart from '@/hook/useCart'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import { ICartProduct } from '../cartProduct/cart'

interface Iquantity {
  product: ICartProduct
}
const Quantity = ({ product }: Iquantity) => {
  const { removeProduct, addProduct } = useCart()

  return (
    <div className='flex items-center gap-2'>
      <button
        className='rounded-sm flex items-center w-6 h-6 justify-center bg-gray-50 hover:bg-gray-100'
        onClick={() => removeProduct(product.id)}
      >
        <FaMinus size={15} />
      </button>
      <div className='max-w-6 text-center'>{product.quantity}</div>
      <button
        className='rounded-sm flex w-6 h-6 items-center justify-center bg-gray-50 hover:bg-gray-100'
        onClick={() => addProduct(product as any)}
      >
        <FaPlus size={15} />
      </button>
    </div>
  )
}

export default Quantity
