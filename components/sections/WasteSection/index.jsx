import Image from 'next/image';
import getImg from '../../../utils/getImg';
import icon from '../../../assets/images/waste-icon.svg'

const WasteSection = ({data}) => {
  const {wasteSectorTitle,wasteSectorDescription, wasteSectorImage} = data;

  return (
    <section className="waktion">         
      <div className="waktion__center"> 
        <Image className="waktion__icon" src={icon} alt="icon" layout="fixed" />
        <h2 className="waktion__title">{wasteSectorTitle}</h2>
        <p className="waktion__description">{wasteSectorDescription}</p>
        <div className="waktion__image-container">
          <div className="waktion__shape1"></div>
          <div className="waktion__shape2"></div>
          <div className="waktion__shape3"></div>
          <div className="waktion__imgbox">
            <Image className="waktion__img" src={getImg(wasteSectorImage)} alt="img" layout="fill" priority />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WasteSection;
