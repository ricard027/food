// CartSidebar.tsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'
import { BsCart2 } from 'react-icons/bs'
import useCart from '@/hook/useCart'
import CartProduct from '../cartProduct/CartProduct'

export default function CartSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const { cartProducts } = useCart()

  const toggleCart = () => {
    setIsOpen(!isOpen)
  }

  const cartVariants = {
    open: { x: 0 },
    closed: { x: '100%' }
  }

  const CONTAIN_PRODUCT = cartProducts.length > 0

  const totalPrice =
    CONTAIN_PRODUCT &&
    cartProducts.reduce(
      (acc, { price, quantity }) => acc + price * (quantity ?? 0),
      0
    )

  const priceFormated = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(Number(totalPrice))

  return (
    <>
      <button
        onClick={toggleCart}
        className='flex items-center space-x-2 focus:outline-none  p-2 rounded-full hover:bg-gray-10 relative'
      >
        <BsCart2 size={20} />
        <span className='text-textLight text-center text-[10px] p-1 rounded-full w-4 h-4 flex items-center justify-center absolute -top-2 right-0 bg-red-500 text-white'>
          {cartProducts.length}
        </span>
      </button>
      <motion.div
        initial='closed'
        animate={isOpen ? 'open' : 'closed'}
        variants={cartVariants}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className='fixed top-0 right-0 z-40 w-80 h-full bg-white shadow-lg'
      >
        <div className='flex items-center justify-between p-4 bg-gray-100 border-b'>
          <h2 className='text-lg font-bold'>Carrinho</h2>
          <button
            onClick={toggleCart}
            className='text-gray-700 hover:text-gray-900'
          >
            <FaTimes className='text-2xl' />
          </button>
        </div>

        <div className='p-4 overflow-y-auto h-[calc(100%-64px)]  flex justify-between flex-col bg-white'>
          <ul className='max-h-[50%] h-full overflow-y-scroll'>
            {!!cartProducts.length &&
              cartProducts.map(({ id, img, price, quantity, name }) => (
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
          <div>
            <div className='flex flex-col w-full'>
              <div className='flex justify-between w-full'>
                <p>Total</p>
                <p>{priceFormated}</p>
              </div>
            </div>
            <button className='w-full px-4 py-2 mt-4 font-semibold text-white bg-[#121212] rounded '>
              IR PARA O CHECKOUT
            </button>
          </div>
        </div>
      </motion.div>
    </>
  )
}
