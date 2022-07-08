const NewsTicker = ({ className = '', items }) => {
  return (
    <div className={className.length ? `ticker ${className}` : 'ticker'}>
      <ul className="ticker__list">
        {items.map((lineText, idx) => {
          return (
            <li className="ticker__list__item" key={idx}>
              {lineText}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NewsTicker;
