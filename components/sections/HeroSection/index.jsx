import Image from 'next/image';

import { Map, NewsTicker } from 'components';

import arrowRight from 'assets/images/arrowRight.svg';

const HeroSection = ({
  data: {
    heroTitle,
    heroSuptitle,
    heroPanelText,
    heroBoldPanelText,
    heroNewsLine,
    heroURL,
  },
}) => {
  return (
    <section className="hero hero--mb">
      <div className="container">
        <div className="hero__inner">
          <Map />
          <div className="hero__center">
            <div className="hero__text">
              <p className="hero__text__suptitle">{heroSuptitle}</p>
              <h1 className="hero__text__title">{heroTitle}</h1>
            </div>
            <div className="hero__panel">
              <div className="hero__panel__text">
                <strong>{heroBoldPanelText}</strong>
                <p>{heroPanelText}</p>
              </div>
              <a className="hero__panel__link" href={heroURL}>
                <Image src={arrowRight} alt="black arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hero__ticker-wrap">
        <NewsTicker className="ticker--rounded" items={heroNewsLine} />
      </div>
    </section>
  );
};

export default HeroSection;
