import { HeroPanel, Map, NewsTicker } from 'components';

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
            <HeroPanel
              leftText={heroBoldPanelText}
              centerText={heroPanelText}
              linkURL={heroURL}
            />
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
