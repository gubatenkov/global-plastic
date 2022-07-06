import Link from 'next/link';
import { CountryPresenceCard } from 'components';

const CountryPresenceSection = ({data}) => {
  const {countryPresenceCards} = data;

  const countryPresenceCard = countryPresenceCards.map((item, index) => {
    return <CountryPresenceCard data={item} key={index} />;
  });

  return (
    <section className="cpection">
      <div className="cpection__center">  
        <h2 className="cpection__title">Country Presence Highlights</h2>
        <div className="cpection__cards">
          {countryPresenceCard}
        </div>
        <Link  href="#">
          <a className="cpection__link">View all</a>
        </Link> 
      </div>
    </section>
  );
};

export default CountryPresenceSection;
