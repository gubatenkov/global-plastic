export default function MiniCard({
  index,
  activeIndex,
  onHover: handleMouseEnter,
}) {
  return (
    <div
      className={index === activeIndex ? 'minicard active' : 'minicard'}
      onMouseEnter={() => handleMouseEnter(index)}
    >
      <span className="minicard__number">0{index}</span>
      <h3 className="minicard__title">Experiential Intelligence</h3>
      <p className="minicard__text">
        Experience the crisis with multi-faceted Expeditionss
      </p>
    </div>
  );
}
