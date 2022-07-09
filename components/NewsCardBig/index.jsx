import Image from 'next/image';

import { urlForImage } from 'lib/sanity';

import arrowRight from 'assets/images/arrowRight.svg';

const NewsCardBig = ({
  newsBigCardDate,
  newsBigCardImage,
  newsBigCardTitle,
  newsBigCardLink,
}) => {
  return (
    <div className="ncard-big">
      <div className="ncard-big__preview">
        <Image
          className="ncard-big__preview__img"
          src={urlForImage(newsBigCardImage).url()}
          alt="img"
          layout="fill"
          width={592}
          height={513}
          objectFit="cover"
        />
      </div>
      <div className="ncard-big__bottom">
        <p className="ncard-big__bottom__date">{newsBigCardDate}</p>
        <p className="ncard-big__bottom__title">{newsBigCardTitle}</p>
      </div>
      <a className="hero__panel__link" href={newsBigCardLink}>
        <Image src={arrowRight} alt="black arrow" />
      </a>
    </div>
  );
};

export default NewsCardBig;
