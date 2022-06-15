import React, { useState } from "react";
import pro from "../Assets/Picture/professional.png";
import picture from "../Assets/Picture/Group 1327.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SlideNextButton from "./SlideNextButton";
import SlidePerButton from "./SlidePerButton";


SwiperCore.use([EffectCoverflow]);

export default function Professional() {
  const [active, setActive] = useState(false);

  return (
    <div className=" w-full flex flex-col justify-center -z-10 items-center  lg:mt-40  ">
      <div className="mt-40 top-picture self-center items-center flex w-auto   justify-center  " >
        <img className=" w-96 lg:max-w-lg self-center " src={pro} alt="pic" />
      </div>
      <div className=" w-full m-20  justify-center items-center flex flex-row-reverse">
        <Swiper
          className="w-full"
          // install Swiper modules
          modules={[EffectCoverflow, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          initialSlide={1}
          speed={1500}
          centerInsufficientSlides={true}
          maxBackfaceHiddenSlides={3}
          rewind={true}
          effect="coverflow"
          breakpoints={
            {
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 50,
              }
              // when window width is >= 480px
              , 480: {
                slidesPerView: 1,
                spaceBetween: 70,
              }
              // when window width is >= 640px
              , 640: {
                slidesPerView: 3,
                spaceBetween: 10,
              }
              // when window width is >= 768px
              , 768: {
                slidesPerView: 3,
                spaceBetween: 10
              }
              // when window width is >= 1024px
            }
          }
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
          <div className="  md:flex flex-row justify-between mx-5 items-center hidden">
            <SlidePerButton />
            <SlideNextButton />
          </div>
          <SwiperSlide>
            {({ isActive }) => (
              <div className={isActive ? "hover:scale-105" : " hover:scale-105 blur-sm"}><img src={picture} alt="" /></div>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <div className={isActive ? " hover:scale-105" : " hover:scale-105 blur-sm"}><img src={picture} alt="" /></div>
            )}
          </SwiperSlide>

          <SwiperSlide>
            {({ isActive }) => (
              <div className={isActive ? " hover:scale-105" : " hover:scale-105 blur-sm"}><img src={picture} alt="" /></div>
            )}
          </SwiperSlide>

        </Swiper>
      </div>
    </div >
  )
}