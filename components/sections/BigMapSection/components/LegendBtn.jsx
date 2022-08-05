import Icon from './Icon';

export default function LegendBtn({ onClick: handleClick }) {
  return (
    <button className="legend-btn" onClick={handleClick}>
      Map legend <Icon />
    </button>
  );
}
