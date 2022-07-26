import ResizeObserver from 'resize-observer-polyfill';
import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, useTransform, useSpring, useScroll } from 'framer-motion';

import ScrubbleCard from './components/ScrubbleCard';

const ScrollSection = ({ data: { title, subtitle, slides } }) => {
  const innerRef = useRef(null);
  const rightRef = useRef(null);
  const ghostRef = useRef(null);
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);
  const [step, setStep] = useState(0);
  const [viewportW, setViewportW] = useState(0);
  const [scrollRange, setScrollRange] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [breakpoints, setBreakpoints] = useState([0]);

  const getBreakpoints = useCallback(() => {
    const breakpoints = [0];
    for (let i = 0; i < slides?.length; i++) {
      const val = Number(((1 / slides?.length) * (i + 1)).toFixed(2));
      breakpoints.push(val);
    }
    setBreakpoints(breakpoints);
  }, [slides?.length]);

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

  const { scrollYProgress } = useScroll({
    container: sectionRef,
  });
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange + viewportW + 400]
  );
  const physics = {
    damping: 20,
    mass: 0.27,
    stiffness: 25,
  };
  const spring = useSpring(transform, physics);

  // listen the scroll event and execute the logic
  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      latest = Number(latest.toFixed(2));
      if (latest < 0) return;

      getBreakpoints();

      breakpoints.forEach((br, idx) => {
        if (latest >= br) {
          setStep(idx);
        }
      });
    });
  }, [breakpoints, getBreakpoints, scrollYProgress, slides.length, step]);

  useEffect(() => {
    const spaceHolder = document.querySelector('.space-holder');
    const horizontal = document.querySelector('.horizontal');
    spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;

    function calcDynamicHeight(ref) {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const objectWidth = ref.scrollWidth;
      return objectWidth - vw + vh + 150; // 150 is the padding (in pixels) desired on the right side of the .cards container. This can be set to whatever your styles dictate
    }

    window.addEventListener('scroll', () => {
      const sticky = document.querySelector('.sticky');
      horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;
    });
    console.log(progressY);

    // window.addEventListener('resize', () => {
    //   spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
    // });
  }, []);

  return (
    <section className="containerr">
      <div className="space-holder">
        <div className="sticky">
          <motion.div
            className="horizontal"
            ref={scrollRef}
            // style={{ x: spring }}
          >
            {/* <section role="feed" className="cards">
              <article className="sample-card"></article>
              <article className="sample-card"></article>
              <article className="sample-card"></article>
              <article className="sample-card"></article>
              <article className="sample-card"></article>
            </section> */}
            <section className="screction" ref={sectionRef}>
              <ScrollNav
                currentSlide={currentSlide}
                totalSlides={slides?.length ?? 0}
              />
              <div className="screction__container">
                <motion.div
                  // ref={scrollRef}
                  // style={{ x: spring }}
                  className="thumbnails-container"
                  // animate={controls}
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
                style={{ height: scrollRange }}
                className="ghost"
              />
            </section>
          </motion.div>
        </div>
      </div>
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
