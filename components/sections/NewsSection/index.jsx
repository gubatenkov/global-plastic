import { NewsCardBig, NewsCardSmall } from 'components';

const NewsSection = ({
  data: { newsSectionTitle, newsBigCard, newsSmallCard, newsSmall2Card },
}) => {
  return (
    <section className="nection">
      <div className="container">
        <h2 className="nection__title">{newsSectionTitle}</h2>
        <div className="nection__inner">
          <div className="nection__left">
            <NewsCardBig {...newsBigCard} />
          </div>
          <div className="nection__right">
            <div className="nection__right-top">
              <h3 className="nection__right-top__title">Latest news</h3>
              <a className="nection__right-top__btn" href="#">
                See all
              </a>
            </div>
            <div className="nection__right__cards">
              <NewsCardSmall {...newsSmallCard} />
              <NewsCardSmall {...newsSmall2Card} />
            </div>
          </div>
        </div>
        <div className="nection__link">
          <a href="#" className="nection__right-top__btn">
            See all
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
