import Image from 'next/image';

import img from 'assets/images/newsCardimgBig.png';
import arrowRight from 'assets/images/arrowRight.svg';

const NewsCardBig = () => {
  return (
    <div className="ncard-big">
      <div className="ncard-big__preview">
        <Image
          className="ncard-big__preview__img"
          src={img}
          alt="img"
          objectFit="cover"
        />
      </div>
      <div className="ncard-big__bottom">
        <p className="ncard-big__bottom__date">28.05 2021</p>
        <p className="ncard-big__bottom__title">
          The story behaind “Glant Plastic Tap” at UNEA 5.2
        </p>
      </div>
      <a className="hero__panel__link" href="#">
        <Image src={arrowRight} alt="black arrow" />
      </a>
    </div>
  );
};

export default NewsCardBig;
