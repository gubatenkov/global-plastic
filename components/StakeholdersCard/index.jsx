import Image from 'next/image';

import img from 'assets/images/quotes.svg';
import img2 from 'assets/images/author2.png';

const StakeholdersCard = () => {
  return (
    <div className="stakeholders-card">
      <Image src={img} alt="icon" />
      <p className="stakeholders-card__text">
        The inclusion of waste reclaimers in the treaty negotiation process is
        crucial to form an inclusive agreement. OPLN’s efforts to include these
        voices throughout the dialogues, bringing their perspectives to the
        forefront of these discussions have informed all stakeholders of waste
        reclaimers’ vital role in solving the plastic pollution crisis.
      </p>
      <div className="stakeholders-card__author">
        <div className="stakeholders-card__author-avatar">
          <Image
            className="stakeholders-card__author-avatar__img"
            src={img2}
            alt="img"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="stakeholders-card__author-bio">
          <p className="stakeholders-card__author-bio__name">Sonia Dias</p>
          <p className="stakeholders-card__author-bio__job">
            Waste Specialist, WIEGO
          </p>
        </div>
      </div>
    </div>
  );
};

export default StakeholdersCard;
