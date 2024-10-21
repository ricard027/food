'use client'

import { GetFoodsCategoryService } from '@/service/getCategoryFoodsService'
import { SwiperSlide } from 'swiper/react'
import CategoryWidget from '../category'
import { Icategory } from '@/types/category'
import { Slider } from '../slider'
import { useEffect, useState } from 'react'

const WidgetCategory = () => {
  const [categories, setCategories] = useState<Icategory[] | undefined>([])
  const fetchCategory = async () => {
    const _categories = await GetFoodsCategoryService()

    return setCategories(_categories)
  }
  useEffect(() => {
    fetchCategory()
  }, [])

  if (!categories?.length) return

  return (
    <Slider>
      {categories.map((data: Icategory, index: number) => (
        <SwiperSlide key={index}>
          <CategoryWidget {...data} />
        </SwiperSlide>
      ))}
    </Slider>
  )
}

export default WidgetCategory
