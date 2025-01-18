import { BsCart2 } from 'react-icons/bs'
import { CartModel } from './cartModel'

import CartView from './cartView'

export default function CartSidebar() {
  const {
    cartProducts,
    cartVariants,
    priceFormated,
    toggleCart,
    isOpen,
    CONTAIN_PRODUCT
  } = CartModel()

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
      <div
        style={{ display: isOpen ? 'block' : 'none' }}
        className='bg-[rgba(0,0,0,.2)] w-full z-20 fixed left-0 h-screen top-0  backdrop-blur-sm'
        onClick={toggleCart}
      />
      <CartView
        cartProducts={cartProducts}
        cartVariants={cartVariants}
        priceFormated={priceFormated}
        toggleCart={toggleCart}
        isOpen={isOpen}
        CONTAIN_PRODUCT={CONTAIN_PRODUCT}
      />
    </>
  )
}
