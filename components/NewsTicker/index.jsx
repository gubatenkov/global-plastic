import Marquee from 'react-fast-marquee';

const NewsTicker = ({ className = '', items }) => {
  return (
    <div className={className.length ? `ticker ${className}` : 'ticker'}>
      <Marquee gradient={false} loop={0} speed={42}>
        <ul className="ticker__list">
          {items.map(({ heroNewsLineText, heroNewsLineURL }, idx) => {
            return (
              <li className="ticker__list__item" key={idx}>
                <a className="ticker__list__link" href={heroNewsLineURL}>
                  {heroNewsLineText}
                </a>
              </li>
            );
          })}
        </ul>
      </Marquee>
    </div>
  );
};

export default NewsTicker;
