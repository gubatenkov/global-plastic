

const ArchiveCard = ({ data }) => {
  const {archiveSlide} = data;

  const archiveCards = archiveSlide.map((item, index) => {
    const {activationName, date, series} = item;
    return (
      <li key={index}>
        <div className="archive-card__item">
          <p className="archive-card__date">{date}</p>
          <h3 className="archive-card__title">{activationName}</h3>
          <p className="archive-card__series">{series}</p>
        </div>
      </li>
    )
  });

  return (
    <ul className="archive-card__list">
      <li>
        <div className="archive-card__item archive-card__header">
          <p className="archive-card__date">Date</p>
          <h3 className="archive-card__title">Activation Name</h3>
          <p className="archive-card__series">Series</p>
        </div>
      </li>
      {archiveCards}
    </ul>
  );
};

export default ArchiveCard;
