import Link from 'next/link';
import Image from 'next/image';

import { Burger } from 'components';

import logo from 'assets/images/logo.svg';

const MobileMenu = ({ isOpened, onToggle, links }) => {
  return (
    <div className={isOpened ? 'mobmenu active' : 'mobmenu'}>
      <div className="mobmenu__top">
        <div className="mobmenu__top-logo">
          <Link className="mobmenu__top-logo__link" href="/">
            <a>
              <Image className="mobmenu__top-logo__img" src={logo} alt="logo" />
            </a>
          </Link>
        </div>
        <div className="mobmenu__top-burger">
          <Burger isClicked={isOpened} onClick={onToggle} />
        </div>
      </div>
      <nav className="mobmenu__nav">
        <ul className="mobmenu__nav-list">
          {links?.length &&
            links.map(({ _key, headerMenuLinkText, headerMenuLinkUrl }) => {
              return (
                <li className="mobmenu__nav-list__item" key={_key}>
                  <a
                    className="mobmenu__nav-list__link"
                    href={headerMenuLinkUrl}
                  >
                    {headerMenuLinkText}
                  </a>
                </li>
              );
            })}
        </ul>
      </nav>
      <div className="mobmenu__bottom">
        <Link className="mobmenu__bottom__link" href="/involved#form">
          Join the Dialogues
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
