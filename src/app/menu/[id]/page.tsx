import { GetProductsByCategoryService } from '@/service/getProductsByCategoryService'
import { filters } from './options-filter-category.json'

import MenuView from './menuView'
import ProductDetails from './recipe/page'
import IF from '@/components/IF'

const MenuPage = async ({ params, ...props }: any) => {
  const categoryByParams = await params?.id
  const _searchParams = await props?.searchParams?.id
  const containSearch = typeof _searchParams === 'string'

  if (containSearch) {
    return <ProductDetails searchParams={_searchParams} />
  }

  const { meals: products } = await GetProductsByCategoryService({
    category: categoryByParams
  })



  return (
    <IF condition={!containSearch}>
      <MenuView
        categoryByParams={categoryByParams}
        filters={filters}
        products={products}
      />
    </IF>
  )
}
export default MenuPage
