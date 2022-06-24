import { SliderPrevBtn, SliderNextBtn } from 'components';

const SliderNav = ({
  onPrevClick,
  current,
  total,
  onNextClick,
  theme = 'light',
}) => {
  return (
    <div className={`slider-nav ${theme}`}>
      <SliderPrevBtn onClick={onPrevClick} />
      <div className="slider-nav__num">
        <p className="slider-nav__num__curr">{current}</p>
        <span className="slider-nav__num__divider" />
        <p className="slider-nav__num__total">{total}</p>
      </div>
      <SliderNextBtn onClick={onNextClick} />
    </div>
  );
};

export default SliderNav;
