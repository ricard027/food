'use client'

import { Slider } from '../slider'
import { SwiperSlide } from 'swiper/react'
import Product from '../product'

const Shelf = ({ recipes }: { recipes: any }) => {
  if (!recipes?.length) return

  return (
    <Slider>
      {recipes.map((data: any, index: any) => (
        <SwiperSlide key={index}>
          <Product {...data} />
        </SwiperSlide>
      ))}
    </Slider>
  )
}

export default Shelf
