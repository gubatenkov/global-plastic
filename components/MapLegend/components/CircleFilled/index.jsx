const CircleFilled = ({ size = '10', color = '#B0DDD9' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="5"
        cy="5"
        r="4.2"
        transform="rotate(-90 5 5)"
        fill={color}
        stroke="#979797"
        strokeWidth="0.4"
      />
    </svg>
  );
};

export default CircleFilled;
