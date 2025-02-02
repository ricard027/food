import { ICartProduct } from '@/components/cartProduct/cart'

export interface IUser {
  name: string
  email: string
  creationTime: string
  provider: string
  id: string
  profileImage?: string
  wishlist?: ICartProduct[]
}
