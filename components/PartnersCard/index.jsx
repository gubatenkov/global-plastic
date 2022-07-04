import Image from 'next/image';

import img from 'assets/images/partner1.png';

const partners = [img, img, img, img, img, img];

const PartnersCard = () => {
  return (
    <li className="parection__cards__item">
      <div className="parection-card">
        <div className="parection-card__list">
          {partners.map((partner, idx) => {
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
                  src={partner}
                  alt="img"
                />
              </div>
            );
          })}
        </div>
        <div className="parection-card__info">
          <p className="parection-card__info__type">Managing partner</p>
          <p className="parection-card__info__num">01</p>
        </div>
      </div>
    </li>
  );
};

export default PartnersCard;
