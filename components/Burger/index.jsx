const Burger = ({ isClicked = true, onClick }) => {
  return (
    <button
      className={isClicked ? 'burger active' : 'burger'}
      type="button"
      onClick={onClick}
    >
      <span className="burger__line" />
    </button>
  );
};

export default Burger;
