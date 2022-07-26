import { useState, useRef, useEffect } from 'react';
import {
  motion,
  useTransform,
  useSpring,
  useScroll,
  useMotionValue,
} from 'framer-motion';

import ScrubbleCard from './components/ScrubbleCard';

const ScrollSection = ({ data: { title, subtitle, slides } }) => {
  const innerRef = useRef(null);
  const rightRef = useRef(null);
  const ghostRef = useRef(null);
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [step, setStep] = useState(0);
  const [sectionH, setSectionH] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [breakpoints, setBreakpoints] = useState([0, 17, 30, 45, 60, 75, 85]);
  const [scrollRange, setScrollRange] = useState(0);
  const [visiblePart, setVisiblePart] = useState(0);

  useEffect(() => {
    if (containerRef) {
      setSectionH(containerRef.current.getBoundingClientRect().height);
    }
  }, [containerRef]);

  useEffect(() => {
    if (innerRef && rightRef) {
      const innerW = innerRef.current.getBoundingClientRect().width;
      const rightW = rightRef.current.getBoundingClientRect().width;
      const part = innerW - (innerW - rightW);

      setVisiblePart(part);
    }
  }, [rightRef]);

  useEffect(() => {
    let part;
    if (innerRef && rightRef) {
      const innerW = innerRef.current.getBoundingClientRect().width;
      const rightW = rightRef.current.getBoundingClientRect().width;
      part = innerW - rightW;
    }
    sectionRef &&
      setScrollRange(sectionRef.current.getBoundingClientRect().width - part);
  }, [sectionH, sectionRef, visiblePart]);

  const { scrollY } = useScroll();
  const x = useMotionValue(0);
  const transform = useTransform(
    x,
    [0, 100],
    [0, -scrollRange + sectionH - 100]
  );
  const physics = {
    damping: 20,
    mass: 0.27,
    stiffness: 25,
  };
  const spring = useSpring(transform, physics);

  // listen the scroll event and execute the logic
  useEffect(() => {
    return scrollY.onChange((latest) => {
      const start = containerRef?.current?.offsetTop ?? 0;
      if (latest - start < 0 || latest > scrollRange) return;

      breakpoints.forEach((br, idx) => {
        if (x.get() >= br) {
          setStep(idx);
        }
      });

      const pos = Math.abs(
        Number((latest / (scrollRange - start) - 0.25).toFixed(2)) * 100
      );

      x.set(pos);
    });
  }, [breakpoints, scrollRange, scrollY, slides.length, step, x]);

  return (
    <section className="containerr" ref={containerRef}>
      <div
        className="space-holder"
        style={{
          height: `${scrollRange}px`,
        }}
      >
        <div className="sticky" ref={scrollRef}>
          <div className="horizontal">
            <section className="screction" ref={sectionRef}>
              <ScrollNav
                currentSlide={currentSlide}
                totalSlides={slides?.length ?? 0}
              />
              <div className="screction__container">
                <motion.div
                  style={{ x: spring }}
                  className="thumbnails-container"
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
                            setCurrentIdx={setCurrentSlide}
                          />
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              </div>
              {/* <div
                ref={ghostRef}
                style={{ height: scrollRange }}
                className="ghost"
              /> */}
            </section>
          </div>
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
