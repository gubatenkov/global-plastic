import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { BubbleCard, SectionBlackLine, SliderNav } from 'components';

const WideSliderSection = () => {
  const [swiper, setSwiper] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(5);

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
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => setSwiper(swiper)}
          centeredSlides
          loop
        >
          <SwiperSlide>
            {({ isActive, isPrev, isNext }) =>
              isActive ? (
                <BubbleCard className="wlider-bubble active" />
              ) : (
                <BubbleCard
                  className={`wlider-bubble ${
                    isPrev ? 'prev' : isNext ? 'next' : ''
                  }`}
                />
              )
            }
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive, isPrev, isNext }) =>
              isActive ? (
                <BubbleCard className="wlider-bubble active" />
              ) : (
                <BubbleCard
                  className={`wlider-bubble ${
                    isPrev ? 'prev' : isNext ? 'next' : ''
                  }`}
                />
              )
            }
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive, isPrev, isNext }) =>
              isActive ? (
                <BubbleCard className="wlider-bubble active" />
              ) : (
                <BubbleCard
                  className={`wlider-bubble ${
                    isPrev ? 'prev' : isNext ? 'next' : ''
                  }`}
                />
              )
            }
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive, isPrev, isNext }) =>
              isActive ? (
                <BubbleCard className="wlider-bubble active" />
              ) : (
                <BubbleCard
                  className={`wlider-bubble ${
                    isPrev ? 'prev' : isNext ? 'next' : ''
                  }`}
                />
              )
            }
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive, isPrev, isNext }) =>
              isActive ? (
                <BubbleCard className="wlider-bubble active" />
              ) : (
                <BubbleCard
                  className={`wlider-bubble ${
                    isPrev ? 'prev' : isNext ? 'next' : ''
                  }`}
                />
              )
            }
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive, isPrev, isNext }) =>
              isActive ? (
                <BubbleCard className="wlider-bubble active" />
              ) : (
                <BubbleCard
                  className={`wlider-bubble ${
                    isPrev ? 'prev' : isNext ? 'next' : ''
                  }`}
                />
              )
            }
          </SwiperSlide>
        </Swiper>
        <div className="wlider__nav">
          <SliderNav
            total={10}
            current={1}
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
