import Image from 'next/image';
import Link from 'next/link';
import arrowRight from 'assets/images/arrowRight.svg';
import getImg from '../../utils/getImg';

const CountryPresenceCard = ({ data }) => {
  const {countryPresenceTitle, countryPresenceDescription, countryPresenceLink, countryPresenceImage} = data;
  return (
    <div className="country-card">
      <div className="country-card__imgbox">
        <Image className="country-card__imgbox__img" src={getImg(countryPresenceImage)} alt="img" layout="fill" priority />
      </div>
      <div className="country-card__content">
        <div className="country-card__text">
          <h3 className="country-card__title">{countryPresenceTitle}</h3>
          <p className="country-card__description">{countryPresenceDescription}</p>
        </div>
        <Link  href={countryPresenceLink}>
          <a className="country-card__link">
            <span className="country-card__link__span">Read more</span>
            <Image src={arrowRight} alt="black arrow" />
          </a>
        </Link>        
      </div>
    </div>
  );
};

export default CountryPresenceCard;
