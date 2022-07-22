import Image from 'next/image';
import { motion } from 'framer-motion';

import { urlForImage } from 'lib/sanity';

const PartnersCard = ({ title, logos, index }) => {
  const getIndex = (idx) => {
    if (idx < 10) return `0${idx}`;
    return idx;
  };

  return (
    <li className="parection__cards__item">
      <motion.div
        className="parection-card"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1, delay: index * 0.2 }}
        viewport={{ once: true }}
      >
        <div className="parection-card__list">
          {logos.map((img, idx) => {
            return (
              <div className="parection-card__list-imgbox" key={idx}>
                <Image
                  className="parection-card__list-imgbox__img"
                  key={idx}
                  src={urlForImage(img).url()}
                  layout="responsive"
                  width={150}
                  height={75}
                  objectFit="contain"
                  alt="img"
                />
              </div>
            );
          })}
        </div>
        <div className="parection-card__info">
          <p className="parection-card__info__type">{title}</p>
          <p className="parection-card__info__num">{getIndex(index)}</p>
        </div>
      </motion.div>
    </li>
  );
};

export default PartnersCard;
