import { useCallback, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { NewsCardSmall, ReportsDropdown, SliderNav } from 'components';

export default function BuildingProgramsSection({ data: { cards, title } }) {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const [cardRegion, setCardRegion] = useState(null);
  const [cardCountry, setCardCountry] = useState(null);
  const [totalSlides, setTotalSlides] = useState(0);

  const filterData = (items) => {
    const filtered = items
      .filter((el) => (cardRegion ? cardRegion.includes(el.cardRegion) : el))
      .filter((el) =>
        cardCountry ? cardCountry.includes(el.cardCountry) : el
      );
    return filtered;
  };

  const regions = [
    ...new Set(
      cards.filter((el) => 'cardRegion' in el).map((obj) => obj.cardRegion)
    ),
  ];

  const countries = [
    ...new Set(
      cards.filter((el) => 'cardCountry' in el).map((obj) => obj.cardCountry)
    ),
  ];

  const transferFilter = (event, dropdownData, dropdownName) => {
    const items = Array.from(event.target.parentElement.children);
    const selectedItems = items
      .filter((el) => el.classList.contains('checked'))
      .map((el) => dropdownData[el.id]);
    if (dropdownName === 'reportCountry') {
      setCardCountry(selectedItems);
    }
    if (dropdownName === 'reportRegion') {
      setCardRegion(selectedItems);
    }
  };

  const resetFilter = (dropdownName) => {
    if (dropdownName === 'reportRegion') {
      setCardRegion(null);
    } else if (dropdownName === 'reportCountry') {
      setCardCountry(null);
    }
  };

  const updateActiveIndex = (context) => {
    setActiveIndex(context.realIndex + 1);
  };

  const handleContext = (context) => {
    setSwiper(context);
  };

  const countSlides = useCallback(() => {
    window.innerWidth > 481
      ? setTotalSlides(Math.ceil(cards?.length / 4 ?? 0))
      : setTotalSlides(Math.ceil(cards?.length / 2 ?? 0));
  }, [cards?.length]);

  useEffect(() => {
    countSlides();
  }, [countSlides]);

  const renderSlides = (cards) => {
    // here we get array of arrays with two cards in each
    const cardGroups = cards.reduce((acc, el, i, arr) => {
      if (i % 2 === 0) {
        acc.push(arr.slice(i, i + 2));
      }
      return acc;
    }, []);

    return cardGroups.map((arr, i) => {
      return (
        <SwiperSlide key={i}>
          <div
            className={`bpsection__slide-wrap ${
              (i + 1) % 2 !== 0 && 'bpsection__slide-wrap--width'
            }`}
          >
            {arr.map(({ cardDate, cardImage, cardLink, cardTitle }, idx) => {
              return (
                <div className="bpsection__card-wrap" key={idx}>
                  <NewsCardSmall
                    newsSmallCardDate={cardDate}
                    newsSmallCardImage={cardImage}
                    newsSmallCardLink={cardLink}
                    newsSmallCardTitle={cardTitle}
                  />
                </div>
              );
            })}
          </div>
        </SwiperSlide>
      );
    });
  };

  return (
    <section className="bpsection">
      <div className="container">
        <div className="bpsection__inner">
          <div className="bpsection__header">
            <h2 className="bpsection__title">{title}</h2>
            <div className="bpsection__filters">
              <ReportsDropdown
                dropdownName="reportRegion"
                dropdownData={regions}
                transferFilter={transferFilter}
                resetFilter={resetFilter}
              />
              <ReportsDropdown
                dropdownName="reportCountry"
                dropdownData={countries}
                transferFilter={transferFilter}
                resetFilter={resetFilter}
              />
            </div>
          </div>
          <div className="bpsection__cards">
            <Swiper
              id="bpsectionSlider"
              slidesPerView={1}
              onActiveIndexChange={updateActiveIndex}
              onSwiper={(swiper) => handleContext(swiper)}
              breakpoints={{
                481: {
                  slidesPerView: 2,
                },
              }}
            >
              {renderSlides(filterData(cards))}
            </Swiper>
          </div>
          <div className="bpsection__nav">
            <SliderNav
              total={totalSlides}
              current={activeIndex}
              onPrevClick={() => swiper.slidePrev(300)}
              onNextClick={() => swiper.slideNext(300)}
              theme="dark"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
