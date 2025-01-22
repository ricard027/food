import { GrFavorite } from 'react-icons/gr'
import { IoLocationOutline } from 'react-icons/io5'
import { BsCart2 } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'

interface Link {
  url: string
  text: string
  icon?: any
}

export const navigation: Link[] = [
  {
    url: '/profile',
    text: 'Profile',
    icon: AiOutlineUser
  },
  {
    url: '/wishlist',
    text: 'Wishlist',
    icon: GrFavorite
  },
  {
    url: '/orders',
    text: 'Orders',
    icon: BsCart2
  },
  {
    url: '/adresses',
    text: 'Adresses',
    icon: IoLocationOutline
  }
]
