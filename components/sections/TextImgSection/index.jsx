import Image from 'next/image';

import Bubble from './components/Bubble';
import Shield from './components/Shield';
import AnimatedBubble from './components/AnimatedBubble';

import path from 'assets/images/tectionImg.png';

export default function TextImgSesction(props) {
  return (
    <section className="timection">
      <div className="container">
        <div className="timection__inner">
          <div className="timection__left">
            <div className="timection__icon">
              <Bubble className="timection__icon__bubble" color="#fff" />
              <Shield className="timection__icon__shield" />
            </div>
            <h2 className="timection__title">Our Approach</h2>
            <p className="timection__text">
              Global Treaty Dialogues #For Plastics enable collaboration and
              deepen the understanding of the treaty processes and the plastics
              crisis on a regional and a country-level. Our initative targets
              countries most impacted by the plastics leakage and plastics waste
              trade.
            </p>
          </div>
          <div className="timection__right">
            <div className="timection__preview">
              <Image
                className="timection__preview__img"
                width={550}
                height={550}
                src={path}
                alt="img"
              />
            </div>
            <AnimatedBubble className="timection__right__bubble" />
          </div>
        </div>
      </div>
    </section>
  );
}
