'use client'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

import { Swiper } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { FC, ReactNode } from 'react'

export const Slider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      navigation
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40
        }
      }}
    >
      {children}
    </Swiper>
  )
}
