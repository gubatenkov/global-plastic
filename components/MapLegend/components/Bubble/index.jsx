const Bubble = ({ size = '32' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        opacity="0.2"
        r="16"
        transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 16 16)"
        fill="#5BAEF0"
      />
    </svg>
  );
};

export default Bubble;
