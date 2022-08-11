import Image from 'next/image';
import { useState } from 'react';

import { HeroPanel } from 'components';
import MapLegend from 'components/MapLegend';
import LegendBtn from './components/LegendBtn';
import LegendPopup from './components/LegendPopup';

import { urlForImage } from 'lib/sanity';

const BigMapSection = ({ data: { title = '', image, isAdded = false } }) => {
  const [isLegendVisible, setLegendVisible] = useState(true);
  const [isLegendPopupOpen, setLegendPopupOpen] = useState(false);

  const handleClose = (e) => {
    if (e.currentTarget === e.target) {
      setLegendPopupOpen(false);
    }
  };

  if (!isAdded) return;

  return (
    <section className={isLegendVisible ? 'mection legend' : 'mection'}>
      <div className="container">
        <div className="mection__inner">
          <h2 className="mection__title">{title}</h2>
          <Image
            src={urlForImage(image).url()}
            alt="map"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
      <MapLegend
        title="Plastics Journey"
        isVisible={isLegendVisible}
        toggleLegend={() => setLegendVisible(!isLegendVisible)}
      />
      <LegendBtn onClick={() => setLegendPopupOpen(true)} />
      <div className="mection__panel">
        <HeroPanel leftText="656 days" />
      </div>
      {isLegendPopupOpen && <LegendPopup onClose={handleClose} />}
    </section>
  );
};

export default BigMapSection;
