'use client'

import AuthenticatedLayout from '@/components/authenticatedLayout'
import { WisthListModel } from './wishlistMdel'
import Product from '@/components/product'

const WishListPage = () => {
  const { wishlist } = WisthListModel()
  console.log(wishlist, 'wishlist')
  return (
    <AuthenticatedLayout>
      <div className='grid md:grid-cols-2 sm:grid-cols-2 sm: grid-cols-2 xs:grid-cols-1 lg:grid-cols-3 gap-4'>
        {wishlist?.map(({ id, name, img }: any) => (
          <Product idMeal={id} strMeal={name} strMealThumb={img} key={img} />
        ))}
      </div>
    </AuthenticatedLayout>
  )
}

export default WishListPage
