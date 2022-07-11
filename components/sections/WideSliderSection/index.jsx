import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { BubbleCard, SectionBlackLine, SliderNav } from 'components';

const WideSliderSection = ({ data: { slides } }) => {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const [slidesPerView, setSlidesPerView] = useState(5);

  const updateActiveIndex = (context) => {
    setActiveIndex(context.realIndex + 1);
  };

  const handleContext = (context) => {
    setSwiper(context);
  };

  const getSlidesPerView = () => {
    if (typeof window !== 'undefined' && window.screen.width <= 481) {
      setSlidesPerView(1);
    } else {
      setSlidesPerView(5);
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
    <section className="wlider">
      <div className="wlider__inner">
        <Swiper
          id="wliderSlider"
          spaceBetween={100}
          slidesPerView={slidesPerView}
          onSlideChange={updateActiveIndex}
          onSwiper={(swiper) => handleContext(swiper)}
          centeredSlides
          loop
        >
          {slides?.length &&
            slides.map((slide, idx) => {
              return (
                <SwiperSlide key={idx}>
                  {({ isActive, isPrev, isNext }) =>
                    isActive ? (
                      <BubbleCard
                        className="wlider-bubble active"
                        {...slide}
                        order={idx}
                      />
                    ) : (
                      <BubbleCard
                        className={`wlider-bubble ${
                          isPrev ? 'prev' : isNext ? 'next' : ''
                        }`}
                        {...slide}
                        order={idx}
                      />
                    )
                  }
                </SwiperSlide>
              );
            })}
        </Swiper>
        <div className="wlider__nav">
          <SliderNav
            total={slides?.length ?? 0}
            current={activeIndex}
            onPrevClick={() => swiper.slidePrev(300)}
            onNextClick={() => swiper.slideNext(300)}
            theme="dark"
          />
        </div>
      </div>
      <SectionBlackLine className="wlider__line" />
    </section>
  );
};

export default WideSliderSection;
