import Image from 'next/image';

import img from 'assets/images/partner1.png';

const PartnersCard = () => {
  return (
    <li className="parection__cards__item">
      <div className="parection-card">
        <div className="parection-card__list">
          <div className="parection-card__list-imgbox">
            <Image
              className="parection-card__list-imgbox__img"
              src={img}
              alt="img"
            />
          </div>
        </div>
        <div className="parection-card__info">
          <p className="parection-card__info__type">Managing partner</p>
          <p className="parection-card__info__num">01</p>
        </div>
      </div>
    </li>
  );
};

export default PartnersCard;
