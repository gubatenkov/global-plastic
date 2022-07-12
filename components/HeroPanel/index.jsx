import Image from 'next/image';

import arrowRight from 'assets/images/arrowRight.svg';

const HeroPanel = ({ leftText = '', centerText = '', linkURL = '/' }) => {
  return (
    <div className="hero__panel">
      <div className="hero__panel__text">
        <strong>{leftText}</strong>
        <p>{centerText}</p>
      </div>
      <a className="hero__panel__link" href={linkURL}>
        <Image src={arrowRight} alt="black arrow" />
      </a>
    </div>
  );
};

export default HeroPanel;
