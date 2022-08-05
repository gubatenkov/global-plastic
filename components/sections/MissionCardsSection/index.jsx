import Image from 'next/image';
import { useState } from 'react';

import { CardBase } from 'components';

import Top from './components/Top';
import Left from './components/Left';
import Right from './components/Right';
import MiniCard from './components/MiniCard';
import ArrowLeft from './components/ArrowLeft';
import ArrowRight from './components/ArrowRight';
import ArrowBottom from './components/ArrowBottom';

import img1 from 'assets/images/sea.png';
import img2 from 'assets/images/man.png';

export default function MissionCardsSection({
  card1,
  card2,
  title,
  subtitle,
  smallCard1,
  smallCard2,
  smallCard3,
  bubbles,
}) {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleHover = (idx) => {
    setActiveIndex(idx);
  };

  return (
    <section className="micarection">
      <div className="container">
        <div className="micarection__inner">
          <div className="micarection__cards">
            <CardBase className="micarection__card">
              <div className="micarection__card-wrap carection__card-wrap--flag">
                <div className="micarection__card__top">
                  <p className="micarection__card__top__text">
                    {card1.card1Title}
                  </p>
                </div>
                <div className="micarection__card__bottom">
                  <p className="micarection__card__bottom__text micarection__card__bottom__text--ml">
                    {card1.card1Text}
                  </p>
                </div>
              </div>
            </CardBase>
            <CardBase className="micarection__card card-base--waves card-base--bg-color">
              <div className="micarection__card-wrap">
                <div className="micarection__card__top">
                  <p className="micarection__card__top__text">
                    {card2.card2Title}
                  </p>
                </div>
                <div className="micarection__card__bottom micarection__card__bottom--flex">
                  <div className="carection__card-bottom__imgs">
                    <div className="micarection__card-bottom__imgs-box carection__card-bottom__imgs-box">
                      <Image
                        className="carection__card-bottom__imgs-box__img"
                        src={img1}
                        objectFit="cover"
                        alt="img"
                      />
                    </div>
                    <div className="micarection__card-bottom__imgs-box carection__card-bottom__imgs-box carection__card-bottom__imgs-box--border">
                      <Image
                        className="carection__card-bottom__imgs-box__img"
                        src={img2}
                        objectFit="cover"
                        alt="img"
                      />
                    </div>
                  </div>
                  <p className="micarection__card__bottom__text">
                    {card2.card2Text}
                  </p>
                </div>
              </div>
            </CardBase>
          </div>
          <h2 className="micarection__title">{title}</h2>
          <p className="micarection__subtitle">{subtitle}</p>
          <div className="micarection__wrapper">
            <div className="micarection__left">
              <MiniCard
                index={1}
                activeIndex={activeIndex}
                onHover={handleHover}
                title={smallCard1.smallCardTitle}
                text={smallCard1.smallCardText}
              />
              <MiniCard
                index={2}
                activeIndex={activeIndex}
                onHover={handleHover}
                title={smallCard2.smallCardTitle}
                text={smallCard2.smallCardText}
              />
              <MiniCard
                index={3}
                activeIndex={activeIndex}
                onHover={handleHover}
                title={smallCard3.smallCardTitle}
                text={smallCard3.smallCardText}
              />
            </div>
            <div className="micarection__right">
              <div className="micarection__schema">
                <div className="micarection__schema__top">
                  <p style={{ color: activeIndex !== 1 ? '#212121' : '#fff' }}>
                    {bubbles.top}
                  </p>
                  <Top activeIndex={activeIndex} />
                </div>
                <div className="micarection__schema__center">
                  {bubbles.center}
                </div>
                <div className="micarection__schema__left">
                  <p style={{ color: activeIndex !== 3 ? '#212121' : '#fff' }}>
                    {bubbles.left}
                  </p>
                  <Left activeIndex={activeIndex} />
                </div>
                <div className="micarection__schema__right">
                  <p style={{ color: activeIndex !== 2 ? '#212121' : '#fff' }}>
                    {bubbles.right}
                  </p>
                  <Right activeIndex={activeIndex} />
                </div>
                <div className="micarection__schema__arrow micarection__schema__arrow--l">
                  <ArrowLeft />
                </div>
                <div className="micarection__schema__arrow micarection__schema__arrow--r">
                  <ArrowRight />
                </div>
                <div className="micarection__schema__arrow micarection__schema__arrow--b">
                  <ArrowBottom />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
