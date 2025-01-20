import { GetProductsByCategoryService } from '@/service/getProductsByCategoryService'
import { filters } from './options-filter-category.json'

import MenuView from './menuView'
import ProductDetails from './recipe/page'
import IF from '@/components/IF'
import { useRouter } from 'next/router'

const MenuPage = async ({ params }: any) => {
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()
  const { query } = router

  const categoryByParams = params?.id
  const _searchParams = query?.id
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
