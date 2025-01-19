import { GetProductDetailsService } from '@/service/getProductDetailsService'

export const RecipeModel = async (id: string) => {
  if (!id) return

  const response = await GetProductDetailsService(id as any)
  const product = response.meals[0]

  if (!product) return

  const priceMocked = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(Number(product.idMeal) / 1000)

  const listPriceMocked = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format((Number(product.idMeal) / 1000) * 2)

  const ingredients = []

  for (const key of Object.keys(product)) {
    if (key.includes('Ingredient')) {
      ingredients.push(product[key])
    }
  }

  return {
    priceMocked,
    listPriceMocked,
    ingredients,
    product
  }
}
