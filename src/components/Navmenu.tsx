import { Link, Outlet } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useContext, useState } from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import LogoLight from '../assets/Poketrunfo_Logo_LightTheme.svg';
import LogoDark from '../assets/Poketrunfo_Logo_DarkTheme.svg';
import AppContext from '../context/AppContext';
import DeckIcon from '../icons/DeckIcon';
import CollectionIcon from '../icons/CollectionIcon';
import GameIcon from '../icons/GameIcon';

function Navmenu() {
  const { theme } = useContext(AppContext);
  const [openMenu, setOpenMenu] = useState('initialRender');

  const handleOpenMenu = () => {
    if (openMenu === 'initialRender') {
      return 'hidden';
    }

    const checkState =
      openMenu === 'true' ? 'animate-slideDown' : 'animate-slideUp';

    return checkState;
  };

  const links = [
    { url: '/deck', name: 'Deck', icon: <DeckIcon /> },
    { url: '/collection', name: 'Collection', icon: <CollectionIcon /> },
    { url: '/game', name: 'Game', icon: <GameIcon /> },
  ];

  return (
    <div
      className="w-full min-h-screen flex flex-col bg-white text-black dark:bg-neutral-900 dark:text-white
        sm:max-w-md sm: mx-auto"
    >
      <nav className="w-full flex border-b-2 mx-auto">
        <div className="w-full flex items-center justify-between">
          <button type="button" className="px-8">
            <Link to="/">
              <img
                className="h-16 py-1"
                src={theme === 'light' ? LogoLight : LogoDark}
                alt="Logo"
              />
            </Link>
          </button>
          <div
            className={`${handleOpenMenu()} w-full h-screen fixed top-0 flex flex-col items-center justify-start pt-24 bg-white text-black dark:bg-neutral-900 dark:text-white z-50
            sm:max-w-md sm: mx-auto
            `}
          >
            <div className="absolute w-full min-h-[96px] flex items-center justify-between top-0 py-4 px-8">
              <ThemeSwitcher />
              <button type="button" onClick={() => setOpenMenu('false')}>
                <FaTimes size={28} className="text-red-500" />
              </button>
            </div>
            {links.map((link) => (
              <Link
                className="w-full flex items-center gap-4 border-b-2 uppercase"
                key={link.name}
                to={link.url}
                onClick={() => setOpenMenu('false')}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </div>
          <button
            className="py-5 px-8"
            type="button"
            onClick={() => setOpenMenu('true')}
          >
            <FaBars size={28} />
          </button>
        </div>
      </nav>
      <section className="w-full min-h-[calc(100vh-70px)] mx-auto bg-zinc-100 dark:bg-neutral-900">
        <Outlet />
      </section>
    </div>
  );
}

export default Navmenu;
