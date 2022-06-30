import Image from 'next/image';

import img from 'assets/images/sponsor.png';

const SponsorsSection = () => {
  return (
    <section className="spection">
      <h2 className="spection__title">Join leading organizations including</h2>
      <ul className="spection__sponsors">
        <li className="spection__sponsors-item">
          <Image className="spection__sponsors-item__img" src={img} alt="img" />
        </li>
        <li className="spection__sponsors-item">
          <Image className="spection__sponsors-item__img" src={img} alt="img" />
        </li>
        <li className="spection__sponsors-item">
          <Image className="spection__sponsors-item__img" src={img} alt="img" />
        </li>
        <li className="spection__sponsors-item">
          <Image className="spection__sponsors-item__img" src={img} alt="img" />
        </li>
        <li className="spection__sponsors-item">
          <Image className="spection__sponsors-item__img" src={img} alt="img" />
        </li>
        <li className="spection__sponsors-item">
          <Image className="spection__sponsors-item__img" src={img} alt="img" />
        </li>
        <li className="spection__sponsors-item">
          <Image className="spection__sponsors-item__img" src={img} alt="img" />
        </li>
        <li className="spection__sponsors-item">
          <Image className="spection__sponsors-item__img" src={img} alt="img" />
        </li>
      </ul>
    </section>
  );
};

export default SponsorsSection;
