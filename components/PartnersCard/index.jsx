import Image from 'next/image';

import img from 'assets/images/partner1.png';
import { urlForImage } from 'lib/sanity';

const partners = [img, img, img, img, img, img];

const PartnersCard = ({ title, logos, index }) => {
  const getIndex = (idx) => {
    if (idx < 10) return `0${idx}`;
    return idx;
  };

  return (
    <li className="parection__cards__item">
      <div className="parection-card">
        <div className="parection-card__list">
          {logos.map((img, idx) => {
            return (
              <div
                className="parection-card__list-imgbox"
                key={idx}
                style={
                  partners.length > 1
                    ? { flex: '0 0 21%' }
                    : { flex: '1 0 21%' }
                }
              >
                <Image
                  className="parection-card__list-imgbox__img"
                  key={idx}
                  src={urlForImage(img).url()}
                  layout="responsive"
                  width={150}
                  height={75}
                  objectFit="contain"
                  alt="img"
                />
              </div>
            );
          })}
        </div>
        <div className="parection-card__info">
          <p className="parection-card__info__type">{title}</p>
          <p className="parection-card__info__num">{getIndex(index)}</p>
        </div>
      </div>
    </li>
  );
};

export default PartnersCard;
