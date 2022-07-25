import Image from 'next/image';
import debounce from 'lodash.debounce';
import { useScroll, motion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';

import { CardBase } from 'components';
import Bubble from './components/Bubble';
import Message from './components/Message';

import img1 from 'assets/images/carectionCircle1.png';
import img2 from 'assets/images/carectionCircle2.png';

const CardSection = ({
  data: {
    cardBigText,
    cardBigText2,
    cardSmallText,
    cardSmallText2,
    cardTitle,
    cardTitle2,
    cardYear,
    cardYear2,
    subtitleAfterCards,
    titleAfterCards,
  },
}) => {
  const bubbleRef = useRef(null);
  const sectionRef = useRef(null);
  const { scrollY } = useScroll();
  const [percentage, setPercentage] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedHandler = useCallback(
    debounce(() => {
      window.scrollTo({
        top: sectionRef.current.offsetTop - 440 - window.innerHeight / 2,
        behavior: 'smooth',
      });
    }, 500),
    []
  );

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest < 0) return;
      const sectionH = sectionRef.current.getBoundingClientRect().height - 400;
      const start = sectionRef.current.offsetTop + 400;

      if (latest >= start && latest < start + sectionH) {
        setPercentage(Math.round(latest / (sectionH / 100)) - 202);
      } else if (latest < start) {
        setPercentage(0);
      } else {
        setPercentage(100);
      }

      let isScrollingDown = scrollY.getPrevious() - latest < 0;
      if (
        !isScrollingDown &&
        latest > sectionRef.current.offsetTop &&
        latest < sectionRef.current.offsetTop + 50
      ) {
        // debouncedHandler();
      }
    });
  }, [debouncedHandler, scrollY]);

  return (
    <section className="carection" ref={sectionRef}>
      <div className="container">
        <div className="carection__inner">
          <div className="carection__card-row">
            <CardBase>
              <div className="carection__card-wrap carection__card-wrap--flag">
                <p className="carection__card__title">{cardTitle}</p>
                <div className="carection__card-bottom">
                  <p className="carection__card-bottom__left">{cardBigText}</p>
                  <div className="carection__card-bottom__right">
                    <p className="carection__card-bottom__right__date">
                      {cardYear}
                    </p>
                    <p className="carection__card-bottom__right__text">
                      {cardSmallText}
                    </p>
                  </div>
                </div>
              </div>
            </CardBase>
            <CardBase className="card-base--waves card-base--bg-color">
              <div className="carection__card-wrap">
                <div className="carection__card-top">
                  <p className="carection__card-top__left">{cardBigText2}</p>
                  <div className="carection__card-top__right">
                    <p className="carection__card-top__right__date">
                      {cardYear2}
                    </p>
                    <p className="carection__card-top__right__text">
                      {cardSmallText2}
                    </p>
                  </div>
                </div>
                <div className="carection__card-bottom carection__card-bottom--direction">
                  <p className="carection__card-bottom__title">{cardTitle2}</p>
                  <div className="carection__card-bottom__imgs">
                    <div className="carection__card-bottom__imgs-box">
                      <Image
                        className="carection__card-bottom__imgs-box__img"
                        src={img1}
                        objectFit="cover"
                        alt="img"
                      />
                    </div>
                    <div className="carection__card-bottom__imgs-box carection__card-bottom__imgs-box--border">
                      <Image
                        className="carection__card-bottom__imgs-box__img"
                        src={img2}
                        objectFit="cover"
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardBase>
          </div>
          <div className="carection__text-row">
            <div className="carection__text-row__img">
              <div className="carection__text-row__bubble" ref={bubbleRef}>
                <Bubble
                  style={{
                    transform: `scale(${percentage ? percentage : 1.1})`,
                    transition: 'transform 0.5s linear',
                    zIndex: 11,
                  }}
                />
                <Message className="message" />
              </div>
            </div>
            <motion.h2
              className="carection__text-row__title"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              {titleAfterCards}
            </motion.h2>
            <motion.p
              className="carection__text-row__subtitle"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {subtitleAfterCards}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
