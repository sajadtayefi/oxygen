import { React } from 'react';
import { useSwiper } from 'swiper/react';
import next from "../Assets/Icon/Path 2358.png"

export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
      <button className="z-20  -translate-y-20 md:-translate-y-48 lg:-translate-y-60 xl:-translate-y-72 2xl:-translate-y-96  " onClick={() => swiper.slideNext()}>
        <img className='w-5 md:w-10' src={next} alt="next" />
      </button>
  );
}