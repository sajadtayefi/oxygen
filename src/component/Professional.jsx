import React from "react";
import pro from "../Assets/Picture/professional.png";
import picture from "../Assets/Picture/Group 1327.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {  EffectCoverflow } from "swiper";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SlideNextButton from "./SlideNextButton";
import SlidePerButton from "./SlidePerButton";


SwiperCore.use([EffectCoverflow]);

export default function Professional() {
  return (
    <div className=" w-full flex flex-col justify-center -z-10 items-center  lg:mt-40  ">
      <div className="mt-40 top-picture self-center items-center flex w-auto   justify-center  " >
        <img className=" max-w-sm lg:max-w-lg self-center " src={pro} alt="pic" />
      </div>
      <div className=" w-full m-20  justify-center items-center flex flex-row-reverse">
        <Swiper
          className="w-full"
          // install Swiper modules
          modules={[EffectCoverflow]}
          spaceBetween={30}
          slidesPerView={3}
          initialSlide={1}
          centerInsufficientSlides={true}
          maxBackfaceHiddenSlides={3}
          rewind={true}
          effect="coverflow"
          centeredSlides
          coverflowEffect={{
            slideShadows: false,
            rotate: 0,
            stretch: 0,
            modifier: 1,
            depth: 300,
          }}

          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <div className="flex flex-row justify-between mx-5 items-center">
          <SlidePerButton />
          <SlideNextButton />
          </div>
          <SwiperSlide className=" blur-sm"><img src={picture} alt="slider" /></SwiperSlide>
          <SwiperSlide className=""><img src={picture} alt="slider" /></SwiperSlide>
          <SwiperSlide className=" blur-sm"><img src={picture} alt="slider" /></SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  )
}