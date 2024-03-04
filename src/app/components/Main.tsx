'use client'

import React from 'react'
import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'

register()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade';

import Image from 'next/image'

function Main() {
  const data = [
    { id: "1", image: "/img/car_01.png" },
    { id: "2", image: "/img/car_02.png" },
    { id: "3", image: "/img/car_03.png" }
  ]

  return (
    <section className='mt-16'>
      <div className='w-full'>
        <Swiper
          effect={'fade'}
          autoplay
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <Image
                src={item.image}
                alt='Slider'
                width={1620}
                height={120}
                className='w-full'
              />
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
    </section>
  )
}

export default Main