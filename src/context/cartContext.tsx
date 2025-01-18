'use client'

import { createContext, FC, ReactNode, useState } from 'react'

interface IProduct {
  id: string
  name: string
  price: number
  img: string
  quantity?: number
}

export interface ICart {
  cartProducts: IProduct[]
  addProduct: (product: IProduct) => void
  removeProduct: (productId: string) => void
  toggleCart: () => void
  isOpen: boolean
}

export const CartContext = createContext<ICart | undefined>(undefined)

const CartContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [cartProducts, setCartProducts] = useState<IProduct[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const toggleCart = () => {
    setIsOpen(!isOpen)
  }

  const addProduct = (product: IProduct) => {
    setCartProducts((prev) => {
      const productExists = prev.find((p) => p.id === product.id)

      if (productExists) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: (p.quantity ?? 1) + 1 } : p
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeProduct = (productId: string) => {
    setCartProducts((prev) => {
      const productExists = prev.find((p) => p.id === productId)

      if (productExists?.quantity && productExists.quantity > 1) {
        return prev.map((p) =>
          p.id === productId ? { ...p, quantity: (p.quantity ?? 1) - 1 } : p
        )
      }
      return prev.filter((p) => p.id !== productId)
    })
  }
  console.log(isOpen, 'produtos')
  return (
    <CartContext.Provider
      value={{ addProduct, cartProducts, removeProduct, toggleCart, isOpen }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
