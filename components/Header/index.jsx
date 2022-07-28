import Link from 'next/link';
import Image from 'next/image';

import { Burger } from 'components';
import HeaderPanel from './components/HeaderPanel';

import logo from 'assets/images/logo.svg';

const Header = ({ isMobNavVisible, toggleMobNav, links }) => {
  return (
    <HeaderPanel className="header">
      <div className="header__logo">
        <Link className="header__logo__link" href="/">
          <a>
            <Image className="header__logo__img" src={logo} alt="logo" />
          </a>
        </Link>
      </div>
      <Burger isClicked={isMobNavVisible} onClick={toggleMobNav} />
      <ul className="header-nav">
        {links?.length &&
          links.map(({ _key, headerMenuLinkText, headerMenuLinkUrl }) => {
            return (
              <li className="header-nav__item" key={_key}>
                <a className="header-nav__link" href={headerMenuLinkUrl}>
                  {headerMenuLinkText}
                </a>
              </li>
            );
          })}
      </ul>
      <Link passHref href="/involved#form">
        <a className="header__link">Join the Dialogues</a>
      </Link>
    </HeaderPanel>
  );
};

export default Header;
