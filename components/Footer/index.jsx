import Image from 'next/image';

import { urlForImage } from 'lib/sanity';

import logo from 'assets/images/logo-footer.svg';
import logo2 from 'assets/images/logo2-footer.svg';

const Footer = ({ links, socials }) => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__row footer__row--itemsStart">
          <div className="footer__logobox">
            <Image
              className="footer__logobox__img"
              src={logo}
              alt="global treaty dialogues"
            />
            <Image
              className="footer__logobox__img"
              src={logo2}
              alt="ocean plastics leadership network"
            />
          </div>
          <ul className="footer__nav">
            {links?.length &&
              links.map(({ _key, headerMenuLinkText, headerMenuLinkUrl }) => {
                return (
                  <li className="footer__nav__item" key={_key}>
                    <a className="footer__nav__link" href={headerMenuLinkUrl}>
                      {headerMenuLinkText}
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="footer__row footer__row--itemsBottom">
          <div className="footer__row-left">
            <p className="footer__row-left__copyright">Copyright 2022.</p>
          </div>
          <div className="footer__row-right">
            <ul className="footer__socials">
              {socials?.length &&
                socials.map(
                  ({ _key, pageSocialUrl, pageSocialIcon, pageSocialAlt }) => {
                    return (
                      <li className="footer__socials__item" key={_key}>
                        <a
                          className="footer__socials__link"
                          href={pageSocialUrl}
                        >
                          <Image
                            className="footer__socials__img"
                            src={urlForImage(pageSocialIcon).url()}
                            alt={pageSocialAlt}
                            layout="fixed"
                            width={24}
                            height={24}
                          />
                        </a>
                      </li>
                    );
                  }
                )}
            </ul>
            <p className="footer__row-right__rights">All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
