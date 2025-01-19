import { GetProductsByCategoryService } from '@/service/getProductsByCategoryService'
import { filters } from './options-filter-category.json'

import MenuView from './menuView'
import ProductDetails from './recipe/page'

const MenuPage = async ({ params, ...props }: any) => {
  const categoryByParams = await params?.id
  const _searchParams = await props?.searchParams?.id

  if (typeof _searchParams === 'string') {
    return <ProductDetails searchParams={_searchParams} />
  }

  const { meals: products } = await GetProductsByCategoryService({
    category: categoryByParams
  })

  return (
    <>
      <MenuView
        categoryByParams={categoryByParams}
        filters={filters}
        products={products}
      />
    </>
  )
}
export default MenuPage
