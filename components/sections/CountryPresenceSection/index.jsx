import { CountryPresenceCard } from 'components';
import viewAll from '../../../utils/viewAll'

const CountryPresenceSection = ({data}) => {
  

  const countryPresenceCard = data.map((item, index) => {
    return <CountryPresenceCard data={item} key={index} />;
  });

  return (
    <section className="cpection">
      <div className="cpection__center">  
        <h2 className="cpection__title">Country Presence Highlights</h2>
        <div className="cpection__wrapper">
          <div className="cpection__cards">
            {countryPresenceCard}
          </div>
        </div>
        <div className="cpection__button" onClick={viewAll}>View all</div> 
      </div>
    </section>
  );
};

export default CountryPresenceSection;
