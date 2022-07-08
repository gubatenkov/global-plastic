import getImg from '../../../utils/getImg'

const CountryHero = ({data}) => {
  const {countryHeroTitle, countryHeroDescription, countryHeroImage } = data;
  
  return (
    <section className="chection" style={{backgroundImage: `url('${getImg(countryHeroImage)}')`}}>
      <div className="chection__center">  
        <h1 className="chection__title">{countryHeroTitle}</h1>
        <p className="chection__description">{countryHeroDescription}</p>
      </div>
    </section>
  );
};

export default CountryHero;
