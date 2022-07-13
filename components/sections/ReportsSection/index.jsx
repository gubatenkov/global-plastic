import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SliderNav, ReportsCard, ReportsDropdown } from 'components';

const ReportsSection = ({data}) => {
  const [swiper, setSwiper] = useState(null);
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
    if (typeof window !== 'undefined' && window.screen.width <= 630) {
      setSlidesPerView(1);
    } else if (typeof window !== 'undefined' && window.screen.width <= 1200) {
      setSlidesPerView(2);
      setCenteredSlide(true);
    } else {
      setSlidesPerView(3);
      setCenteredSlide(false);
    }
  };

  useEffect(() => {
    getSlidesPerView();
    if (window) {
      const listener = window.addEventListener('resize', getSlidesPerView);
      return () => window.removeEventListener('resize', listener);
    }
  }, []);

  const reportsCards = data.map((item, index) => {
    return (
      <SwiperSlide  key={index}>
        <ReportsCard data={item} />
      </SwiperSlide>
    );
  });

  return (
    <section className="rektion">
      <div className="rektion__center">
        <div className="rektion__header">
          <h2 className="rektion__title">Reports & Guides</h2>
          <ReportsDropdown dropdownName='Region' />
          <ReportsDropdown dropdownName='Country' />
        </div>
        <div className="rektion__slider">
          <Swiper
            id="uaecktionSlider"
            slidesPerView={slidesPerView}
            spaceBetween={32}
            centeredSlides={centeredSlide}
            onSwiper={(context) => handleContext(context)}
            onSlideChange={updateActiveIndex}
            loop={true}
          >
            {reportsCards}
              
          </Swiper>
        </div>
        <div className="rektion__slider-nav">
          <SliderNav
            total={reportsCards?.length ?? 0}
            current={activeIndex}
            onPrevClick={() => swiper.slidePrev(300)}
            onNextClick={() => swiper.slideNext(300)}
            theme="light"
          />
        </div>
      </div>
    </section>
  );
};

export default ReportsSection;
