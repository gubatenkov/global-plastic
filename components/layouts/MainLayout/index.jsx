import { useState } from 'react';

import { Header, Footer, MobileMenu } from 'components';

const MainLayout = ({ children, menu, socials }) => {
  const [isMobNavVisible, setIsMobNavVisible] = useState(false);

  const toggleMobNav = () => setIsMobNavVisible(!isMobNavVisible);

  return (
    <div className="main-layout">
      <MobileMenu
        isOpened={isMobNavVisible}
        onToggle={toggleMobNav}
        links={menu}
      />
      <div className="main-layout__header-wrap">
        <Header
          isMobNavVisible={isMobNavVisible}
          toggleMobNav={toggleMobNav}
          links={menu}
        />
      </div>
      <main className="main">{children}</main>
      <Footer links={menu} socials={socials} />
      <div
        className={
          isMobNavVisible
            ? 'main-layout__backdrop active'
            : 'main-layout__backdrop'
        }
        onClick={() => setIsMobNavVisible(false)}
      />
    </div>
  );
};

export default MainLayout;
