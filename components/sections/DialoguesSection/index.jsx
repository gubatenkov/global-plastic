import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { DialogueCard, SliderNav } from 'components';

const DialoguesSection = () => {
  const [swiper, setSwiper] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(1.75);

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
          <h2 className="dialection__left__title">
            Featuring Global Treaty Dialogues
          </h2>
          <div className="dialection__left-nav">
            <SliderNav
              current={1}
              total={10}
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
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => setSwiper(swiper)}
            loop
          >
            <SwiperSlide>
              <DialogueCard />
            </SwiperSlide>
            <SwiperSlide>
              <DialogueCard />
            </SwiperSlide>
            <SwiperSlide>
              <DialogueCard />
            </SwiperSlide>
            <SwiperSlide>
              <DialogueCard />
            </SwiperSlide>
            <SwiperSlide>
              <DialogueCard />
            </SwiperSlide>
            <SwiperSlide>
              <DialogueCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="dialection__slider-navmob">
        <SliderNav
          current={1}
          total={10}
          onPrevClick={() => swiper.slidePrev(300)}
          onNextClick={() => swiper.slideNext(300)}
          theme="dark"
        />
      </div>
    </section>
  );
};

export default DialoguesSection;
