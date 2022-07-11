import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { RegionsCard, SliderNav } from 'components';

import icon from 'assets/images/cam.svg';

const RegionsSection = ({ data: { regionTitle, regionCards } }) => {
  const [swiper, setSwiper] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(4);
  const [activeIndex, setActiveIndex] = useState(1);

  const updateActiveIndex = (context) => {
    setActiveIndex(context.realIndex + 1);
  };

  const handleContext = (context) => {
    setSwiper(context);
  };

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
          {regionTitle}
        </h2>
        <div className="rection__inner">
          <Swiper
            id="regionsSlider"
            slidesPerView={slidesPerView}
            spaceBetween={slidesPerView === 4 ? 50 : 10}
            onSwiper={(context) => handleContext(context)}
            onSlideChange={updateActiveIndex}
            centeredSlides={slidesPerView !== 4}
            loop
          >
            {regionCards?.length &&
              regionCards.map((card, idx) => {
                return (
                  <SwiperSlide key={idx}>
                    <RegionsCard {...card} />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
        <div className="rection__nav">
          <SliderNav
            total={regionCards?.length ?? 0}
            current={activeIndex}
            onPrevClick={() => swiper.slidePrev(300)}
            onNextClick={() => swiper.slideNext(300)}
          />
        </div>
      </div>
    </section>
  );
};

export default RegionsSection;
