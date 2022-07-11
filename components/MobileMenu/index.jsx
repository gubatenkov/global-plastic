import Link from 'next/link';
import Image from 'next/image';

import { Burger } from 'components';

import logo from 'assets/images/logo.svg';

const MobileMenu = ({ isOpened, onToggle }) => {
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
          <li className="mobmenu__nav-list__item">
            <a href="#" className="mobmenu__nav-list__link">
              Countries
            </a>
          </li>
          <li className="mobmenu__nav-list__item">
            <a href="#" className="mobmenu__nav-list__link">
              Mission
            </a>
          </li>
          <li className="mobmenu__nav-list__item">
            <a href="#" className="mobmenu__nav-list__link">
              Roadmap
            </a>
          </li>
          <li className="mobmenu__nav-list__item">
            <a href="#" className="mobmenu__nav-list__link">
              Get involved
            </a>
          </li>
          <li className="mobmenu__nav-list__item">
            <a href="#" className="mobmenu__nav-list__link">
              Blog
            </a>
          </li>
        </ul>
      </nav>
      <div className="mobmenu__bottom">
        <a className="mobmenu__bottom__link" href="#">
          Join the Dialogues
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
