import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SliderNav, RoadmapHeroCard } from 'components';

const RoadmapHero = ({data}) => {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(1);

  const updateActiveIndex = (context) => {
    setActiveIndex(context.realIndex + 1);
  };

  const handleContext = (context) => {
    setSwiper(context);
  };

  const roadmapHeroCards = data.map((item, index) => {
    return (
      <SwiperSlide  key={index}>
        <RoadmapHeroCard data={item} />
      </SwiperSlide>
    );
  });

  return (
    <section className="rhektion">
      <div className="rhektion__slider">          
        <Swiper
          id="rhektionSlider"            
          slidesPerView={1}
          spaceBetween={0}
          centeredSlides={true}
          onSwiper={(context) => handleContext(context)}
          onSlideChange={updateActiveIndex}
          loop={true}
        >
          {roadmapHeroCards}              
        </Swiper>          
      </div>
      <div className="rhektion__center">
        <div className="rhektion__slider-nav">
          <SliderNav
            total={roadmapHeroCards?.length ?? 0}
            current={activeIndex}
            onPrevClick={() => swiper.slidePrev(500)}
            onNextClick={() => swiper.slideNext(500)}
            theme="light"
          />
        </div>
      </div>
    </section>
  );
};

export default RoadmapHero;
