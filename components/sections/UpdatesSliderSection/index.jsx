import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { NewsTicker, SliderNav, TreatyUpdatesCard } from 'components';

const UpdatesSliderSection = ({ data: { title, updatesSlider, newsLine } }) => {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const [slidesPerView, setSlidesPerView] = useState(3);

  const updateActiveIndex = (context) => {
    setActiveIndex(context.realIndex + 1);
  };

  const handleContext = (context) => {
    setSwiper(context);
  };

  const getSlidesPerView = () => {
    if (typeof window !== 'undefined' && window.screen.width <= 1024) {
      setSlidesPerView(1);
    } else if (typeof window !== 'undefined' && window.screen.width <= 1200) {
      setSlidesPerView(2);
    } else if (typeof window !== 'undefined' && window.screen.width <= 1440) {
      setSlidesPerView(2.5);
    } else if (typeof window !== 'undefined' && window.screen.width > 1440) {
      setSlidesPerView(3);
    }
  };

  useEffect(() => {
    getSlidesPerView();
    if (window) {
      const listener = window.addEventListener('resize', getSlidesPerView);
      return () => window.removeEventListener('resize', listener);
    }
  }, []);

  const upcomingActivations =
    updatesSlider?.length &&
    updatesSlider.map((item, index) => {
      return (
        <SwiperSlide key={index}>
          <TreatyUpdatesCard data={item} />
        </SwiperSlide>
      );
    });

  return (
    <section className="upslection">
      <div className="upslection__ticker">
        <NewsTicker items={newsLine} />
      </div>
      <div className="upslection__center">
        <h2 className="upslection__title">{title}</h2>
      </div>
      <div className="upslection__slider__wrapper">
        <div className="upslection__slider">
          <Swiper
            id="upslectionSlider"
            slidesPerView={slidesPerView}
            spaceBetween={32}
            centeredSlides={true}
            onSwiper={(context) => handleContext(context)}
            onSlideChange={updateActiveIndex}
            loop={true}
          >
            {upcomingActivations}
          </Swiper>
        </div>
      </div>
      <div className="upslection__slider-nav">
        <SliderNav
          total={upcomingActivations?.length ?? 0}
          current={activeIndex}
          onPrevClick={() => swiper.slidePrev(300)}
          onNextClick={() => swiper.slideNext(300)}
          theme="dark"
        />
      </div>
    </section>
  );
};

export default UpdatesSliderSection;
