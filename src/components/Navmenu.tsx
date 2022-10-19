import { Link, Outlet } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';

function Navmenu() {
  const links = [
    { url: '/deck', name: 'Deck' },
    { url: '/collection', name: 'Collection' },
    { url: '/game', name: 'Game' },
  ];

  return (
    <div className="bg-white text-black dark:bg-neutral-900 dark:text-white w-full min-h-screen flex justify-center items-start transition-all duration-100">
      <nav className="w-full h-16 fixed top-0 flex justify-center border-b-2">
        <div className="w-full max-w-screen-lg  flex items-center justify-between">
          <div className="h-full">
            <Link
              className="h-full w-28 flex items-center justify-center px-5
              transition-colors
              hover:bg-slate-200
              dark:hover:bg-neutral-800"
              to="/"
            >
              Home
            </Link>
          </div>
          <div className="h-full flex items-center gap-1">
            {links.map((link) => (
              <Link
                className="h-full w-28 flex items-center justify-center px-5
                transition-colors
                hover:bg-slate-200
                dark:hover:bg-neutral-800"
                key={link.name}
                to={link.url}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <ThemeSwitcher />
        </div>
      </nav>
      <section className="transition-all duration-100 mt-16">
        <Outlet />
      </section>
    </div>
  );
}

export default Navmenu;
