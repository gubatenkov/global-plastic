import Image from 'next/image';
import getImg from '../../../utils/getImg'

const InvolvedHero = ({data}) => {
  const {involvedHeroTitle, involvedHeroDescription, involvedHeroImage} = data;

  return (
    <section className="inktion">
      <div className="inktion__center">
        <Image
            src={getImg(involvedHeroImage)}
            width="46px"
            height="44px"
            alt="icon"
            layout="fixed"
          />
        <h2 className="inktion__title">{involvedHeroTitle}</h2>
        <h3 className="inktion__description">{involvedHeroDescription}</h3> 
      </div>
    </section>
  );
};

export default InvolvedHero;
