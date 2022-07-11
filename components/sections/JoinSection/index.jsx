import Image from 'next/image';

import { urlForImage } from 'lib/sanity';

const JoinSection = ({
  data: {
    joinSectionTitle,
    joinSectionSubtitle,
    joinSectionImage,
    joinSectionListTitle,
    joinSectionList,
    joinSectionCTAText,
    joinSectionLink,
    joinSectionTextUnderLink,
  },
}) => {
  return (
    <section className="jection">
      <div className="container">
        <div className="jection__inner">
          <div className="jection__left">
            <h2 className="jection__left__title">{joinSectionTitle}</h2>
            <p className="jection__left__text">{joinSectionSubtitle}</p>
            <div className="jection__left-imgbox">
              <div className="jection__left-imgbox__wrap">
                <Image
                  className="jection__left-imgbox__img"
                  src={urlForImage(joinSectionImage).url()}
                  alt="img"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <svg
                className="jection__left-imgbox__el"
                width="90"
                height="56"
                viewBox="0 0 90 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M84.0312 32.2429C99.5917 17.3481 74.0053 5.88147 59.2671 2.01C48.2115 -1.731 31.3262 26.2551 34.2808 45.5735C37.2354 64.8918 64.5806 50.8613 84.0312 32.2429Z"
                  stroke="#F9B131"
                  strokeWidth="1.5"
                />
                <path
                  d="M15.5757 42.9582C9.43421 51.0576 -0.209156 38.8165 1.12509 32.8339C3.38301 22.7096 8.80199 23.1698 15.5757 24.0902C22.3495 25.0106 23.2526 32.8339 15.5757 42.9582Z"
                  stroke="#F9B131"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </div>
          <div className="jection__right">
            <p className="jection__right__title">{joinSectionListTitle}</p>
            <ul className="jection__right-list">
              {joinSectionList?.length &&
                joinSectionList.map((item, idx) => {
                  return (
                    <li className="jection__right-list__item" key={idx}>
                      {item}
                    </li>
                  );
                })}
            </ul>
            <div className="jection__right__actext">{joinSectionCTAText}</div>
            <a
              className="jection__right__link"
              href={joinSectionLink.joinSectionLinkURL}
            >
              {joinSectionLink.joinSectionLinkText}
            </a>
            <p className="jection__right__subactext">
              {joinSectionTextUnderLink}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
