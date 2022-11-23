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
import BackToTopBtn from './BackToTopBtn';

function Navmenu() {
  const { theme } = useContext(AppContext);
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    const checkState = openMenu ? 'animate-slideDown' : 'hidden';

    return checkState;
  };

  const links = [
    { url: '/deck', name: 'Deck', icon: <DeckIcon /> },
    { url: '/collection', name: 'Collection', icon: <CollectionIcon /> },
    { url: '/game', name: 'Game', icon: <GameIcon /> },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col bg-zinc-100 text-black dark:bg-neutral-900 dark:text-white">
      <div className="w-full max-w-7xl mx-auto ">
        <nav className="w-full bg-white dark:bg-neutral-900 flex border-b-2 mx-auto">
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
              className={`${handleOpenMenu()} 
              w-full h-screen fixed top-0 flex flex-col justify-start pt-24 bg-white text-black dark:bg-neutral-900 dark:text-white z-50
             
            sm:h-[68px] sm:flex sm:justify-between sm:items-center sm:relative
            sm:bg-transparent sm:dark:bg-transparent 
            sm:flex-row sm:pt-0
            `}
            >
              <div className="sm:w-full sm:flex sm:justify-center sm:gap-7">
                {links.map((link) => (
                  <Link
                    className="w-full flex items-center gap-4 border-b-2 uppercase p-3
                sm:w-fit sm:border-none sm:p-0 sm:gap-0 sm:font-semibold"
                    key={link.name}
                    to={link.url}
                    onClick={() => setOpenMenu(false)}
                  >
                    <div className="w-[68px] h-[68px] sm:p-2">{link.icon}</div>
                    {link.name}
                  </Link>
                ))}
              </div>
              <div
                className="w-full absolute flex items-center justify-between top-0 px-8 pt-5
              sm:w-fit sm:relative sm:p-0"
              >
                <ThemeSwitcher />
                <button type="button" onClick={() => setOpenMenu(false)}>
                  <FaTimes size={28} className="text-red-500 sm:hidden" />
                </button>
              </div>
            </div>
            <button
              className="py-5 px-8
            sm:hidden"
              type="button"
              onClick={() => setOpenMenu(true)}
            >
              <FaBars size={28} />
            </button>
          </div>
        </nav>
        <section className="w-full min-h-[calc(100vh-70px)] mx-auto bg-zinc-100 dark:bg-neutral-900">
          <Outlet />
        </section>
        <BackToTopBtn />
      </div>
    </div>
  );
}

export default Navmenu;
