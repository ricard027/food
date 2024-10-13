import { GetmenuItemsService } from '@/service/getMenuItemService'

const shelfModel = async () => {
  const menuService = new GetmenuItemsService()

  const fetchProduct = await menuService.exec('salad', 4)

  const { menuItems } = await fetchProduct.json()

  return { data: menuItems }
}

export default shelfModel
