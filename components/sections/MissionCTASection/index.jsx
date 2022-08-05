import Bubble from './components/Bubble';
import Mark from './components/Mark';

export default function MissionCTASection({ title, linkUrl }) {
  return (
    <section className="missioncta">
      <div className="missioncta__img">
        <Bubble className="missioncta__img__bubble" color="#212121" />
        <Mark className="missioncta__img__mark" color="#fff" />
      </div>
      <h2 className="missioncta__title">{title}</h2>
      <a className="missioncta__link arrow-hover-right" href={linkUrl}>
        Get involved
        <svg
          className="arrow-image"
          width="15"
          height="10"
          viewBox="0 0 15 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 5L13.7071 4.29289L14.4142 5L13.7071 5.70711L13 5ZM1 6C0.447715 6 0 5.55228 0 5C0 4.44772 0.447715 4 1 4V6ZM9.70711 0.292893L13.7071 4.29289L12.2929 5.70711L8.29289 1.70711L9.70711 0.292893ZM13.7071 5.70711L9.70711 9.70711L8.29289 8.29289L12.2929 4.29289L13.7071 5.70711ZM13 6H1V4H13V6Z"
            fill="#212020"
          />
        </svg>
      </a>
    </section>
  );
}
