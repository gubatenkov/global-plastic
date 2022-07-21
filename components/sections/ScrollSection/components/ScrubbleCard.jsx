import Image from 'next/image';
import { useRef } from 'react';
import { motion, transform } from 'framer-motion';

import { urlForImage } from 'lib/sanity';

import img from 'assets/images/slectionSliderImg1.png';
import { useEffect } from 'react';

const ScrubbleCard = ({
  title,
  subtitle,
  image,
  order,
  isActive,
  setOffset,
  setCurrentIdx,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (isActive) {
      setCurrentIdx(order);
    }
  }, [isActive, order, setCurrentIdx]);

  const getImage = (image) => {
    if (!image) return img;
    return urlForImage(image).fit('crop').url();
  };

  useEffect(() => {
    if (ref?.current) {
      setOffset(ref, order);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initialYPositions = {
    1: '0px',
    2: '-75px',
    3: '0px',
    4: '-45px',
    5: '0px',
    6: '-45px',
  };

  const activeXPositions = {
    1: '-55px',
    2: '55px',
    3: '55px',
    4: '-40px',
    5: '-50px',
    6: '0px',
  };

  return (
    <motion.div
      className={isActive ? 'scrubble active' : 'scrubble'}
      initial={{
        width: '290px',
        height: '290px',
        y: order in initialYPositions ? initialYPositions[order] : '0px',
      }}
      whileInView={
        isActive
          ? {
              width: '400px',
              height: '400px',
              backgroundColor: '#302E2E',
              border: '1px solid #302E2E',
              x: order in activeXPositions ? activeXPositions[order] : '0px',
            }
          : {
              width: order === 1 ? '310px' : '290px',
              height: order === 1 ? '310px' : '290px',
              backgroundColor: '#212020',
              border: '1px solid rgba(255, 255, 255, 0.5)',
            }
      }
      transition={{ duration: 1 }}
      ref={ref}
    >
      <motion.div
        className="scrubble__imgbox"
        animate={
          isActive
            ? {
                top: '50px',
                width: '200px',
                height: '200px',
                left: '65px',
                content: '',
              }
            : null
        }
        transition={{ duration: 1 }}
      >
        <Image
          className="scrubble__img"
          src={getImage(image)}
          alt="img"
          layout="fill"
        />
      </motion.div>
      <motion.div
        className="scrubble__number"
        initial={{
          transform: 'translate(-50%, 100%) scale(0)',
          opacity: 0,
        }}
        animate={
          isActive
            ? {
                transform: 'translate(-50%, 20%) scale(1)',
                opacity: 1,
              }
            : {
                transform: 'translate(-50%, 100%) scale(0)',
                opacity: 0,
              }
        }
        transition={{ duration: 1 }}
      >
        0{order}
      </motion.div>
      <div className="scrubble__text">
        <motion.p
          className="scrubble__text__title"
          initial={{ fontSize: '20px' }}
          animate={isActive ? { fontSize: '28px' } : { fontSize: '20px' }}
          transition={{ duration: 1 }}
        >
          {title}
        </motion.p>
        <motion.p
          className="scrubble__text__descr"
          initial={{ fontSize: '14px' }}
          animate={
            isActive ? { fontSize: '14px', opacity: 0.8 } : { opacity: 0 }
          }
          transition={{ duration: 1 }}
        >
          {subtitle}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default ScrubbleCard;
