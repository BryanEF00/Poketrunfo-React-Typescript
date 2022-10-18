import { Link, Outlet } from 'react-router-dom';

function Navmenu() {
  const links = [
    { url: '/deck', name: 'Deck' },
    { url: '/collection', name: 'Collection' },
    { url: '/game', name: 'Game' },
  ];

  return (
    <div className="w-full min-h-screen flex justify-center items-start mt-16">
      <nav className="w-full h-16 fixed top-0 flex justify-center border-b-2">
        <div className="w-full max-w-screen-lg  flex items-center justify-between">
          <div className="h-full">
            <Link
              className="h-full w-28 flex items-center justify-center px-5
              transition-colors
              hover:bg-slate-200"
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
                hover:bg-slate-200"
                key={link.name}
                to={link.url}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navmenu;
