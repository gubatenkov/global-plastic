import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Burger } from 'components';

import logo from 'assets/images/logo.svg';

const Header = ({ isMobNavVisible, toggleMobNav, links }) => {
  return (
    <header className="header">
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
      <motion.div
        className="header__wave"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="header__wave"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
      />
    </header>
  );
};

export default Header;
