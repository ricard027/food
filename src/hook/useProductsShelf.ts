import { GetProductsByAreaService } from '@/service/getProductsByAreaService'
import { GetProductsByCategoryService } from '@/service/getProductsByCategoryService'
import { use } from 'react'

interface IuseRecipes {
  category?: string
  area?: string
}

export const useProductShelf = ({ category, area }: IuseRecipes) => {
  const recipes = []
  if (category) {
    const recipesPromise = use(GetProductsByCategoryService({ category }))
    recipes.push(recipesPromise)
  }

  if (area) {
    const recipesPromise = use(GetProductsByAreaService({ area }))
    recipes.push(recipesPromise)
  }

  if (recipes.length) {
    return recipes
  }
}
