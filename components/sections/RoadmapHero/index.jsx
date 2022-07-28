import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SliderNav, RoadmapHeroCard } from 'components';

const RoadmapHero = ({data}) => {
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
      setCenteredSlide(true);
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

  const roadmapHeroCards = data.map((item, index) => {
    return (
      <SwiperSlide  key={index}>
        <RoadmapHeroCard data={item} />
      </SwiperSlide>
    );
  });

  return (
    <section className="rhektion">
      <div className="rhektion__center">
        <div className="rhektion__slider">
          <Swiper
            id="rhektionSlider"            
            slidesPerView={slidesPerView}
            spaceBetween={32}
            centeredSlides={centeredSlide}
            onSwiper={(context) => handleContext(context)}
            onSlideChange={updateActiveIndex}
            loop={true}
          >
            {roadmapHeroCards}
              
          </Swiper>
        </div>
        <div className="rhektion__slider-nav">
          <SliderNav
            total={roadmapHeroCards?.length ?? 0}
            current={activeIndex}
            onPrevClick={() => swiper.slidePrev(300)}
            onNextClick={() => swiper.slideNext(300)}
            theme="dark"
          />
        </div>
      </div>
    </section>
  );
};

export default RoadmapHero;
