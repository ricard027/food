import { GetFoodsCategoryService } from '@/service/getCategoryFoodsService'

const sliderModel = async () => {

  const fetchProduct = await GetFoodsCategoryService()


  return fetchProduct
}

export default sliderModel
