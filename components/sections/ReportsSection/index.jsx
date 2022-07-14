import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SliderNav, ReportsCard, ReportsDropdown } from 'components';

const ReportsSection = ({data}) => {
  const regions = [...new Set(data.map(el => el.reportRegion))];
  const countries = [...new Set(data.map(el => el.reportCountry))];

  const [swiper, setSwiper] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [activeIndex, setActiveIndex] = useState(1);
  const [reportRegion, setReportRegion] = useState(null);
  const [reportCountry, setReportCountry] = useState(null);

  const filterData = data.filter(el => reportRegion ? el.reportRegion === reportRegion : el)
                         .filter(el => reportCountry ? el.reportCountry === reportCountry : el);

  const updateActiveIndex = (context) => {
    setActiveIndex(context.realIndex + 1);
  };

  const handleContext = (context) => {
    setSwiper(context);
  };

  const getSlidesPerView = () => {
    if (typeof window !== 'undefined' && window.screen.width <= 630) {
      setSlidesPerView(1);
    } else if (typeof window !== 'undefined' && window.screen.width <= 1200) {
      setSlidesPerView(filterData.length < 2 ? filterData.length : 2); 
    } else {
      setSlidesPerView(filterData.length < 3 ? filterData.length : 3);
    }
  };

  useEffect(() => {
    getSlidesPerView();
    if (window) {
      const listener = window.addEventListener('resize', getSlidesPerView);
      return () => window.removeEventListener('resize', listener);
    }
  }, []);

  const reportsCards = filterData.map((item, index) => {
    return (
      <SwiperSlide  key={index}>
        <ReportsCard data={item} />
      </SwiperSlide>
    );
  });

  const transferData = (event, dropdownData, dropdownName) => {
    if(dropdownName === 'reportRegion') {
      setReportRegion(dropdownData[event.target.id] || null)
    } else if(dropdownName === 'reportCountry') {
      setReportCountry(dropdownData[event.target.id] || null)
    } 
  }

  return (
    <section className="rektion">
      <div className="rektion__center">
        <div className="rektion__header">
          <h2 className="rektion__title">Reports & Guides</h2>
          <div className="rektion__container">
            <ReportsDropdown dropdownName='reportRegion' dropdownData={regions} transferData={transferData} />
            <ReportsDropdown dropdownName='reportCountry' dropdownData={countries} transferData={transferData}/>
          </div>
        </div>
        <div className="rektion__slider">
          <Swiper
            id="recktionSlider"
            slidesPerView={slidesPerView}
            spaceBetween={32}
            centeredSlides={true}
            onSwiper={(context) => handleContext(context)}
            onSlideChange={updateActiveIndex}
            loop={true}
          >
            {reportsCards}
              
          </Swiper>
        </div>
        <div className="rektion__slider-nav">
          <SliderNav
            total={reportsCards?.length ?? 0}
            current={activeIndex}
            onPrevClick={() => swiper.slidePrev(300)}
            onNextClick={() => swiper.slideNext(300)}
            theme="light"
          />
        </div>
      </div>
    </section>
  );
};

export default ReportsSection;
