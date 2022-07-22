import { CountryPresenceCard } from 'components';
import { useRouter } from "next/router";

const CountryPresenceSection = ({data}) => {
  const router = useRouter();

  const viewAll = (event) => {
    const button = event.target;
    const wrapper = event.target.previousElementSibling;
    const cards = wrapper.firstElementChild;
  
    if(wrapper.offsetHeight === cards.offsetHeight && 
      !wrapper.classList.contains('full')) {
      return
    }
    
    if(wrapper.classList.contains('full')) {
      wrapper.classList.remove('full');
      button.textContent = 'View all';      
      router.push("#countryPresence")
    } else {
      wrapper.classList.add('full');
      button.textContent = 'Close';
    }
  }

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
        <button className="cpection__button" onClick={viewAll}>View all</button> 
      </div>
    </section>
  );
};

export default CountryPresenceSection;
