const NewsTicker = ({ className = '', items }) => {
  const duration = 18;
  const delayFn = (idx) => (idx + 1) * (duration / items.length);

  return (
    <div className={className.length ? `ticker ${className}` : 'ticker'}>
      <ul className="ticker__list">
        {items.map((lineText, idx) => {
          return (
            <li
              className="ticker__list__item"
              key={idx}
              style={{
                '--distance-to-right': `${(items.length - (idx + 1)) * 100}%`,
                '--distance-to-left': `${(idx + 1) * -100}%`,
                animation: `running-start ${delayFn(idx)}s linear,
              running-left ${duration}s linear ${delayFn(idx)}s infinite`,
              }}
            >
              {lineText}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NewsTicker;
