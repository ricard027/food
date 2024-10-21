import { GetProductsByCategoryService } from '@/service/getProductsByCategoryService'

const shelfModel = async () => {
  const categoryProducts = await GetProductsByCategoryService({
    category: 'Seafood'
  })

  return categoryProducts
}

export default shelfModel
