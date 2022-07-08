import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { RegionsCard, SliderNav } from 'components';

import icon from 'assets/images/cam.svg';

const RegionsSection = () => {
  const [swiper, setSwiper] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(4);

  const getSlidesPerView = () => {
    if (typeof window !== 'undefined' && window.screen.width <= 481) {
      setSlidesPerView(1.5);
    } else {
      setSlidesPerView(4);
    }
  };

  // count number of slides on mount & on window resize
  useEffect(() => {
    getSlidesPerView();
    if (window) {
      const listener = window.addEventListener('resize', getSlidesPerView);
      return () => window.removeEventListener('resize', listener);
    }
  }, []);

  return (
    <section className="rection">
      <div className="container">
        <h2 className="rection__title">
          <Image className="rection__center__icon" src={icon} alt="icon" />
          Regions Highlights
        </h2>
        <div className="rection__inner">
          <Swiper
            id="regionsSlider"
            slidesPerView={slidesPerView}
            spaceBetween={slidesPerView === 4 ? 50 : 10}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => setSwiper(swiper)}
            centeredSlides={slidesPerView !== 4}
            loop
          >
            <SwiperSlide>
              <RegionsCard />
            </SwiperSlide>
            <SwiperSlide>
              <RegionsCard />
            </SwiperSlide>
            <SwiperSlide>
              <RegionsCard />
            </SwiperSlide>
            <SwiperSlide>
              <RegionsCard />
            </SwiperSlide>
            <SwiperSlide>
              <RegionsCard />
            </SwiperSlide>
            <SwiperSlide>
              <RegionsCard />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="rection__nav">
          <SliderNav
            total={10}
            current={1}
            onPrevClick={() => swiper.slidePrev(300)}
            onNextClick={() => swiper.slideNext(300)}
          />
        </div>
      </div>
    </section>
  );
};

export default RegionsSection;
