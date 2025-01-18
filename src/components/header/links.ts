import { IoRestaurantOutline } from 'react-icons/io5'
import { HiOutlineChatBubbleOvalLeftEllipsis } from 'react-icons/hi2'
import { GrFavorite } from 'react-icons/gr'
import { GrRestaurant } from 'react-icons/gr'
import { CiUser } from 'react-icons/ci'

interface Link {
  url: string
  text: string
  icon?: any
}

interface Navigation {
  authenticated: {
    links: Link[]
  }
  default: {
    links: Link[]
  }
}

export const navigation: Navigation = {
  authenticated: {
    links: [
      {
        url: '/profile',
        text: 'Profile',
        icon: CiUser
      },
      {
        url: '/wishlist',
        text: 'Wishlist',
        icon: GrFavorite
      }
    ]
  },
  default: {
    links: [
      {
        url: '/menu',
        text: 'Our menu',
        icon: IoRestaurantOutline
      },
      {
        url: '/about',
        text: 'About us',
        icon: GrRestaurant
      },
      {
        url: '/contact',
        text: 'Contacts',
        icon: HiOutlineChatBubbleOvalLeftEllipsis
      }
    ]
  }
}
