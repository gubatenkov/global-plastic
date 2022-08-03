import Image from 'next/image';

import { CardBase } from 'components';

import img1 from 'assets/images/sea.png';
import img2 from 'assets/images/man.png';

export default function MissionCardsSection(props) {
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
        </div>
      </div>
    </section>
  );
}
