import Image from 'next/image';
import Link from 'next/link';
import img from 'assets/images/сountryPresenceIndonesia.jpg';
import arrowRight from 'assets/images/arrowRight.svg';

const CountryPresenceCard = () => {
  return (
    <div className="country-card">
      <div className="country-card__imgbox">
        <Image className="country-card__imgbox__img" src={img} alt="img" layout="fill" priority />
      </div>
      <div className="country-card__content">
        <div className="country-card__text">
          <h3 className="country-card__title">Indonesia</h3>
          <p className="country-card__description">Officially the Republic of Indonesia,[b] is a country in Southeast Asia and Oceania between the Indian and Pacific oceans.</p>
        </div>
        <Link  href="#">
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
