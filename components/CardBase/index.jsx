const CardBase = ({ children, className = '' }) => {
  return <div className={`card-base ${className}`}>{children}</div>;
};

export default CardBase;
