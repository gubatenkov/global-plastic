import Image from 'next/image';

import img from 'assets/images/map.png';
import MapLegend from 'components/MapLegend';

const BigMapSection = () => {
  return (
    <section className="mection">
      <Image layout="responsive" src={img} alt="map" />
      <MapLegend title="Plastics Journey" />
    </section>
  );
};

export default BigMapSection;
