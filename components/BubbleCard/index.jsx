import Image from 'next/image';
import { urlForImage } from 'lib/sanity';

import img from 'assets/images/slectionSliderImg1.png';

const BubbleCard = ({ className = '', title, subtitle, image, order }) => {
  const getImage = (image) => {
    if (!image) return img;
    return urlForImage(image).fit('crop').url();
  };

  return (
    <div className={`bubble ${className}`}>
      <div className="bubble__imgbox">
        <Image
          className="bubble__img"
          src={getImage(image)}
          alt="img"
          layout="fill"
        />
      </div>
      <div className="bubble__number">{order}</div>
      <div className="bubble__text">
        <p className="bubble__text__title">{title}</p>
        <p className="bubble__text__descr">{subtitle}</p>
      </div>
    </div>
  );
};

export default BubbleCard;
