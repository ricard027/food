'use client'

import { filters } from './options-filter-category.json'
import { usePathname, useSearchParams } from 'next/navigation'
import { MenuModel } from './menuModel'

import MenuView from './menuView'

const MenuPage = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const _searchParams = searchParams.get('id')



  const  products  = MenuModel(pathname.split('/')[2])

  return (
    <MenuView
      categoryByParams={_searchParams!}
      filters={filters}
      products={products}
    />
  )
}

export default MenuPage
