import Arrow from './components/Arrow';
import Bubble from './components/Bubble';
import Circle from './components/Circle';
import CircleFilled from './components/CircleFilled';

const sections = [
  {
    id: 1,
    title: 'In the Ocean',
    subtitle: 'Pounds per sq ml',
    className: 'maplegend__section maplegend__section--2col',
    items: [
      {
        icon: <Bubble size="32" />,
        text: 'More than 5',
      },
      {
        icon: <Bubble size="22" />,
        text: '1 - 5',
      },
      {
        icon: <Bubble size="16" />,
        text: '0.5 - 0.9',
      },
      {
        icon: <Bubble size="8" />,
        text: '0.25 - 0.49',
      },
      {
        icon: <Bubble size="4" />,
        text: '0.01 - 0.24',
      },
    ],
  },
  {
    id: 2,
    title: 'In the Rivers',
    subtitle: 'Thousands of tons per year',
    className: 'maplegend__section maplegend__section--2col',
    items: [
      {
        icon: <Arrow width="25" height="17" />,
        text: '30 +',
      },
      {
        icon: <Arrow width="19" height="13" />,
        text: '15 - 30',
      },
      {
        icon: <Arrow width="13" height="9" />,
        text: '1 - 14,9',
      },
    ],
  },
  {
    id: 3,
    title: 'Regions',
    subtitle: 'Thousands of tons per year',
    className: 'maplegend__section',
    items: [
      {
        icon: <Circle color="#7EDE43" />,
        text: 'Latin America',
      },
      {
        icon: <Circle color="#60D4E3" />,
        text: 'Middle East',
      },
      {
        icon: <Circle color="#E382DF" />,
        text: 'South-East Asia',
      },
      {
        icon: <Circle color="#60D4E3" />,
        text: 'Australia & Oceaniar',
      },
    ],
  },
  {
    id: 4,
    title: '',
    subtitle: '',
    className: 'maplegend__section',
    items: [
      {
        icon: <CircleFilled color="#BDC8E3" />,
        text: 'Target Countries',
      },
      {
        icon: <CircleFilled color="#B0DDD9" />,
        text: 'Countries with Presence',
      },
    ],
  },
];

const MapLegend = ({ title }) => {
  return (
    <div className="maplegend__wrap">
      <div className="maplegend">
        <h3 className="maplegend__title">{title}</h3>
        {sections.map((section) => {
          return (
            <section className={section.className} key={section.id}>
              {section.title?.length ? (
                <h4 className="maplegend__section__title">{section.title}</h4>
              ) : null}
              {section.subtitle?.length ? (
                <p className="maplegend__section__subtitle">
                  {section.subtitle}
                </p>
              ) : null}
              <ul className="maplegend__section-list">
                {section.items.map((item, idx) => {
                  return (
                    <li className="maplegend__section-list__item" key={idx}>
                      {item.icon} <p>{item.text}</p>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>
      <button className="maplegend__btn">
        <svg
          className="cross"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 5L5 15"
            stroke="#212020"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 5L15 15"
            stroke="#212020"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default MapLegend;
