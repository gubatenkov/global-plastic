import Image from 'next/image';
import { urlForImage } from 'lib/sanity';

import img from 'assets/images/slectionSliderImg1.png';

const BubbleCardBlack = ({ className = '', title, subtitle, image, order }) => {
  const getImage = (image) => {
    if (!image) return img;
    return urlForImage(image).fit('crop').url();
  };

  return (
    <div className={`bubble-black ${className}`}>
      <div className="bubble-black__imgbox">
        <Image
          className="bubble-black__img"
          src={getImage(image)}
          alt="img"
          layout="fill"
        />
      </div>
      <div className="bubble-black__number">{order}</div>
      <div className="bubble-black__text">
        <p className="bubble-black__text__title">{title}</p>
        <p className="bubble-black__text__descr">{subtitle}</p>
      </div>
    </div>
  );
};

export default BubbleCardBlack;
