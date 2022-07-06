import Link from 'next/link';
import { CountryPresenceCard } from 'components';

const CountryPresenceSection = () => {
  return (
    <section className="cpection">
      <div className="cpection__center">  
        <h2 className="cpection__title">Country Presence Highlights</h2>
        <div className="cpection__cards">
          <CountryPresenceCard />
          <CountryPresenceCard />
          <CountryPresenceCard />
          <CountryPresenceCard />
        </div>
        <Link  href="#">
          <a className="cpection__link">View all</a>
        </Link> 
      </div>
    </section>
  );
};

export default CountryPresenceSection;
