import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// swiper styles
import 'swiper/css';

import { SliderNav, BubbleCard, SectionLine } from 'components';

const SliderSection = () => {
  const [swiper, setSwiper] = useState(null);

  return (
    <section className="slection">
      <div className="slection__inner">
        <div className="slection__left">
          <h2 className="slection__left__title">
            We have a mandate to turn the tide on the ocean plastics crisis
          </h2>
          <p className="slection__left__subtitle">
            At the fifthh UN Environment Assembly on March 2, 2022, member
            states agreed to start negotiations on a global plastics treaty that
            will:
          </p>
          <div className="slection__left__slidernav">
            <SliderNav
              total={10}
              current={1}
              onPrevClick={() => swiper.slidePrev(300)}
              onNextClick={() => swiper.slideNext(300)}
            />
          </div>
        </div>
        <div className="slection__right">
          <Swiper
            id="slectionSlider"
            slidesPerView={1.2}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => setSwiper(swiper)}
          >
            <SwiperSlide>
              <BubbleCard />
            </SwiperSlide>
            <SwiperSlide>
              <BubbleCard />
            </SwiperSlide>
            <SwiperSlide>
              <BubbleCard />
            </SwiperSlide>
            <SwiperSlide>
              <BubbleCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <SectionLine className="slection__line" />
    </section>
  );
};

export default SliderSection;
