import Image from 'next/image';
import { useState } from 'react';

import { HeroPanel } from 'components';
import MapLegend from 'components/MapLegend';

import map from 'assets/images/map.svg';

const BigMapSection = () => {
  const [isLegendVisible, setLegendVisible] = useState(true);

  return (
    <section className={isLegendVisible ? 'mection legend' : 'mection'}>
      <div className="container">
        <div className="mection__inner">
          <h2 className="mection__title">
            Track Plastics Treaty Dialogues ahead of UNEA 6
          </h2>
          <Image src={map} alt="map" layout="responsive" />
        </div>
      </div>
      <MapLegend
        title="Plastics Journey"
        isVisible={isLegendVisible}
        toggleLegend={() => setLegendVisible(!isLegendVisible)}
      />
      <div className="mection__panel">
        <HeroPanel leftText="656 days" centerText="till UNEA 6 2024" />
      </div>
    </section>
  );
};

export default BigMapSection;
