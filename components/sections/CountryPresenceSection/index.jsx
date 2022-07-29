import { CountryPresenceCard } from 'components';
import { useRouter } from "next/router";
import viewAll from '../../../utils/viewAll';

const CountryPresenceSection = ({data}) => {
  const router = useRouter();
  const fn = () => router.push("#countryPresence");

  const countryPresenceCard = data.map((item, index) => {
    return <CountryPresenceCard data={item} key={index} />;
  });

  return (
    <section className="cpection">
      <div className="cpection__center" id="countryPresence">  
        <h2 className="cpection__title">Country Presence Highlights</h2>
        <div className="cpection__wrapper">
          <div className="cpection__cards">
            {countryPresenceCard}
          </div>
        </div>
        <button className="cpection__button" onClick={(event) => viewAll(event, fn)}>View all</button> 
      </div>
    </section>
  );
};

export default CountryPresenceSection;
