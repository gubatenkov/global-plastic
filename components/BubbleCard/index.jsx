import Image from 'next/image';

import img from 'assets/images/slectionSliderImg1.png';

const BubbleCard = ({ className = '' }) => {
  return (
    <div className={`bubble ${className}`}>
      <div className="bubble__imgbox">
        <Image className="bubble__img" src={img} alt="img" layout="fill" />
      </div>
      <div className="bubble__number">01</div>
      <div className="bubble__text">
        <p className="bubble__text__title">Be legally binding</p>
        <p className="bubble__text__descr">
          We develop programs for stakeholders, that need to be legally binding
        </p>
      </div>
    </div>
  );
};

export default BubbleCard;
