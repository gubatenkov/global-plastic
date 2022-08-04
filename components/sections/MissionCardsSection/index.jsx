import Image from 'next/image';
import { useState } from 'react';

import { CardBase } from 'components';

import img1 from 'assets/images/sea.png';
import img2 from 'assets/images/man.png';
import MiniCard from './components/MiniCard';
import Top from './components/Top';
import Left from './components/Left';
import Right from './components/Right';
import ArrowLeft from './components/ArrowLeft';
import ArrowRight from './components/ArrowRight';
import ArrowBottom from './components/ArrowBottom';

export default function MissionCardsSection(props) {
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
                  <p className="micarection__card__top__text">Our mission</p>
                </div>
                <div className="micarection__card__bottom">
                  <p className="micarection__card__bottom__text micarection__card__bottom__text--ml">
                    Effective and inclusive treaty development and
                    implementation through informed stakeholder engagement
                    across informal waste sector, government, value chain and
                    more.
                  </p>
                </div>
              </div>
            </CardBase>
            <CardBase className="micarection__card card-base--waves card-base--bg-color">
              <div className="micarection__card-wrap">
                <div className="micarection__card__top">
                  <p className="micarection__card__top__text">
                    Stakeholder Capacity Building
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
                    Global Treaty Dialogues #For Plastics enable collaboration
                    and deepen the understanding of the treaty processes and the
                    plastics crisis on a regional and a country-level.
                  </p>
                </div>
              </div>
            </CardBase>
          </div>
          <h2 className="micarection__title">
            What is Environmental Intelligence?
          </h2>
          <p className="micarection__subtitle">
            We bring environmental intelligence within reach of the crises
            stakeholders to build capacity for collaborative fluency and
            accelerate adoption of treaties and solutions
          </p>
          <div className="micarection__wrapper">
            <div className="micarection__left">
              <MiniCard
                index={1}
                activeIndex={activeIndex}
                onHover={handleHover}
              />
              <MiniCard
                index={2}
                activeIndex={activeIndex}
                onHover={handleHover}
              />
              <MiniCard
                index={3}
                activeIndex={activeIndex}
                onHover={handleHover}
              />
            </div>
            <div className="micarection__right">
              <div className="micarection__schema">
                <div className="micarection__schema__top">
                  <p style={{ color: activeIndex !== 1 ? '#212121' : '#fff' }}>
                    Experiential Intelligence
                  </p>
                  <Top activeIndex={activeIndex} />
                </div>
                <div className="micarection__schema__center">
                  Collaborative Fluency
                </div>
                <div className="micarection__schema__left">
                  <p style={{ color: activeIndex !== 3 ? '#212121' : '#fff' }}>
                    Factual Intelligence
                  </p>
                  <Left activeIndex={activeIndex} />
                </div>
                <div className="micarection__schema__right">
                  <p style={{ color: activeIndex !== 2 ? '#212121' : '#fff' }}>
                    Positional Intelligence
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
