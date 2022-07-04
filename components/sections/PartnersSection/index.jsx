import { PartnersCard } from 'components';

const PartnersSection = () => {
  return (
    <section className="parection">
      <div className="container">
        <div className="parection__inner">
          <h2 className="parection__title">Cross-Sector Support</h2>
          <ul className="parection__cards">
            <PartnersCard />
            <PartnersCard />
            <PartnersCard />
            <PartnersCard />
            <PartnersCard />
            <PartnersCard />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
