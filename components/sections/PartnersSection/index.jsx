import { PartnersCard } from 'components';

const PartnersSection = ({ data: { partnersTitle, partnersCards } }) => {
  return (
    <section className="parection">
      <div className="container">
        <div className="parection__inner">
          <h2 className="parection__title">{partnersTitle}</h2>
          <ul className="parection__cards">
            {partnersCards?.length &&
              partnersCards.map((card, idx) => {
                return (
                  <PartnersCard
                    key={idx}
                    title={card.partnersCardTitle}
                    logos={card.partnersCardImages}
                    index={idx + 1}
                  />
                );
              })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
