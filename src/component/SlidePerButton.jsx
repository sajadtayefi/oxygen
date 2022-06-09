import { React } from 'react';
import { useSwiper } from 'swiper/react';
import prev from "../Assets/Icon/Path 2357.png"

export default function SlidePerButton() {
  const swiper = useSwiper();

  return (
      <button className="z-20 -translate-y-20 w-full md:-translate-y-48 lg:-translate-y-60 xl:-translate-y-72 2xl:-translate-y-96   " onClick={() => swiper.slidePrev()}>
        <img className='w-5 md:w-10 ' src={prev} alt="next" />
      </button>
  );
}