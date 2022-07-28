import Image from 'next/image';
import Link from 'next/link';
import arrowRight from 'assets/images/arrowRight.svg';
import pin from '../../assets/images/pin.svg';
import getImg from '../../utils/getImg';

const RoadmapHeroCard = ({ data }) => {
  const {roadmapHeroCountry, roadmapHeroRegion, roadmapHeroDate, roadmapHeroTime, roadmapHeroTitle, roadmapHeroDescription, roadmapHeroLinkName, roadmapHeroLinkURL, roadmapHeroImage } = data;

  return (
    <div className="roadmap-hero-card">
      <div className="roadmap-hero-card__imgbox">
        <Image className="roadmap-hero-card__imgbox__img" src={getImg(roadmapHeroImage)} alt="img" layout="fill" priority />
      </div>
      <div className="roadmap-hero-card__content">
        <div className="roadmap-hero-card__text">
          <div className="roadmap-hero-card__location">
            <Image src={pin} alt="pin" />
            <span className="roadmap-hero-card__location__span">{roadmapHeroCountry}</span>
            <span className="roadmap-hero-card__location__span">{roadmapHeroRegion}</span>
          </div>
          <h3 className="roadmap-hero-card__activation-title">
            <span>{roadmapHeroTitle}</span>
            <span>{roadmapHeroDescription}</span>
          </h3>
          <p className="roadmap-hero-card__date">
            <span className="roadmap-hero-card__date--day">{roadmapHeroDate}</span>
            <span>{roadmapHeroTime}</span>
          </p>
        </div>
        <Link  href={roadmapHeroLinkURL}>
          <a className="roadmap-hero-card__link modified-link arrow-hover-right">
            <span className="roadmap-hero-card__link__span">{roadmapHeroLinkName}</span>
            <Image src={arrowRight} alt="black arrow" className="arrow-image" />
          </a>
        </Link>        
      </div>
    </div>
  );
};

export default RoadmapHeroCard;
