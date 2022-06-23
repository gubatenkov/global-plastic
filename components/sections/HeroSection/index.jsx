import Image from 'next/image';

import { Map, NewsTicker } from 'components';

import arrowRight from 'assets/images/arrowRight.svg';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__inner">
          <Map />
          <div className="hero__center">
            <div className="hero__text">
              <p className="hero__text__suptitle">Global Treaty Dialogues</p>
              <h1 className="hero__text__title">
                Systemizing inclusion for UNEA Plastics Treaty Globaly
              </h1>
            </div>
            <div className="hero__panel">
              <div className="hero__panel__text">
                <strong>656 DAYS</strong>
                <p>till UNEA 6 2024</p>
              </div>
              <a className="hero__panel__link" href="#">
                <Image src={arrowRight} alt="black arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hero__ticker-wrap">
        <NewsTicker className="ticker--rounded" />
      </div>
    </section>
  );
};

export default HeroSection;
