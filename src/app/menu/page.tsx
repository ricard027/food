import { GetProductsByCategoryService } from '@/service/getProductsByCategoryService'
import { filters } from './options-filter-category.json'

import MenuView from './menuView'

import MenuWhitoutSearch from './MenuWhitoutSearch'



const MenuPage = async ({ searchParams }:any) => {
  const categoryByParams = searchParams?.category

  if (!categoryByParams) {
    return <MenuWhitoutSearch />
  }

  const { meals: products } = await GetProductsByCategoryService({
    category: categoryByParams
  })

  return (
    <MenuView
      categoryByParams={categoryByParams}
      filters={filters}
      products={products}
    />
  )
}
export default MenuPage
