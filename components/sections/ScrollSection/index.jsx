import { useState, useRef, useCallback, useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import {
  motion,
  useTransform,
  useSpring,
  useScroll,
  useAnimationControls,
  useMotionValue,
} from 'framer-motion';
import debounce from 'lodash.debounce';

import ScrubbleCard from './components/ScrubbleCard';
import Wave1 from './components/Wave1';
import Wave2 from './components/Wave2';

const ScrollSection = ({ data: { title, subtitle, slides } }) => {
  const rightRef = useRef(null);
  const ghostRef = useRef(null);
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);
  const [step, setStep] = useState(0);
  const controls = useAnimationControls();
  const [offsets, setOffsets] = useState([0]);
  const [viewportW, setViewportW] = useState(0);
  const [scrollRange, setScrollRange] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    scrollRef && setScrollRange(scrollRef.current.scrollWidth);
  }, [scrollRef]);

  const onResize = useCallback((entries) => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width);
    }
  }, []);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => onResize(entries));
    resizeObserver.observe(ghostRef.current);
    return () => resizeObserver.disconnect();
  }, [onResize]);

  const { scrollY } = useScroll({
    container: sectionRef,
  });
  const x = useMotionValue(offsets);
  const transform = useTransform(
    x,
    [0, 1],
    [0, -scrollRange + viewportW + 400]
  );
  const physics = { damping: 20, mass: 0.27, stiffness: 55 };
  const spring = useSpring(transform, physics);

  const scrollHandler = useCallback(
    (dir) => {
      if (dir === 'down' && step === slides.length) {
        window.scrollTo({
          top:
            sectionRef.current.getBoundingClientRect().height +
            window.pageYOffset,
          behavior: 'smooth',
        });
      } else if (dir === 'down') {
        setStep((prev) => (prev <= slides.length ? prev + 1 : prev));
      } else if (dir === 'up' && step === 0) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      } else if (dir === 'up') {
        setStep((prev) => (prev >= 1 ? prev - 1 : prev));
      }
    },
    [slides.length, step]
  );

  // set offsets from each left edge of the slide to the left edge of their parent container
  const setSlidesOffsets = (ref) => {
    setOffsets((prev) => [...prev, ref.current.offsetLeft]);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedHandler = useCallback(debounce(scrollHandler, 300), [step]);

  const getOffset = useCallback(() => {
    if (typeof window !== 'undefined' && window.innerWidth > 1440) {
      return currentSlide === slides.length
        ? -offsets[slides.length - 3]
        : -offsets[step < slides?.length - 2 ? step : slides?.length - 3] +
            (step !== 0 ? 100 : 0);
    } else {
      return currentSlide === slides.length
        ? -offsets[slides.length - 2]
        : -offsets[step < slides?.length - 2 ? step : slides?.length - 2] +
            (step !== 0 ? 100 : 0);
    }
  }, [currentSlide, offsets, slides.length, step]);

  // get horizontal offset and move to the next slide
  useEffect(() => {
    controls.start({
      x: getOffset(),
    });
  }, [controls, getOffset, offsets, slides.length, step]);

  // listen the scroll up/down events on the section and call handler
  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest < 0) return;

      let isScrollingDown = scrollY.getPrevious() - latest < 0;
      let scrollDirection = isScrollingDown ? 'down' : 'up';

      debouncedHandler(scrollDirection);
    });
  }, [debouncedHandler, scrollY]);

  const currentX = {
    0: 0,
    1: -175,
    2: -350,
    3: -525,
    4: -700,
    5: -795,
    6: -190,
  };

  return (
    <section className="screction" ref={sectionRef}>
      <ScrollNav
        currentSlide={currentSlide}
        totalSlides={slides?.length ?? 0}
      />
      <motion.div
        className="screction__watch"
        onViewportEnter={() => {
          window.scrollTo({
            top:
              sectionRef.current.getBoundingClientRect().top + window.scrollY,
            behavior: 'smooth',
          });
        }}
      />
      <div className="screction__container">
        <motion.div
          ref={scrollRef}
          style={{ x: spring }}
          className="thumbnails-container"
          animate={controls}
        >
          <Wave1
            className="screction__wave-1"
            animate={{
              x: currentX[step],
            }}
            transition={{ duration: 1 }}
          />
          <Wave2
            className="screction__wave-2"
            animate={{
              x: currentX[step] * 1.2,
            }}
            transition={{ duration: 1 }}
          />
          <div className="screction__inner">
            <div className="screction__left">
              <div className="screction__text">
                <motion.h2
                  className="slection__left__title"
                  initial={{ x: '-100%' }}
                  whileInView={{ x: '0' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                >
                  {title}
                </motion.h2>
                <motion.p
                  className="slection__left__subtitle"
                  initial={{ x: '-100%' }}
                  whileInView={{ x: '0', transitionDelay: 0.2 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                >
                  {subtitle}
                </motion.p>
                <motion.button
                  className="screction__left__btn"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1 }}
                >
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
                </motion.button>
              </div>
            </div>
            <div className="screction__right" ref={rightRef}>
              {slides.map(({ _key, image, title, subtitle }, idx) => {
                return (
                  <ScrubbleCard
                    key={_key}
                    image={image}
                    title={title}
                    order={idx + 1}
                    subtitle={subtitle}
                    isActive={step === idx + 1}
                    setOffset={setSlidesOffsets}
                    setCurrentIdx={setCurrentSlide}
                  />
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
      <div ref={ghostRef} style={{ height: scrollRange }} className="ghost" />
    </section>
  );
};

const ScrollNav = ({ currentSlide, totalSlides }) => (
  <div className="screction__nav">
    <span>0{currentSlide}</span>
    <svg
      width="4"
      height="4"
      viewBox="0 0 4 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="1.99976" cy="2" r="2" fill="#F9B131" />
    </svg>

    <span>0{totalSlides}</span>
  </div>
);

export default ScrollSection;
