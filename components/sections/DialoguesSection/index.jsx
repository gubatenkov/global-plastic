import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { DialogueCard, SliderNav } from 'components';

const DialoguesSection = ({ data: { dialogsSectionTitle, dialogsCards } }) => {
  const [swiper, setSwiper] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(1.75);
  const [activeIndex, setActiveIndex] = useState(1);

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
      setSlidesPerView(1.75);
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
    <section className="dialection">
      <div className="dialection__inner">
        <div className="dialection__left">
          <h2 className="dialection__left__title">{dialogsSectionTitle}</h2>
          <div className="dialection__left-nav">
            <SliderNav
              total={dialogsCards?.length ?? 0}
              current={activeIndex}
              onPrevClick={() => swiper.slidePrev(300)}
              onNextClick={() => swiper.slideNext(300)}
              theme="dark"
            />
          </div>
        </div>
        <div className="dialection__right">
          <Swiper
            id="dialectionSlider"
            spaceBetween={35}
            slidesPerView={slidesPerView}
            onSlideChange={updateActiveIndex}
            onSwiper={handleContext}
            loop
          >
            {dialogsCards?.length &&
              dialogsCards.map((card, idx) => {
                return (
                  <SwiperSlide key={idx}>
                    <DialogueCard {...card} />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
      <div className="dialection__slider-navmob">
        <SliderNav
          total={dialogsCards?.length ?? 0}
          current={activeIndex}
          onPrevClick={() => swiper.slidePrev(300)}
          onNextClick={() => swiper.slideNext(300)}
          theme="dark"
        />
      </div>
    </section>
  );
};

export default DialoguesSection;
