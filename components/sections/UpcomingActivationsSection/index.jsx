import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SliderNav, UpcomingActivationsCard } from 'components';

const UpcomingActivationsSection = ({data}) => {
  const [swiper, setSwiper] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(2.15);
  const [centeredSlide, setCenteredSlide] = useState(false);

  const getSlidesPerView = () => {
    if (typeof window !== 'undefined' && window.screen.width <= 630) {
      setSlidesPerView(1);
    } else if (typeof window !== 'undefined' && window.screen.width <= 1440) {
      setSlidesPerView(2);
      setCenteredSlide(true);
    } else {
      setSlidesPerView(2.15);
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
        <div className="uaektion__slider">
          <Swiper
            id="uaecktionSlider"
            slidesPerView={slidesPerView}
            spaceBetween={32}
            centeredSlides={centeredSlide}
            onSwiper={(swiper) => setSwiper(swiper)}
            loop={true}
          >
            {upcomingActivations}
              
          </Swiper>
        </div>
        <div className="uaektion__slider-nav">
          <SliderNav
            total={10}
            current={1}
            onPrevClick={() => swiper.slidePrev(300)}
            onNextClick={() => swiper.slideNext(300)}
            theme="dark"
          />
        </div>
      </div>
    </section>
  );
};

export default UpcomingActivationsSection;
