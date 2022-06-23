const NewsTicker = ({ className = '' }) => {
  return (
    <div className={className.length ? `ticker ${className}` : 'ticker'}>
      <ul className="ticker__list">
        <li className="ticker__list__item">
          DEFRA appoints the OPLN as the official neutral convener for United
          Kingdom
        </li>
        <li className="ticker__list__item">
          DEFRA appoints the OPLN as the official neutral convener for United
          Kingdom
        </li>
      </ul>
    </div>
  );
};

export default NewsTicker;
