import Image from 'next/image';

import { urlForImage } from 'lib/sanity';

const RegionCard = ({
  regionCardTitle,
  regionCardImage: { image, alt },
  regionCardLink,
}) => {
  return (
    <div className="regard">
      <a className="regard__link" href={regionCardLink ?? '#'}>
        <div className="regard__imgbox">
          <Image
            className="regard__imgbox__img"
            src={urlForImage(image).url()}
            alt={alt}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <p className="regard__text">{regionCardTitle}</p>
      </a>
    </div>
  );
};

export default RegionCard;
