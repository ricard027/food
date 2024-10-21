import { Icategory } from '@/types/category'

export const GetFoodsCategoryService = async (): Promise<
  Icategory[] | undefined
> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/categories.php`
    )

    const { categories } = await response.json()
    return categories
  } catch (error) {
    console.log(error)
  }
}
