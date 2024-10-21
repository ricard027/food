'use client'
import { useEffect, useState } from 'react'
// import shelfModel from './shelf.model'
// import ShelfView from './shelf.view'
import { GetProductsByCategoryService } from '@/service/getProductsByCategoryService'
import { Slider } from '../slider'
import { SwiperSlide } from 'swiper/react'
import Product from '../product'
interface IProduct {
  idMeal: string
  strMeal: string
  strMealThumb: string
}
const Shelf = () => {
  const [category, setCategory] = useState<IProduct[]>([])
  const fetchCategory = async () => {
    const { meals } = await GetProductsByCategoryService({
      category: 'Seafood'
    })

    return setCategory(meals)
  }
  useEffect(() => {
    fetchCategory()
  }, [])

  if (!category?.length) return

  return (
    <Slider>
      {category.map((data, index) => (
        <SwiperSlide key={index}>
          <Product {...data} />
        </SwiperSlide>
      ))}
    </Slider>
  )
}

export default Shelf
