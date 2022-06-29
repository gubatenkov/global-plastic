import { CardBase } from 'components';

import img1 from 'assets/images/carectionCircle1.png';
import img2 from 'assets/images/carectionCircle2.png';
import Image from 'next/image';

const CardSection = () => {
  return (
    <section className="carection">
      <div className="container">
        <div className="carection__inner">
          <div className="carection__card-row">
            <CardBase>
              <div className="carection__card-wrap carection__card-wrap--flag">
                <p className="carection__card__title">
                  Deep stakeholder engagement at the country level is required -
                </p>
                <div className="carection__card-bottom">
                  <p className="carection__card-bottom__left">UNEA 5.2</p>
                  <div className="carection__card-bottom__right">
                    <p className="carection__card-bottom__right__date">2022</p>
                    <p className="carection__card-bottom__right__text">
                      UNEA elected to start negotiations
                    </p>
                  </div>
                </div>
              </div>
            </CardBase>
            <CardBase className="card-base--waves card-base--bg-color">
              <div className="carection__card-wrap">
                <div className="carection__card-top">
                  <p className="carection__card-top__left">UNEA 6</p>
                  <div className="carection__card-top__right">
                    <p className="carection__card-top__right__date">2022</p>
                    <p className="carection__card-top__right__text">
                      The Treaty is Voted on
                    </p>
                  </div>
                </div>
                <div className="carection__card-bottom">
                  <p className="carection__card-bottom__title">
                    - To facilite an inclusive and succesful treaty
                  </p>
                  <div className="carection__card-bottom__imgs">
                    <div className="carection__card-bottom__imgs-box">
                      <Image
                        className="carection__card-bottom__imgs-box__img"
                        src={img1}
                        alt="img"
                      />
                    </div>
                    <div className="carection__card-bottom__imgs-box carection__card-bottom__imgs-box--border">
                      <Image
                        className="carection__card-bottom__imgs-box__img"
                        src={img2}
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardBase>
          </div>
          <div className="carection__text-row">
            <div className="carection__text-row__img">
              <svg
                width="46"
                height="44"
                viewBox="0 0 46 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.12476 37.4602C6.00666 41.7913 13.0052 44.7911 22.5679 43.8151C32.1306 42.8391 44.2476 37.7759 45.6231 26.6127C46.9986 15.4495 44.9681 6.72625 33.506 2.39515C22.0439 -1.93595 10.9038 -0.613303 4.15755 8.17089C-2.58872 16.9551 0.242871 33.1291 3.12476 37.4602Z"
                  fill="#F9B131"
                />
                <path
                  d="M32 20.9889C32 18.1925 32 16.7943 31.455 15.7263C30.9757 14.7868 30.2108 14.0229 29.27 13.5442C28.2004 13 26.8003 13 24 13H22C19.1997 13 17.7996 13 16.73 13.5442C15.7892 14.0229 15.0243 14.7868 14.545 15.7263C14 16.7943 14 18.1925 14 20.9889V25.2114C14 27.2916 15.6886 28.9779 17.7717 28.9779H18.3734C19.1525 28.9779 19.6852 29.7636 19.3959 30.486C18.9874 31.5058 20.1635 32.4277 21.0585 31.7893L23.6692 29.9271C23.6958 29.9081 23.7092 29.8986 23.7222 29.8894C24.5562 29.3025 25.5501 28.9845 26.5703 28.978C26.5863 28.9779 26.6077 28.9779 26.6504 28.9779C26.9623 28.9779 27.1183 28.9779 27.2364 28.9723C29.812 28.8505 31.8725 26.7929 31.9944 24.2209C32 24.1029 32 23.9633 32 23.684V20.9889Z"
                  fill="#212020"
                />
                <path
                  d="M18.4697 20.47C18.1768 20.7629 18.1768 21.2377 18.4697 21.5306C18.7626 21.8235 19.2374 21.8235 19.5303 21.5306L18.4697 20.47ZM27.5303 21.5306C27.8232 21.2377 27.8232 20.7629 27.5303 20.47C27.2374 20.1771 26.7626 20.1771 26.4697 20.47L27.5303 21.5306ZM23 21.0003L22.2885 21.2375V21.2375L23 21.0003ZM19.5303 21.5306L20.2943 20.7667L19.2336 19.706L18.4697 20.47L19.5303 21.5306ZM26.7664 22.2946L27.5303 21.5306L26.4697 20.47L25.7057 21.2339L26.7664 22.2946ZM22.2885 21.2375C22.9242 23.1447 25.3448 23.7161 26.7664 22.2946L25.7057 21.2339C25.0726 21.867 23.9946 21.6125 23.7115 20.7631L22.2885 21.2375ZM20.2943 20.7667C20.9274 20.1336 22.0054 20.3881 22.2885 21.2375L23.7115 20.7631C23.0758 18.8559 20.6552 18.2845 19.2336 19.706L20.2943 20.7667Z"
                  fill="white"
                />
              </svg>
            </div>
            <p className="carection__text-row__title">
              Informed collaboration and inclusive dialogue is the only way to
              ensure this treaty works for all.
            </p>
            <p className="carection__text-row__subtitle">
              Every business from consumer goods, fashion to food will be
              impacted by this treaty. All voices must be heard.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
