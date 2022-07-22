import { useState, useRef, useCallback, useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import {
  motion,
  useTransform,
  useSpring,
  useScroll,
  useAnimationControls,
} from 'framer-motion';

import ScrubbleCard from './components/ScrubbleCard';

const ScrollSection = ({ data: { title, subtitle, slides } }) => {
  const innerRef = useRef(null);
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
    const diff =
      innerRef.current.getBoundingClientRect().width -
      rightRef.current.scrollWidth;
    scrollRef && setScrollRange(scrollRef.current.scrollWidth - diff + 150);
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

  const { scrollYProgress, scrollY } = useScroll({
    container: sectionRef,
  });
  // const x = useMotionValue(offsets);
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange + viewportW + 400]
  );
  const physics = { damping: 20, mass: 0.27, stiffness: 25 };
  const spring = useSpring(transform, physics);

  // listen the scroll up/down events on the section and call handler
  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      latest = Number(latest.toFixed(2));
      if (latest < 0) return;

      let isScrollingDown = scrollY.getPrevious() - latest < 0;
      let scrollDirection = isScrollingDown ? 'down' : 'up';

      const breakpoints = [0];

      for (let i = 0; i < slides?.length; i++) {
        const val = Number(((1 / 6) * (i + 1)).toFixed(2));
        breakpoints.push(val);
      }

      breakpoints.forEach((br, idx, arr) => {
        if (latest >= br) {
          setStep(idx);
        }
      });
    });
  }, [scrollY, scrollYProgress, slides?.length, step]);

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
          <div className="screction__inner" ref={innerRef}>
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
                    // setOffset={setSlidesOffsets}
                    setCurrentIdx={setCurrentSlide}
                  />
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
      <div
        ref={ghostRef}
        style={{ height: scrollRange + 10000 }}
        className="ghost"
      />
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
