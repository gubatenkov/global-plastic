const SliderPrevBtn = ({ onClick }) => {
  return (
    <button className="slider-nav__btn slider-nav__btn-prev arrow-hover-left" onClick={onClick}>
      <svg
        width="15"
        height="10"
        viewBox="0 0 15 10"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="arrow-image"
      >
        <path
          d="M2 5L1.29289 5.70711L0.585787 5L1.29289 4.29289L2 5ZM14 4C14.5523 4 15 4.44772 15 5C15 5.55229 14.5523 6 14 6L14 4ZM5.29289 9.70711L1.29289 5.70711L2.70711 4.29289L6.70711 8.29289L5.29289 9.70711ZM1.29289 4.29289L5.29289 0.292894L6.70711 1.70711L2.70711 5.70711L1.29289 4.29289ZM2 4L14 4L14 6L2 6L2 4Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
};

export default SliderPrevBtn;
