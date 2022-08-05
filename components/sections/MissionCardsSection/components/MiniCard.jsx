export default function MiniCard({
  index,
  activeIndex,
  onHover: handleMouseEnter,
  title,
  text,
}) {
  return (
    <div
      className={index === activeIndex ? 'minicard active' : 'minicard'}
      onMouseEnter={() => handleMouseEnter(index)}
    >
      <span className="minicard__number">0{index}</span>
      <h3 className="minicard__title">{title}</h3>
      <p className="minicard__text">{text}</p>
    </div>
  );
}
