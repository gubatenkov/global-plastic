const HeaderPanel = ({ className, children, ...restProps }) => {
  return (
    <header className={className} {...restProps}>
      {children}
    </header>
  );
};

export default HeaderPanel;
