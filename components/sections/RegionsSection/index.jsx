import Image from 'next/image';

import { RegionsCard } from 'components';

import icon from 'assets/images/cam.svg';

const RegionsSection = () => {
  return (
    <section className="rection">
      <div className="container">
        <div className="rection__inner">
          <div className="rection__left">
            <RegionsCard />
            <RegionsCard />
          </div>
          <div className="rection__center">
            <Image className="rection__center__icon" src={icon} alt="icon" />
            <h2 className="rection__center__title">Regions Highlights</h2>
          </div>
          <div className="rection__right">
            <RegionsCard />
            <RegionsCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionsSection;
