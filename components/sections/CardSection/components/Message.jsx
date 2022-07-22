const Message = ({ className, color = '#f9b131', ...restProps }) => {
  return (
    <svg
      className={className}
      {...restProps}
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 7.98893C18 5.19254 18 3.79435 17.455 2.72627C16.9757 1.78676 16.2108 1.02292 15.27 0.544213C14.2004 0 12.8003 0 10 0H8C5.19974 0 3.79961 0 2.73005 0.544213C1.78924 1.02292 1.02433 1.78676 0.544967 2.72627C0 3.79435 0 5.19254 0 7.98893V12.2114C0 14.2916 1.68863 15.9779 3.77166 15.9779H4.37341C5.15251 15.9779 5.68525 16.7636 5.3959 17.486C4.98743 18.5058 6.1635 19.4277 7.05848 18.7893L9.66922 16.9271C9.69584 16.9081 9.70916 16.8986 9.72224 16.8894C10.5562 16.3025 11.5501 15.9845 12.5703 15.978C12.5863 15.9779 12.6077 15.9779 12.6504 15.9779C12.9623 15.9779 13.1183 15.9779 13.2364 15.9723C15.812 15.8505 17.8725 13.7929 17.9944 11.2209C18 11.1029 18 10.9633 18 10.684V7.98893Z"
        fill="#212020"
      />
      <path
        d="M4.46967 7.46997C4.17678 7.76287 4.17678 8.23774 4.46967 8.53063C4.76256 8.82353 5.23744 8.82353 5.53033 8.53063L4.46967 7.46997ZM13.5303 8.53063C13.8232 8.23774 13.8232 7.76287 13.5303 7.46997C13.2374 7.17708 12.7626 7.17708 12.4697 7.46997L13.5303 8.53063ZM9 8.0003L8.28849 8.23747V8.23747L9 8.0003ZM5.53033 8.53063L6.29426 7.7667L5.2336 6.70604L4.46967 7.46997L5.53033 8.53063ZM12.7664 9.29456L13.5303 8.53063L12.4697 7.46997L11.7057 8.2339L12.7664 9.29456ZM8.28849 8.23747C8.92423 10.1447 11.3448 10.7161 12.7664 9.29456L11.7057 8.2339C11.0726 8.867 9.99464 8.61251 9.71151 7.76313L8.28849 8.23747ZM6.29426 7.7667C6.92735 7.13361 8.00536 7.38809 8.28849 8.23747L9.71151 7.76313C9.07577 5.8559 6.65517 5.28448 5.2336 6.70604L6.29426 7.7667Z"
        fill="white"
      />
    </svg>
  );
};

export default Message;