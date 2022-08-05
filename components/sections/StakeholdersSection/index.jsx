import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SliderNav, StakeholdersCard } from 'components';

const StakeholdersSection = ({
  data: { stakeholdersSectionTitle, stakeholdersCards },
}) => {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(1);

  const updateActiveIndex = (context) => {
    setActiveIndex(context.realIndex + 1);
  };

  const handleContext = (context) => {
    setSwiper(context);
  };

  return (
    <section className="staktion">
      <h2 className="staktion__title">{stakeholdersSectionTitle}</h2>
      <div className="staktion__slider">
        <Swiper
          id="stacktionSlider"
          slidesPerView={1.05}
          spaceBetween={15}
          centeredSlides={true}
          onSlideChange={updateActiveIndex}
          onSwiper={(swiper) => handleContext(swiper)}
          loop={true}
          breakpoints={{
            481: {
              slidesPerView: 2,
              spaceBetween: 35,
            },
          }}
        >
          {stakeholdersCards?.length &&
            stakeholdersCards.map((card) => {
              return (
                <SwiperSlide key={card._key}>
                  <StakeholdersCard {...card} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
      <div className="staktion__slider-nav">
        <SliderNav
          total={stakeholdersCards?.length ?? 0}
          current={activeIndex}
          onPrevClick={() => swiper.slidePrev(300)}
          onNextClick={() => swiper.slideNext(300)}
          theme="dark"
        />
      </div>
    </section>
  );
};

export default StakeholdersSection;
