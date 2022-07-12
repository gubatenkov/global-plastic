import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SliderNav, BubbleCard, SectionLine } from 'components';

const SliderSection = ({ data: { title, subtitle, slides } }) => {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(1);

  const updateActiveIndex = (context) => {
    setActiveIndex(context.realIndex + 1);
  };

  const handleContext = (context) => {
    setSwiper(context);
  };

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
            onActiveIndexChange={updateActiveIndex}
            onSwiper={(swiper) => handleContext(swiper)}
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
      <SectionLine className="slection__line" />
      <div className="slection__slidernav">
        <SliderNav
          total={slides?.length ?? 0}
          current={activeIndex}
          onPrevClick={() => swiper.slidePrev(300)}
          onNextClick={() => swiper.slideNext(300)}
        />
      </div>
    </section>
  );
};

export default SliderSection;
