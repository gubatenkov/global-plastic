import Image from 'next/image';

import { urlForImage } from 'lib/sanity';

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
          objectFit="cover"
        />
      </div>
      <div className="ncard-big__bottom">
        <p className="ncard-big__bottom__date">{newsBigCardDate}</p>
        <p className="ncard-big__bottom__title">{newsBigCardTitle}</p>
      </div>
      <a className="hero__panel__link arrow-hover-right" href={newsBigCardLink}>
        <svg
          className="arrow-image"
          width="19"
          height="14"
          viewBox="0 0 19 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 6.99984L17.7071 6.29273L18.4142 6.99984L17.7071 7.70694L17 6.99984ZM1 7.99984C0.447716 7.99984 0 7.55212 0 6.99984C0 6.44755 0.447716 5.99984 1 5.99984V7.99984ZM12.3738 0.959397L17.7071 6.29273L16.2929 7.70694L10.9596 2.37361L12.3738 0.959397ZM17.7071 7.70694L12.3738 13.0403L10.9596 11.6261L16.2929 6.29273L17.7071 7.70694ZM17 7.99984H1V5.99984H17V7.99984Z"
            fill="#212020"
          />
        </svg>
      </a>
    </div>
  );
};

export default NewsCardBig;
