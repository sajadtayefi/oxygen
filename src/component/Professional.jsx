import React from "react";
import pro from "../Assets/Picture/professional.png";
import picture from "../Assets/Picture/Group 1327.png";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import {EffectCoverflow, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import next from "../Assets/Icon/Path 2358.png"
import prve from "../Assets/Icon/Path 2357.png"

export default function Professional() {
  const swiper= useSwiper();
  return (
    <div className=" w-full flex flex-col justify-center   ">
      <div className="mt-40 top-picture self-center items-center flex   justify-center  " >
        <img className=" self-center " src={pro} alt="picture" />
      </div>
      <div className=" m-20  justify-center items-center flex flex-row-reverse">
        <button className=" w-24 mx-5" onClick={()=>swiper.slideNext()}>
          <img src={next} alt="" />
        </button>

        <Swiper
          // install Swiper modules
          modules={[EffectCoverflow ]}
          spaceBetween={0}
          slidesPerView={3}
          effect="coverflow"
          speed={1000}
          coverflowEffect={{
            slideShadows: false,
            rotate:0,
            stretch: -50,
            modifier:3
            
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          loop
        >
          <SwiperSlide className=" blur-sm"> <img src={picture} alt="" /></SwiperSlide>
          <SwiperSlide className=""><img src={picture} alt="" /></SwiperSlide>
          <SwiperSlide className=" blur-sm"><img src={picture} alt="" /></SwiperSlide>
        </Swiper>
        <button className=" w-24 mx-5" onClick={()=>swiper.slidePrev()}>
          <img src={prve} alt="" />
        </button>
      </div>
    </div>
  )
}