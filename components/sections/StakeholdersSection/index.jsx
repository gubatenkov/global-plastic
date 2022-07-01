import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SliderNav, StakeholdersCard } from 'components';

const StakeholdersSection = () => {
  const [swiper, setSwiper] = useState(null);

  return (
    <section className="staktion">
      <h2 className="staktion__title">What Treaty stakeholders say about us</h2>
      <div className="staktion__slider">
        <Swiper
          id="stacktionSlider"
          slidesPerView={1.5}
          spaceBetween={32}
          centeredSlides={true}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => setSwiper(swiper)}
          loop={true}
        >
          <SwiperSlide>
            <StakeholdersCard />
          </SwiperSlide>
          <SwiperSlide>
            <StakeholdersCard />
          </SwiperSlide>
          <SwiperSlide>
            <StakeholdersCard />
          </SwiperSlide>
          <SwiperSlide>
            <StakeholdersCard />
          </SwiperSlide>
          <SwiperSlide>
            <StakeholdersCard />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="staktion__slider-nav">
        <SliderNav
          total={10}
          current={1}
          onPrevClick={() => swiper.slidePrev(300)}
          onNextClick={() => swiper.slideNext(300)}
          theme="dark"
        />
      </div>
    </section>
  );
};

export default StakeholdersSection;
