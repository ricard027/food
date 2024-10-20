// CartSidebar.tsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'
import { BsCart2 } from 'react-icons/bs'

export default function CartSidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCart = () => {
    setIsOpen(!isOpen)
  }

  const cartVariants = {
    open: { x: 0 },
    closed: { x: '100%' }
  }

  return (
    <>
      <button
        onClick={toggleCart}
        className='flex items-center space-x-2 focus:outline-none  p-2 rounded-full hover:bg-[rgb(0,0,0,.1)] relative'
      >
        <BsCart2 size={20} />
        <span className='text-textLight text-center text-[10px] p-1 rounded-full w-4 h-4 flex items-center justify-center absolute -top-2 right-0 bg-red-500 text-white'>
          0
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

        <div className='p-4 overflow-y-auto h-[calc(100%-64px)]  flex justify-between flex-col'>
          <ul>
            <div className='flex items-center justify-between p-2 mb-2 border-b'>
              <div>
                <h3 className='text-sm font-semibold'>Produto 1</h3>
                <p className='text-sm text-gray-600'>R$ 100,00</p>
              </div>
              <span className='text-sm font-semibold'>1x</span>
            </div>
            <div className='flex items-center justify-between p-2 mb-2 border-b'>
              <div>
                <h3 className='text-sm font-semibold'>Produto 2</h3>
                <p className='text-sm text-gray-600'>R$ 200,00</p>
              </div>
              <span className='text-sm font-semibold'>2x</span>
            </div>
          </ul>

          <button className='w-full px-4 py-2 mt-4 font-semibold text-white bg-[#121212] rounded '>
            IR PARA O CHECKOUT
          </button>
        </div>
      </motion.div>
    </>
  )
}
