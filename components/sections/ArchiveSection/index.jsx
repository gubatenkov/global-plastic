import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SliderNav, ArchiveCard } from 'components';

const ArchiveSection = ({data}) => {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(1);

  const updateActiveIndex = (context) => {
    setActiveIndex(context.realIndex + 1);
  };

  const handleContext = (context) => {
    setSwiper(context);
  };

  const archiveCards = data.map((item, index) => {
    return (
      <SwiperSlide  key={index}>
        <ArchiveCard data={item} />
      </SwiperSlide>
    );
  });

  return (
    <section className="arktion">
      <div className="arktion__center">
        <h2 className="arktion__title">Activations Archive</h2>
        <div className="arktion__slider">
          <Swiper
            id="arktionSlider"
            slidesPerView={1}
            spaceBetween={32}
            centeredSlides={true}
            onSwiper={(context) => handleContext(context)}
            onSlideChange={updateActiveIndex}
            loop={true}
          >
            {archiveCards}
              
          </Swiper>
        </div>
        <div className="arktion__slider-nav">
          <SliderNav
            total={archiveCards?.length ?? 0}
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

export default ArchiveSection;
