import debounce from 'lodash.debounce';
import { useScroll } from 'framer-motion';
import { useCallback, useEffect, useRef } from 'react';

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
  const sectionRef = useRef(null);
  const { scrollY, scrollYProgress } = useScroll({ target: sectionRef });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedHandler = useCallback(
    debounce(() => {
      const sectionOffset = sectionRef?.current?.offsetTop;
      const sectionHeight =
        sectionRef?.current?.getBoundingClientRect()?.height;

      window.scrollTo({
        top: sectionOffset + sectionHeight + 440 - window.innerHeight / 2,
        behavior: 'smooth',
      });
    }, 500),
    []
  );

  // scroll listener fire handler after the section is scrolled more than h / 2
  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest < 0) return;

      let isScrollingDown = scrollY.getPrevious() - latest < 0;

      // if (isScrollingDown && scrollYProgress.getPrevious()) debouncedHandler();
    });
  }, [debouncedHandler, scrollY, scrollYProgress]);

  return (
    <section className="hero hero--mb" ref={sectionRef}>
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
