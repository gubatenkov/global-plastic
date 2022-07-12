import Image from 'next/image';
import getImg from '../../../utils/getImg';
import icon from '../../../assets/images/waste-icon.svg'

const WasteSection = ({data}) => {
  const {wasteSectorTitle,wasteSectorDescription, wasteSectorImage} = data;

  return (
    <section className="waktion">         
      <div className="waktion__center">        
        <div className="waktion__content">
          <Image className="waktion__icon" src={icon} alt="icon" layout="fixed" />
          <h2 className="waktion__title">{wasteSectorTitle}</h2>
          <p className="waktion__description">{wasteSectorDescription}</p>
        </div>
        <div className="waktion__container">
          <h2 className="waktion__title waktion__mobile--title">{wasteSectorTitle}</h2>        
          <div className="waktion__imgbox">
            <Image className="waktion__img" src={getImg(wasteSectorImage)} alt="img" layout="fill" priority />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WasteSection;
