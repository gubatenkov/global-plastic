import Image from 'next/image';
import Link from 'next/link';
import arrowRight from 'assets/images/arrowRightOrange.svg';
import getImg from '../../utils/getImg';

const ActionCard = ({ data }) => {
  const {actionTitle, actionDate, actionImage, actionLink} = data;

  return (
    <div className="action-card">
      <div className="action-card__imgbox">
        <Image className="action-card__imgbox__img" src={getImg(actionImage)} alt="img" layout="fill" priority />
      </div>
      <div className="action-card__content">          
        <h3 className="action-card__title">
          {actionTitle}
        </h3>
        <div className="action-card__footer">          
          <Link  href={actionLink}>
            <a className="action-card__link modified-link arrow-hover-right">
              <p className="action-card__link__text">Read more</p>
              <Image src={arrowRight} alt="black arrow" className="arrow-image"/>
            </a>
          </Link>
          <p className="action-card__date">
            {actionDate}
          </p>
        </div>       
      </div>
    </div>
  );
};

export default ActionCard;
