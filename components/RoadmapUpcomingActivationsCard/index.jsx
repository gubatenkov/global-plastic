import Image from 'next/image';
import Link from 'next/link';
import arrowRight from 'assets/images/arrowRight.svg';
import pin from '../../assets/images/pin.svg';
import getImg from '../../utils/getImg';

const RoadmapUpcomingActivationsCard = ({ data }) => {
  const {upcomingActivationsTitle, upcomingActivationsImage, upcomingActivationsLink, upcomingActivationsCountry, upcomingActivationsRegion, upcomingActivationsDate, upcomingActivationsTime } = data;

  return (
    <div className="roadmap-card">
      <div className="roadmap-card__imgbox">
        <Image className="roadmap-card__imgbox__img" src={getImg(upcomingActivationsImage)} alt="img" layout="fill" priority />
      </div>
      <div className="roadmap-card__content">
        <div className="roadmap-card__text">
          <div className="roadmap-card__location">
            <Image src={pin} alt="pin" />
            <span className="roadmap-card__location__span">{upcomingActivationsCountry}</span>
            <span className="roadmap-card__dot">•</span>
            <span className="roadmap-card__location__span">{upcomingActivationsRegion}</span>
          </div>
          <h3 className="roadmap-card__title">{upcomingActivationsTitle}</h3>
          <p className="roadmap-card__date">
            <span className="roadmap-card__date--day">{upcomingActivationsDate}</span>
            <span>{upcomingActivationsTime}</span>
          </p>
        </div>
        <Link  href={`/countries/${upcomingActivationsLink}`}>
          <a className="roadmap-card__link modified-link arrow-hover-right">
            <span className="roadmap-card__link__span">Register</span>
            <Image src={arrowRight} alt="black arrow" className="arrow-image" />
          </a>
        </Link>        
      </div>
    </div>
  );
};

export default RoadmapUpcomingActivationsCard;

