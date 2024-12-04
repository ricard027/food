import { CartContext } from '@/context/cartContext'
import { useContext } from 'react'

const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart deve ser usado dentro de um UserContextProvider')
  }

  return context
}

export default useCart
