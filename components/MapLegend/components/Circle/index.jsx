const Circle = ({ size = '8', color }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="4"
        cy="4"
        r="3.5"
        transform="rotate(-90 4 4)"
        stroke={color}
      />
    </svg>
  );
};

export default Circle;
