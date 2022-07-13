import { useState } from 'react';

import { HeroPanel } from 'components';
import MapLegend from 'components/MapLegend';

const BigMapSection = () => {
  const [isLegendVisible, setLegendVisible] = useState(true);

  return (
    <section className={isLegendVisible ? 'mection legend' : 'mection'}>
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
