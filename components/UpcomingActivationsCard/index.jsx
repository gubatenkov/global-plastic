import Image from 'next/image';
import Link from 'next/link';
import arrowRight from 'assets/images/arrowRight.svg';
import pin from 'assets/images/pin.svg';
import getImg from '../../utils/getImg';

const UpcomingActivationsCard = ({ data }) => {
  const {upcomingActivationsTitle, upcomingActivationsSubTitle, upcomingActivationsImage, upcomingActivationsLink, upcomingActivationsLocation, upcomingActivationsDate, upcomingActivationsTime } = data;

  return (
    <div className="ua-country-card">
      <div className="ua-country-card__imgbox">
        <Image className="ua-country-card__imgbox__img" src={getImg(upcomingActivationsImage)} alt="img" layout="fill" priority />
      </div>
      <div className="ua-country-card__content">
        <div className="ua-country-card__text">
          <div className="ua-country-card__location">
            <Image src={pin} alt="pin" />
            <span className="ua-country-card__location__span">{upcomingActivationsLocation}</span>
          </div>
          <h3 className="ua-country-card__activation-title">
            <span>{upcomingActivationsTitle}</span>
            <span>{upcomingActivationsSubTitle}</span>
          </h3>
          <p className="ua-country-card__date">
            <span className="ua-country-card__date--day">{upcomingActivationsDate}</span>
            <span>{upcomingActivationsTime}</span>
          </p>
        </div>
        <Link  href={`/countries/${upcomingActivationsLink}`}>
          <a className="ua-country-card__link modified-link">
            <span className="ua-country-card__link__span">Register</span>
            <Image src={arrowRight} alt="black arrow" />
          </a>
        </Link>        
      </div>
    </div>
  );
};

export default UpcomingActivationsCard;
