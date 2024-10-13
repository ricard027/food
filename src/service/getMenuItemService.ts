export interface Nutrient {
  name: string
  amount: number
  unit: string
}

export interface CaloricBreakdown {
  percentProtein: number
  percentFat: number
  percentCarbs: number
}

export interface Nutrition {
  nutrients: Nutrient[]
  caloricBreakdown: CaloricBreakdown
  calories: number
  fat: string
  protein: string
  carbs: string
}

export interface Servings {
  number: number
  size: number
  unit: string
}

export interface MenuItem {
  id: number
  title: string
  price: number | null
  likes: number
  badges: string[]
  nutrition: Nutrition
  images: string[]
  servings: Servings
  spoonacularScore: number | null
  breadcrumbs: string[]
  image: string
  imageType: string
  generatedText: string | null
  restaurantChain: string
}

export interface IGetMenuItemService {
  exec: (
    categoryMenu: string,
    quantityProducts: number
  ) => Promise<MenuItem | Response>
}

export class GetmenuItemsService implements IGetMenuItemService {
  async exec(categoryMenu: string, quantityProducts: number) {
    const data =
      await fetch(`${process.env.NEXT_API_URL}?query=${categoryMenu}&number=${quantityProducts}&addMenuItemInformation=true&apiKey=${process.env.NEXT_API_KEY}
    `)
    return data
  }
}
