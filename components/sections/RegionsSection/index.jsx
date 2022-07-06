import Image from 'next/image';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { RegionsCard, SliderNav } from 'components';

import icon from 'assets/images/cam.svg';

const RegionsSection = () => {
  const [swiper, setSwiper] = useState(null);

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
            slidesPerView={1.5}
            spaceBetween={10}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => setSwiper(swiper)}
            centeredSlides
            loop
            breakpoints={{
              // when window width is >= 481px
              481: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
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
