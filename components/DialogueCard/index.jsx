import Image from 'next/image';

import img from 'assets/images/quotes.svg';
import img2 from 'assets/images/dialoguesCardImg.svg';

const DialogueCard = () => {
  return (
    <div className="dialogue-card">
      <Image src={img} alt="icon" />
      <p className="dialogue-card__text">
        The inclusion of waste reclaimers in the treaty negotiation process is
        crucial to form an inclusive agreement. OPLN’s efforts to include these
        voices throughout the dialogues, bringing their perspectives to the
        forefront of these discussions have informed all stakeholders of waste
        reclaimers’ vital role in solving the plastic pollution crisis.
      </p>
      <div className="dialogue-card__bottom">
        <div className="dialogue-card__bottom-text">
          <p className="dialogue-card__bottom-text__title">
            National Geographic
          </p>
          <p className="dialogue-card__bottom-text__subtitle">
            Global treaty to regulate plastic pollution gains momentum, JUNE 8,
            2021, Laura Parker
          </p>
        </div>
        <div className="dialogue-card__bottom-imgbox">
          <Image src={img2} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default DialogueCard;
