import Image from 'next/image';
import Link from 'next/link';
import arrowRight from '../../assets/images/arrowRight.svg';
import pin from '../../assets/images/pin.svg';
import getImg from '../../utils/getImg';

const RoadmapHeroCard = ({ data }) => {
  const {roadmapHeroCountry, roadmapHeroRegion, roadmapHeroDate, roadmapHeroTime, roadmapHeroTitle, roadmapHeroDescription, roadmapHeroLinkName, roadmapHeroLinkURL, roadmapHeroImage } = data;

  return (
    <div className="roadmap-hero-card" style={{backgroundImage: `url('${getImg(roadmapHeroImage)}')`}}>
      <div className="roadmap-hero-card__bg">
      <div className="roadmap-hero-card__content">
        <div className="roadmap-hero-card__text">
          <div className="roadmap-hero-card__header">
            <div className="roadmap-hero-card__location">
              <Image src={pin} alt="pin" />
              <span className="roadmap-hero-card__location__country">{roadmapHeroCountry}</span>
              <span className="roadmap-hero-card__dot">•</span>
              <span className="roadmap-hero-card__location__region">{roadmapHeroRegion}</span>
            </div>
            <p className="roadmap-hero-card__date">
              <span className="roadmap-hero-card__date--day">{roadmapHeroDate}</span>
              <span>{roadmapHeroTime}</span>
            </p>
          </div>          
          <h3 className="roadmap-hero-card__title">{roadmapHeroTitle}</h3>
          <p className="roadmap-hero-card__description">{roadmapHeroDescription}</p>
          <Link  href={roadmapHeroLinkURL}>
            <a className="roadmap-hero-card__link modified-link arrow-hover-right">
              <span className="roadmap-hero-card__link__span">{roadmapHeroLinkName}</span>
              <Image src={arrowRight} alt="black arrow" className="roadmap-hero-card__arrow arrow-image"/>
            </a>
          </Link>          
        </div>               
      </div>
      </div>
    </div>
  );
};

export default RoadmapHeroCard;
