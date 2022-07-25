import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SliderNav, UpcomingActivationsCard } from 'components';

const UpcomingActivationsSection = ({data}) => {
  const [swiper, setSwiper] = useState(null);
  const [swiperWidth, setSwiperWidth] = useState('100%');
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [centeredSlide, setCenteredSlide] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);

  const updateActiveIndex = (context) => {
    setActiveIndex(context.realIndex + 1);
  };

  const handleContext = (context) => {
    setSwiper(context);
  };

  const getSlidesPerView = () => {
    if (typeof window !== 'undefined' && window.screen.width <= 1024) {
      setSlidesPerView(1);
      setCenteredSlide(true);
      setSwiperWidth('100%');
    } else if (typeof window !== 'undefined' && window.screen.width <= 1200) {
      setSlidesPerView(2);
      setCenteredSlide(true);
      setSwiperWidth('100%');
    } else if (typeof window !== 'undefined' && window.screen.width <= 1440) {
      setSlidesPerView(3);
      setCenteredSlide(false);
      setSwiperWidth(3 * 608 + 32 * 2 + 'px');
    } else if (typeof window !== 'undefined' && window.screen.width > 1440) {
      setSlidesPerView(6);
      setCenteredSlide(false);
      setSwiperWidth(6 * 608 + 32 * 5 + 'px');
    }
  };

  useEffect(() => {
    getSlidesPerView();
    if (window) {
      const listener = window.addEventListener('resize', getSlidesPerView);
      return () => window.removeEventListener('resize', listener);
    }
  }, []);

  const upcomingActivations = data.map((item, index) => {
    return (
      <SwiperSlide  key={index}>
        <UpcomingActivationsCard data={item} />
      </SwiperSlide>
    );
  });

  return (
    <section className="uaektion">
      <div className="uaektion__center">
        <h2 className="uaektion__title">Upcoming Activations</h2>
        <div className="uaektion__slider-nav">
          <SliderNav
            total={upcomingActivations?.length ?? 0}
            current={activeIndex}
            onPrevClick={() => swiper.slidePrev(300)}
            onNextClick={() => swiper.slideNext(300)}
            theme="dark"
          />
        </div>
      </div>
      <div className="uaektion__slider--wrapper">
        <div className="uaektion__slider" style={{width: swiperWidth}}>
          <Swiper
            id="uaecktionSlider"
            slidesPerView={slidesPerView}
            spaceBetween={32}
            centeredSlides={centeredSlide}
            onSwiper={(context) => handleContext(context)}
            onSlideChange={updateActiveIndex}
            loop={true}
          >
            {upcomingActivations}
              
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default UpcomingActivationsSection;
