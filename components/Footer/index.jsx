import Image from 'next/image';

import logo from 'assets/images/logo-footer.svg';
import logo2 from 'assets/images/logo2-footer.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
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
          <div className="footer__row footer__row--itemsBottom">
            <div className="footer__row-left">
              <p className="footer__row-left__copyright">Copyright 2022.</p>
            </div>
            <div className="footer__row-right">
              <ul className="footer__socials">
                <li className="footer__socials__item">
                  <a className="footer__socials__link" href="#">
                    <svg
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.362 2.98723C14.3713 3.11708 14.3713 3.24754 14.3713 3.37861C14.3713 7.38285 11.0687 12 5.03133 12V11.9975C3.248 12 1.50133 11.5286 0 10.6394C0.259333 10.6683 0.52 10.6825 0.781333 10.6831C2.26 10.6843 3.696 10.2265 4.858 9.38343C3.45333 9.35881 2.22133 8.51329 1.79133 7.27885C2.28333 7.36623 2.79 7.34839 3.27333 7.22716C1.74133 6.94163 0.64 5.69919 0.64 4.25675C0.64 4.24383 0.64 4.2309 0.64 4.2186C1.09667 4.45367 1.60733 4.58351 2.13 4.59767C0.687333 3.70845 0.242 1.93741 1.11333 0.552815C2.78 2.44571 5.23933 3.59645 7.87867 3.71891C7.614 2.66662 7.976 1.56387 8.828 0.82358C10.15 -0.324092 12.2293 -0.265016 13.4727 0.95527C14.208 0.821734 14.9127 0.572507 15.5573 0.219898C15.312 0.921424 14.7993 1.51711 14.114 1.89618C14.7653 1.82418 15.4007 1.66357 16 1.41865C15.5593 2.02725 15.0047 2.55832 14.362 2.98723Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
                <li className="footer__socials__item">
                  <a className="footer__socials__link" href="#">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.9289 11.9295H9.85443V8.68065C9.85443 7.90587 9.84064 6.90894 8.77544 6.90894C7.69507 6.90894 7.52949 7.75271 7.52949 8.62477V11.9295H5.45567V5.2483H7.4474V6.16107H7.47499C7.88134 5.46701 8.63608 5.05237 9.43981 5.08203C11.5426 5.08203 11.9296 6.46532 11.9296 8.26394L11.9289 11.9295ZM3.11487 4.33485C2.44981 4.33485 1.911 3.79603 1.911 3.13094C1.911 2.46586 2.44981 1.92704 3.11487 1.92704C3.77992 1.92704 4.31873 2.46586 4.31873 3.13094C4.31873 3.79603 3.77992 4.33485 3.11487 4.33485ZM4.15178 11.9295H2.0752V5.2483H4.15178V11.9295ZM12.9631 0.000784156H1.03277C0.469127 -0.00542511 0.00689893 0.446472 0 1.01014V12.9899C0.00689893 13.5542 0.469127 14.0061 1.03277 13.9999H12.9631C13.5281 14.0068 13.9924 13.5549 14 12.9899V1.00944C13.9917 0.444402 13.5274 -0.0074949 12.9631 9.42052e-05"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
                <li className="footer__socials__item">
                  <a className="footer__socials__link" href="#">
                    <svg
                      width="7"
                      height="13"
                      viewBox="0 0 7 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.31013 4.55002H4.69754V3.25002C4.69754 2.57922 4.75391 2.15672 5.74643 2.15672H6.32892C6.69936 2.15672 7 1.86552 7 1.50672V0.691623C7 0.351674 6.7309 0.0611243 6.3806 0.0383743C5.97527 0.0117243 5.56926 -0.000625644 5.16259 2.43547e-05C3.34196 2.43547e-05 2.01323 1.07707 2.01323 3.05437V4.55002H0.671077C0.300642 4.55002 0 4.84122 0 5.20001V6.50001C0 6.85881 0.300642 7.15001 0.671077 7.15001L2.01323 7.14936V12.35C2.01323 12.7088 2.31387 13 2.68431 13H4.02646C4.39689 13 4.69754 12.7088 4.69754 12.35V7.14806L6.15646 7.14741C6.49736 7.14741 6.78391 6.89976 6.82284 6.57151L6.97651 5.27411C7.02282 4.88867 6.71144 4.55002 6.31013 4.55002Z"
                        fill="white"
                      />
                    </svg>
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
