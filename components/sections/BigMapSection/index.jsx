import Image from 'next/image';
import { useState } from 'react';

import { HeroPanel } from 'components';
import MapLegend from 'components/MapLegend';
import LegendBtn from './components/LegendBtn';
import LegendPopup from './components/LegendPopup';

import map from 'assets/images/map.svg';

const BigMapSection = () => {
  const [isLegendVisible, setLegendVisible] = useState(true);
  const [isLegendPopupOpen, setLegendPopupOpen] = useState(false);

  const handleClose = (e) => {
    if (e.currentTarget === e.target) {
      setLegendPopupOpen(false);
    }
  };

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
      <LegendBtn onClick={() => setLegendPopupOpen(true)} />
      <div className="mection__panel">
        <HeroPanel leftText="656 days" centerText="till UNEA 6 2024" />
      </div>
      {isLegendPopupOpen && <LegendPopup onClose={handleClose} />}
    </section>
  );
};

export default BigMapSection;
