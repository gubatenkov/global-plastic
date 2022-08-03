const Mark = ({ className, color = '#f9b131', ...restProps }) => {
  return (
    <svg
      className={className}
      {...restProps}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 20C15.5229 20 20 15.5229 20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0.00597656 15.5204 4.47961 19.994 10 20ZM9.16668 5C9.16668 4.53977 9.53977 4.16668 10 4.16668C10.4602 4.16668 10.8333 4.53977 10.8333 5V11.6667C10.8333 12.1269 10.4602 12.5 10 12.5C9.53977 12.5 9.16668 12.1269 9.16668 11.6667V5ZM10 15C10.4602 15 10.8333 15.3731 10.8333 15.8333C10.8333 16.2936 10.4602 16.6666 10 16.6666C9.53977 16.6666 9.16668 16.2936 9.16668 15.8333C9.16668 15.3731 9.53977 15 10 15Z"
        fill={color}
      />
    </svg>
  );
};

export default Mark;
