import Image from 'next/image';

import img from 'assets/images/tectionImg.png';
import img2 from 'assets/images/earth.svg';
import img3 from 'assets/images/people.svg';
import img4 from 'assets/images/sandClock.svg';

const TargetSection = () => {
  return (
    <section className="tection">
      <div className="container">
        <div className="tection__inner">
          <div className="tection__row">
            <div className="tection__row-left">
              <div className="tection__row-left__imgbox">
                <Image
                  className="tection__row-left__imgbox__img"
                  src={img}
                  alt="img"
                />
              </div>
            </div>
            <div className="tection__row-right">
              <div className="tection__row-right__text">
                <h2 className="tection__row-right__text__title">
                  Global Treaty Dialogues
                </h2>
                <p className="tection__row-right__text__subtitle">
                  #For Plastics
                </p>
                <p className="tection__row-right__text__descr">
                  Working together with World Wildlife Fund (WWF) and
                  Greenpeace, the Ocean Plastic Leadership Network launched the
                  Global Plastics Treaty Dialogues (GPTD) in March 2021. This
                  series of neutral convening engages an activist-to-industry
                  network of stakeholders to build capacity for a global
                  plastics treaty and its country-level implementation. By March
                  2022, the GPTDs have held 5 global and 10 national level
                  convenings, connecting thousands of stakeholders across 40+
                  countries. By March 2022, the GPTDs have held 5 global and 10
                  national level convenings, connecting thousands of
                  stakeholders across 40+ countries. By March 2022, the GPTDs
                  have held 5 global and 10 national level convenings,
                  connecting thousands of stakeholders across 40+ countries. By
                  March 2022, the GPTDs have held 5 global and 10 national level
                  convenings, connecting thousands of stakeholders across 40+
                  countries.
                </p>
              </div>
              <button className="tection__row-right__action">
                Get involved
                <svg
                  width="15"
                  height="10"
                  viewBox="0 0 15 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 5L13.7071 4.29289L14.4142 5L13.7071 5.70711L13 5ZM1 6C0.447715 6 0 5.55228 0 5C0 4.44772 0.447715 4 1 4V6ZM9.70711 0.292893L13.7071 4.29289L12.2929 5.70711L8.29289 1.70711L9.70711 0.292893ZM13.7071 5.70711L9.70711 9.70711L8.29289 8.29289L12.2929 4.29289L13.7071 5.70711ZM13 6H1V4H13V6Z"
                    fill="#F9B131"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="tection__targets">
            <h3 className="tection__targets__title">Our Targets</h3>
            <ul className="tection__targets__list">
              <li className="tection__targets__list-item">
                <div className="tection__targets__list-item__icon">
                  <Image src={img2} alt="icon" />
                </div>
                <p className="tection__targets__list-item__num">50</p>
                <p className="tection__targets__list-item__text">Countries</p>
              </li>
              <li className="tection__targets__list-item">
                <div className="tection__targets__list-item__icon">
                  <Image src={img3} alt="icon" />
                </div>
                <p className="tection__targets__list-item__num">7 500</p>
                <p className="tection__targets__list-item__text">
                  Stakeholders
                </p>
              </li>
              <li className="tection__targets__list-item">
                <div className="tection__targets__list-item__icon">
                  <Image src={img4} alt="icon" />
                </div>
                <p className="tection__targets__list-item__num">52 500</p>
                <p className="tection__targets__list-item__text">
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

export default TargetSection;
