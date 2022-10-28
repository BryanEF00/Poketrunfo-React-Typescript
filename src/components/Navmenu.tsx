import { Link, Outlet } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import ThemeSwitcher from './ThemeSwitcher';

function Navmenu() {
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
    { url: '/deck', name: 'Deck' },
    { url: '/collection', name: 'Collection' },
    { url: '/game', name: 'Game' },
  ];

  return (
    <div
      className="w-full min-h-screen flex flex-col bg-white text-black dark:bg-neutral-900 dark:text-white
        sm:max-w-md sm: mx-auto"
    >
      <nav className="w-full flex border-b-2 mx-auto">
        <div className="w-full flex items-center justify-between">
          <button type="button" className="py-5 px-8">
            <Link to="/">Home</Link>
          </button>
          <div
            className={`${handleOpenMenu()} w-full h-screen fixed top-0 flex flex-col items-center justify-start pt-20 gap-5 bg-white text-black dark:bg-neutral-900 dark:text-white z-50
            sm:max-w-md sm: mx-auto
            `}
          >
            <div className="absolute w-full flex items-center justify-between top-0 p-8">
              <ThemeSwitcher />
              <button type="button" onClick={() => setOpenMenu('false')}>
                <FaTimes size={28} className="text-red-500" />
              </button>
            </div>
            {links.map((link) => (
              <Link
                className="w-full border-b-2 px-2 pt-5 pb-2 uppercase"
                key={link.name}
                to={link.url}
                onClick={() => setOpenMenu('false')}
              >
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
