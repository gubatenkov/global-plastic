import Image from 'next/image';

import { urlForImage } from 'lib/sanity';

import img from 'assets/images/quotes.svg';

const StakeholdersCard = ({
  stakeholdersCardText,
  stakeholdersCardAuthorName,
  stakeholdersCardAuthorJob,
  stakeholdersCardAuthorImage,
}) => {
  return (
    <div className="stakeholders-card">
      <Image src={img} alt="icon" />
      <p className="stakeholders-card__text">{stakeholdersCardText}</p>
      <div className="stakeholders-card__author">
        <div className="stakeholders-card__author-avatar">
          <Image
            className="stakeholders-card__author-avatar__img"
            src={urlForImage(stakeholdersCardAuthorImage).url()}
            alt="img"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="stakeholders-card__author-bio">
          <p className="stakeholders-card__author-bio__name">
            {stakeholdersCardAuthorName}
          </p>
          <p className="stakeholders-card__author-bio__job">
            {stakeholdersCardAuthorJob}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StakeholdersCard;
