import { useState } from 'react';

import { BubbleCard } from 'components';

const ScrollSection = ({ data: { title, subtitle, slides } }) => {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const [scroll, setScroll] = useState(0);

  const updateActiveIndex = (context) => {
    setActiveIndex(context.realIndex + 1);
  };

  const handleContext = (context) => {
    setSwiper(context);
  };

  const handleScroll = (e) => {
    // const percent = (e.target.scrollHeight - e.target.clientHeight) / 100;
    // const scrollPercent = e.target.scrollTop / percent;
    const percent = e.target.scrollHeight / 100;
    const scrollPercent = e.target.scrollTop / percent;
    setScroll(scrollPercent - e.target.clientHeight / percent);
  };

  return (
    <section className="screction">
      <div className="screction__scrollwrap" onScroll={handleScroll}>
        <div className="screction__scroll" />
      </div>
      <ScrollNav />
      <div
        className="screction__inner"
        style={{ transform: `translateX(-${scroll}%)` }}
      >
        <div className="screction__left">
          <div className="screction__text">
            <h2 className="slection__left__title">{title}</h2>
            <p className="slection__left__subtitle">{subtitle}</p>
            <button className="screction__left__btn">
              Just scroll{' '}
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 6H12M12 6L7.33333 1.5M12 6L7.33333 10.5"
                  stroke="#F9B131"
                  strokeWidth="1.5"
                  strokeLinejoin="bevel"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="screction__right">
          {slides.map(({ _key, image, title, subtitle }, idx) => {
            return (
              <BubbleCard
                className="compble"
                key={_key}
                image={image}
                title={title}
                subtitle={subtitle}
                order={idx + 1}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ScrollNav = () => (
  <div className="screction__nav">
    <span>01</span>
    <svg
      width="4"
      height="4"
      viewBox="0 0 4 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="1.99976" cy="2" r="2" fill="#F9B131" />
    </svg>

    <span>05</span>
  </div>
);

export default ScrollSection;
