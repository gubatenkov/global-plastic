import Image from 'next/image';

import img from 'assets/images/fountain.png';

const JoinSection = () => {
  return (
    <section className="jection">
      <div className="container">
        <div className="jection__inner">
          <div className="jection__left">
            <h2 className="jection__left__title">Global Plastics Treaty 101</h2>
            <p className="jection__left__text">
              Global Plastics Treaty 101 is OPLN’s primer on the UN Resolution
              to End Plastic Pollution, signed by the United Nations
              Environmental Assembly in March 2022.
            </p>
            <div className="jection__left-imgbox">
              <Image
                className="jection__left-imgbox__img"
                src={img}
                alt="img"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="jection__right">
            <p className="jection__right__title">
              What you will learn with a 10 min time investment:
            </p>
            <ul className="jection__right-list">
              <li className="jection__right-list__item">
                Key considerations of the ongoing plastic treaty negotiations
              </li>
              <li className="jection__right-list__item">
                Insights into the process gained from different stakeholder
                positions
              </li>
              <li className="jection__right-list__item">Expected timeline</li>
            </ul>
            <div className="jection__right__actext">Join to us</div>
            <a className="jection__right__link" href="#">
              Register
            </a>
            <p className="jection__right__subactext">
              Stakeholders seeking a quick introduction to “the most important
              climate deal since the Paris Agreement”.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
