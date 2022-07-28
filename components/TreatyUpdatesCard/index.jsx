import Link from 'next/link';
import Image from 'next/image';

import getImg from '../../utils/getImg';

import pin from '../../assets/images/pin.svg';
import arrowRight from 'assets/images/arrowRight.svg';

const TreatyUpdatesCard = ({
  data: {
    treatyUpdatesImage,
    treatyUpdatesLocation,
    treatyUpdatesTitle,
    treatyUpdatesDate,
    treatyUpdatesLink,
  },
}) => {
  return (
    <div className="trecard ua-country-card">
      <div className="ua-country-card__imgbox">
        <Image
          className="ua-country-card__imgbox__img"
          src={getImg(treatyUpdatesImage)}
          alt="img"
          layout="fill"
          priority
        />
      </div>
      <div className="ua-country-card__content">
        <div className="ua-country-card__text">
          <div className="ua-country-card__location">
            <Image src={pin} alt="pin" />
            <span className="ua-country-card__location__span">
              {treatyUpdatesLocation}
            </span>
          </div>
          <h3 className="ua-country-card__activation-title">
            <span>{treatyUpdatesTitle}</span>
          </h3>
          <p className="ua-country-card__date">
            <span className="ua-country-card__date--day">
              {treatyUpdatesDate}
            </span>
          </p>
        </div>
        <Link href={treatyUpdatesLink}>
          <a className="ua-country-card__link modified-link arrow-hover-right">
            <Image src={arrowRight} alt="black arrow" className="arrow-image" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default TreatyUpdatesCard;
