import { Header, Footer } from 'components';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
