import Image from 'next/image';
import Link from 'next/link';
import arrowRight from 'assets/images/arrowRight.svg';
import pin from 'assets/images/pin.svg';
import getImg from '../../utils/getImg';

const UpcomingActivationsCard = ({ data }) => {
  const {countryPresenceTitle, countryPresenceDescription, countryPresenceLink, countryPresenceImage} = data;

  return (
    <div className="ua-country-card">
      <div className="ua-country-card__imgbox">
        <Image className="ua-country-card__imgbox__img" src={getImg(countryPresenceImage)} alt="img" layout="fill" priority />
      </div>
      <div className="ua-country-card__content">
        <div className="ua-country-card__text">
          <div className="ua-country-card__location">
            <Image src={pin} alt="pin" />
            <span className="ua-country-card__location__span">United States</span>
          </div>
          <h3 className="ua-country-card__activation-title">
            <span>Sixth Global</span>
            <span>Treaty Dialogues</span>
          </h3>
          <p className="ua-country-card__date">
            <span className="ua-country-card__date--day">28.05 2021</span>
            <span>2:00 pm - 4:00 pm</span>
          </p>
        </div>
        <Link  href={`/countries/${countryPresenceLink}`}>
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
