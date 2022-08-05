import Arrow from 'components/MapLegend/components/Arrow';
import Bubble from 'components/MapLegend/components/Bubble';
import Circle from 'components/MapLegend/components/Circle';
import CircleFilled from 'components/MapLegend/components/CircleFilled';

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
        text: 'Sub-Saharan Africa',
      },
      {
        icon: <Circle color="#E382DF" />,
        text: 'Middle East & Northern Africa',
      },
      {
        icon: <Circle color="#DA6076" />,
        text: 'South & Southeast Asia',
      },
      {
        icon: <Circle color="#608ADA" />,
        text: 'Australia, New Zealand and Pacific Islands',
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

export default function LegendPopup({ onClose: handleClose }) {
  return (
    <div className="legend-popup" onClick={handleClose}>
      <div className="maplegend">
        <button className="legend-popup__close" onClick={handleClose} />
        <p className="maplegend__title">Plastics Journey</p>
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
    </div>
  );
}
