import { GetProductsByCategoryService } from '@/service/getProductsByCategoryService'
import { use } from 'react'

export const MenuModel = (categoryId: string) => {
  const products = use(
    GetProductsByCategoryService({
      category: categoryId
    })
  )
console.log(products.meals,'denntr')
  return products.meals
}
