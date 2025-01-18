import CartProduct from '../cartProduct/CartProduct'

import { BsCart2 } from 'react-icons/bs'

import { motion } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'
import { ICartProps } from './cart'

const CartView = ({
  isOpen,
  cartVariants,
  toggleCart,
  priceFormated,
  cartProducts,
  CONTAIN_PRODUCT
}: ICartProps) => {
  return (
    <motion.div
      initial='closed'
      animate={isOpen ? 'open' : 'closed'}
      variants={cartVariants}
      transition={{ type: 'spring', stiffness: 150, damping: 25 }}
      className='fixed top-0 right-0 z-40 w-80 h-full bg-white shadow-lg'
    >
      <div className='flex items-center justify-between p-4 bg-gray-50 '>
        <h2 className='text-lg font-bold'>Cart</h2>
        <button
          onClick={toggleCart}
          className='text-gray-700 hover:text-gray-900'
        >
          <FaTimes className='text-2xl' />
        </button>
      </div>

      <div className='p-4 overflow-y-auto h-[calc(100%-64px)]  flex justify-between flex-col bg-white'>
        <ul
          style={{ display: CONTAIN_PRODUCT ? 'block' : 'none' }}
          className='max-h-[50%] h-full overflow-y-scroll'
        >
          {!!CONTAIN_PRODUCT &&
            cartProducts.map(({ id, img, price, quantity, name }: any) => (
              <CartProduct
                name={name}
                image={img}
                price={price}
                quantity={quantity ?? 0}
                key={id}
                id={id}
              />
            ))}
        </ul>
        <div
          style={{ display: !CONTAIN_PRODUCT ? 'block' : 'none' }}
          className=' flex justify-center items-center w-full h-full text-center'
        >
          <div className='h-full bg-gray-50 rounded-md flex items-center justify-center flex-col gap-2'>
            <div className='bg-gray-100  p-2  rounded-full'>
              <BsCart2 size={20} />
            </div>
            <p className='font-semibold'>Cart is empty :(</p>
          </div>
        </div>
        <div style={{ display: CONTAIN_PRODUCT ? 'block' : 'none' }}>
          <div className='flex flex-col w-full border-b-2 border-gray-420 pb-2'>
            <div className='flex justify-between w-full '>
              <p className='text-gray-500'>Items</p>
              <p>{priceFormated}</p>
            </div>
          </div>
          <div className='flex flex-col w-full border-b-2 border-gray-420 py-2'>
            <div className='flex justify-between w-full'>
              <p className='text-gray-500'>Descounts</p>
              <p>-R$10,00</p>
            </div>
          </div>
          <div className='flex flex-col w-full pt-2'>
            <div className='flex justify-between w-full'>
              <p className='text-gray-500'>Total Price</p>
              <p>{priceFormated}</p>
            </div>
          </div>
          <button className='w-full px-4 py-2 mt-4  font-semibold text-white bg-[#121212] rounded-2xl '>
            GO TO CHECKOUT
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default CartView
