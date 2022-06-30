import { Header, Footer } from 'components';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <div className="main-layout__header-wrap">
        <Header />
      </div>
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
