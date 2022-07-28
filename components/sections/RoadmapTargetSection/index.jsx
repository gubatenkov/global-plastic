import Image from 'next/image';

import img2 from '../../../assets/images/roadmap-icon-1.1.svg';
import img3 from '../../../assets/images/roadmap-icon-1.2.svg';
import img4 from '../../../assets/images/roadmap-icon-1.3.svg';

import { urlForImage } from 'lib/sanity';

const RoadmapTargetSection = ({
  data: { tectionTitle, tectionText, tectionSuptitle, tectionImg, tectionLink },
}) => {
  return (
    <section className="rtection">
      <div className="container">
        <div className="rtection__inner">
          <h2 className="rtection__title">
            {tectionTitle} <br /> {tectionSuptitle}
          </h2>
          <div className="rtection__row">
            <div className="rtection__row-left">
              <div className="rtection__row-left__imgbox">
                <Image
                  className="rtection__row-left__imgbox__img"
                  src={urlForImage(tectionImg).fit('crop').url()}
                  width={550}
                  height={500}
                  objectFit="cover"
                  alt="img"
                />
              </div>
            </div>
            <div className="rtection__row-right">
              <div className="rtection__row-right__text">
                <h2 className="rtection__row-right__text__title">
                  {tectionTitle}
                </h2>
                <p className="rtection__row-right__text__subtitle">
                  {tectionSuptitle}
                </p>
                <p className="rtection__row-right__text__descr">{tectionText}</p>
              </div>
              <a
                className="rtection__row-right__action arrow-hover-right"
                href={tectionLink.tectionLinkURL}
              >
                {tectionLink.tectionLinkText}
                <svg
                  width="15"
                  height="10"
                  viewBox="0 0 15 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="arrow-image"
                >
                  <path
                    d="M13 5L13.7071 4.29289L14.4142 5L13.7071 5.70711L13 5ZM1 6C0.447715 6 0 5.55228 0 5C0 4.44772 0.447715 4 1 4V6ZM9.70711 0.292893L13.7071 4.29289L12.2929 5.70711L8.29289 1.70711L9.70711 0.292893ZM13.7071 5.70711L9.70711 9.70711L8.29289 8.29289L12.2929 4.29289L13.7071 5.70711ZM13 6H1V4H13V6Z"
                    fill="#F9B131"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="rtection__targets">
            <h3 className="rtection__targets__title">Our Targets</h3>
            <ul className="rtection__targets__list">
              <li className="rtection__targets__list-item">
                <div className="rtection__targets__list-item__icon">
                  <Image src={img2} alt="icon" />
                </div>
                <p className="rtection__targets__list-item__num">50</p>
                <p className="rtection__targets__list-item__text">Countries</p>
              </li>
              <li className="rtection__targets__list-item">
                <div className="rtection__targets__list-item__icon">
                  <Image src={img3} alt="icon" />
                </div>
                <p className="rtection__targets__list-item__num">7 500</p>
                <p className="rtection__targets__list-item__text">
                  Stakeholders
                </p>
              </li>
              <li className="rtection__targets__list-item">
                <div className="rtection__targets__list-item__icon">
                  <Image src={img4} alt="icon" />
                </div>
                <p className="rtection__targets__list-item__num">52 500</p>
                <p className="rtection__targets__list-item__text">
                  Capacity Building Hours
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapTargetSection;
