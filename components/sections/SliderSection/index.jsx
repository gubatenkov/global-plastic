import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// swiper styles
import 'swiper/css';

import { SliderNav, BubbleCard, SectionLine } from 'components';

const SliderSection = ({ data: { title, subtitle, slides } }) => {
  const [swiper, setSwiper] = useState(null);

  return (
    <section className="slection">
      <div className="slection__inner">
        <div className="slection__left">
          <h2 className="slection__left__title">{title}</h2>
          <p className="slection__left__subtitle">{subtitle}</p>
        </div>
        <div className="slection__right">
          <Swiper
            id="slectionSlider"
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => setSwiper(swiper)}
            breakpoints={{
              // when window width is >= 481px
              481: {
                slidesPerView: 1.2,
              },
            }}
          >
            {slides.map((slide, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <BubbleCard {...slide} order={idx + 1} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="slection__slidernav">
        <SliderNav
          total={10}
          current={1}
          onPrevClick={() => swiper.slidePrev(300)}
          onNextClick={() => swiper.slideNext(300)}
        />
      </div>
      <SectionLine className="slection__line" />
    </section>
  );
};

export default SliderSection;
