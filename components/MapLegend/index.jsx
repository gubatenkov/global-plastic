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

const MapLegend = ({ title, isVisible, toggleLegend }) => {
  return (
    <div className="maplegend__wrap">
      <div className="maplegend">
        <p className="maplegend__title">{title}</p>
        {sections.map((section) => {
          return (
            <div className={section.className} key={section.id}>
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
            </div>
          );
        })}
      </div>
      <button className="maplegend__btn" onClick={toggleLegend}>
        {isVisible ? (
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
        ) : (
          <div className="maplegend__btn__text">
            <svg
              width="7"
              height="10"
              viewBox="0 0 7 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.70711 1.70711C7.09763 1.31658 7.09763 0.683417 6.70711 0.292893C6.31658 -0.0976311 5.68342 -0.0976311 5.29289 0.292893L6.70711 1.70711ZM2 5L1.29289 4.29289L0.585786 5L1.29289 5.70711L2 5ZM5.29289 9.70711C5.68342 10.0976 6.31658 10.0976 6.70711 9.70711C7.09763 9.31658 7.09763 8.68342 6.70711 8.29289L5.29289 9.70711ZM5.29289 0.292893L1.29289 4.29289L2.70711 5.70711L6.70711 1.70711L5.29289 0.292893ZM1.29289 5.70711L5.29289 9.70711L6.70711 8.29289L2.70711 4.29289L1.29289 5.70711Z"
                fill="#212020"
              />
            </svg>

            <span>Map legend</span>
          </div>
        )}
      </button>
    </div>
  );
};

export default MapLegend;
