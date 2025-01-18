import useCart from '@/hook/useCart'

export const CartModel = () => {
  const { cartProducts, toggleCart, isOpen } = useCart()

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

  return {
    CONTAIN_PRODUCT,
    toggleCart,
    cartProducts,
    cartVariants,
    priceFormated,
    isOpen
  }
}
