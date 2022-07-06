import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import { Burger } from 'components';

import logo from 'assets/images/logo.svg';

const Header = () => {
  const [isMobNavVisible, setIsMobNavVisible] = useState(false);

  const toggleMobNav = () => setIsMobNavVisible(!isMobNavVisible);

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
        <li className="header-nav__item">
          <a className="header-nav__link" href="#">
            Countries
          </a>{' '}
        </li>
        <li className="header-nav__item">
          <a className="header-nav__link" href="#">
            Mission
          </a>{' '}
        </li>
        <li className="header-nav__item">
          <a className="header-nav__link" href="#">
            Roadmap
          </a>{' '}
        </li>
        <li className="header-nav__item">
          <a className="header-nav__link" href="#">
            Get involved
          </a>{' '}
        </li>
        <li className="header-nav__item">
          <a className="header-nav__link" href="#">
            Blog
          </a>{' '}
        </li>
      </ul>
      <a className="header__link" href="#">
        Join the Dialogues
      </a>
      <div className="header__wave">
        <div
          className="header__wave-inner"
          style={{ height: '45px', overflow: 'hidden' }}
        >
          <svg
            viewBox="0 0 800 150"
            preserveAspectRatio="none"
            style={{ height: '100%', width: '100%' }}
          >
            <path
              d="M108.63,135.70 C189.90,115.97 201.75,132.73 288.09,135.70 L444.98,149.52 L31.31,150.50 Z"
              style={{ stroke: 'none', fill: '#f5f5f5' }}
            ></path>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
