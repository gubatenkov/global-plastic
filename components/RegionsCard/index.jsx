import Image from 'next/image';

import { urlForImage } from 'lib/sanity';

const RegionCard = ({ regionCardTitle, regionCardImage }) => {
  return (
    <div className="regard">
      <div className="regard__imgbox">
        <Image
          className="regard__imgbox__img"
          src={urlForImage(regionCardImage).url()}
          alt={regionCardTitle}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <p className="regard__text">{regionCardTitle}</p>
    </div>
  );
};

export default RegionCard;
