import Image from 'next/image';

import img from 'assets/images/regionImg.png';

const RegionCard = () => {
  return (
    <div className="regard">
      <div className="regard__imgbox">
        <Image
          className="regard__imgbox__img"
          src={img}
          alt="img"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <p className="regard__text">Latin America</p>
    </div>
  );
};

export default RegionCard;
