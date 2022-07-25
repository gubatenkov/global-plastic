import Image from 'next/image';
import Link from 'next/link';

import { urlForImage } from 'lib/sanity';

const TargetCountrySection = ({
  data: { tectionTitle, tectionText, tectionSuptitle, tectionImg, tectionLink,tectionLinkURL },
}) => {
  return (
    <section className="tcection">
      <div className="container">
        <div className="tcection__inner">
          <h2 className="tcection__title">
            {tectionTitle} <br /> {tectionSuptitle}
          </h2>
          <div className="tcection__row">
            <div className="tcection__row-left">
              <div className="tcection__row-left__imgbox">
                <Image
                  className="tcection__row-left__imgbox__img"
                  src={urlForImage(tectionImg).fit('crop').url()}
                  width={550}
                  height={500}
                  objectFit="cover"
                  alt="img"
                />
              </div>
            </div>
            <div className="tcection__row-right">
              <div className="tcection__row-right__text">
                <h2 className="tcection__row-right__text__title">
                  {tectionTitle}
                </h2>
                <p className="tcection__row-right__text__subtitle">
                  {tectionSuptitle}
                </p>
                <p className="tcection__row-right__text__descr">{tectionText}</p>
              </div>
              <Link href={tectionLink.tectionLinkURL}>  
                <a
                  className="tcection__row-right__action">
                  {tectionLink.tectionLinkText}
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
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetCountrySection;
