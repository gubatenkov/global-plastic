import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/router';
import viewAll from '../../../utils/viewAll';

import { SliderNav, ReportsCard, ReportsDropdown } from 'components';

const ReportsSection = ({ className = '', data }) => {
  const router = useRouter();
  const fn = () => router.push('#reports');

  const regions = [...new Set(data.map((el) => el.reportRegion))];
  const countries = [...new Set(data.map((el) => el.reportCountry))];

  const [swiper, setSwiper] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [activeIndex, setActiveIndex] = useState(1);
  const [reportRegion, setReportRegion] = useState(null);
  const [reportCountry, setReportCountry] = useState(null);
  const [isMobile, setMobile] = useState(false);

  const filterData = data
    .filter((el) =>
      reportRegion ? reportRegion.includes(el?.reportRegion) : el
    )
    .filter((el) =>
      reportCountry ? reportCountry.includes(el?.reportCountry) : el
    );

  const getSliderWidth = () => {
    let sliderWidth;
    const cardWidth = 395;
    const gap = 32;
    if (filterData.length === 2 && filterData.length < slidesPerView) {
      sliderWidth = cardWidth * 2 + gap + 'px';
    } else {
      sliderWidth = '100%';
    }
    return sliderWidth;
  };

  const updateActiveIndex = (context) => {
    setActiveIndex(context.realIndex + 1);
  };

  const handleContext = (context) => {
    setSwiper(context);
  };

  const getSlidesPerView = () => {
    if (typeof window !== 'undefined' && window.screen.width <= 520) {
      setMobile(true);
    } else if (typeof window !== 'undefined' && window.screen.width <= 630) {
      setSlidesPerView(1);
      setMobile(false);
    } else if (typeof window !== 'undefined' && window.screen.width <= 1200) {
      setSlidesPerView(2);
      setMobile(false);
    } else if (typeof window !== 'undefined' && window.screen.width > 1200) {
      setSlidesPerView(3);
      setMobile(false);
    }
  };

  useEffect(() => {
    getSlidesPerView();
    if (window) {
      const listener = window.addEventListener('resize', getSlidesPerView);
      return () => window.removeEventListener('resize', listener);
    }
  }, []);

  const renderCards = filterData.map((item, index) => {
    return <ReportsCard key={index} data={item} />;
  });

  const renderSwiperCards = filterData.map((item, index) => {
    return (
      <SwiperSlide key={index}>
        <ReportsCard data={item} />
      </SwiperSlide>
    );
  });

  const transferFilter = (event, dropdownData, dropdownName) => {
    const items = Array.from(event.target.parentElement.children);
    const selectedItems = items
      .filter((el) => el.classList.contains('checked'))
      .map((el) => dropdownData[el.id]);
    if (dropdownName === 'reportCountry') {
      setReportCountry(selectedItems);
    }
    if (dropdownName === 'reportRegion') {
      setReportRegion(selectedItems);
    }
  };

  const resetFilter = (dropdownName) => {
    if (dropdownName === 'reportRegion') {
      setReportRegion(null);
    } else if (dropdownName === 'reportCountry') {
      setReportCountry(null);
    }
  };

  return (
    <section className={`rektion ${className}`}>
      <div className="rektion__center" id="reports">
        <div className="rektion__header">
          <h2 className="rektion__title">Reports & Guides</h2>
          <div className="rektion__container">
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
        <div
          className={isMobile ? 'rektion__none' : 'rektion__slider--container'}
        >
          <div className="rektion__slider" style={{ width: getSliderWidth() }}>
            <Swiper
              id="recktionSlider"
              slidesPerView={
                filterData.length < slidesPerView
                  ? filterData.length
                  : slidesPerView
              }
              spaceBetween={32}
              centeredSlides={false}
              onSwiper={(context) => handleContext(context)}
              onSlideChange={updateActiveIndex}
              loop={true}
            >
              {renderSwiperCards}
            </Swiper>
          </div>
          <div className="rektion__slider-nav">
            <SliderNav
              total={renderSwiperCards?.length ?? 0}
              current={activeIndex}
              onPrevClick={() => swiper.slidePrev(300)}
              onNextClick={() => swiper.slideNext(300)}
              theme="dark"
            />
          </div>
        </div>
        <div
          className={isMobile ? 'rektion__cards--container' : 'rektion__none'}
        >
          <div className="rektion__wrapper">
            <div className="rektion__cards">{renderCards}</div>
          </div>
          <button
            className="rektion__button"
            onClick={(event) => viewAll(event, fn)}
          >
            View all
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReportsSection;
