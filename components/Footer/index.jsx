import Image from 'next/image';

import twitter from 'assets/images/twitter.svg';
import logo from 'assets/images/logo-footer.svg';
import linkedin from 'assets/images/linkedin.svg';
import logo2 from 'assets/images/logo2-footer.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer__row footer__row--itemsCenter footer__row--mb40">
            <div className="footer__logo">
              <Image
                className="footer__logo__img"
                src={logo}
                alt="global treaty dialogues"
              />
            </div>
            <ul className="footer__nav">
              <li className="footer__nav__item">
                <a className="footer__nav__link" href="#">
                  Countries
                </a>
              </li>
              <li className="footer__nav__item">
                <a className="footer__nav__link" href="#">
                  Mission
                </a>
              </li>
              <li className="footer__nav__item">
                <a className="footer__nav__link" href="#">
                  Roadmap
                </a>
              </li>
              <li className="footer__nav__item">
                <a className="footer__nav__link" href="#">
                  Get involved
                </a>
              </li>
              <li className="footer__nav__item">
                <a className="footer__nav__link" href="#">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__row">
            <div className="footer__logo">
              <Image
                className="footer__logo__img"
                src={logo2}
                alt="ocean plastics leadership network"
              />
            </div>
          </div>
          <div className="footer__row footer__row--itemsBottom">
            <div className="footer__row-left">
              <p className="footer__row-left__copyright">Copyright 2022.</p>
            </div>
            <div className="footer__row-right">
              <ul className="footer__socials">
                <li className="footer__socials__item">
                  <a className="footer__socials__link" href="#">
                    <Image src={twitter} alt="twitter" />
                  </a>
                </li>
                <li className="footer__socials__item">
                  <a className="footer__socials__link" href="#">
                    <Image src={linkedin} alt="linkedin" />
                  </a>
                </li>
              </ul>
              <p className="footer__row-right__rights">All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
