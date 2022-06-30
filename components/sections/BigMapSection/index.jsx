import Image from 'next/image';

import img from 'assets/images/map.png';

const BigMapSection = () => {
  return (
    <section className="mection">
      <Image layout="responsive" src={img} alt="map" />
    </section>
  );
};

export default BigMapSection;
