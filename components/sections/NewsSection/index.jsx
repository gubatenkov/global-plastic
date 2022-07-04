import { NewsCardBig, NewsCardSmall } from 'components';

const NewsSection = () => {
  return (
    <section className="nection">
      <div className="container">
        <div className="nection__inner">
          <div className="nection__left">
            <NewsCardBig />
          </div>
          <div className="nection__right">
            <div className="nection__right-top">
              <h2 className="nection__right-top__title">Latest news</h2>
              <button className="nection__right-top__btn">See all</button>
            </div>
            <div className="nection__right__cards">
              <NewsCardSmall />
              <NewsCardSmall />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
