import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { DialogueCard, SliderNav } from 'components';

const DialoguesSection = () => {
  const [swiper, setSwiper] = useState(null);

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
            slidesPerView={1.75}
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
    </section>
  );
};

export default DialoguesSection;
