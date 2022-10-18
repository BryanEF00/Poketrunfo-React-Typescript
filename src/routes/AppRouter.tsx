import { HashRouter, Route, Routes } from 'react-router-dom';
import Navmenu from '../components/Navmenu';
import { Collection, Deck, Game, Home } from '../pages';

function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Navmenu />}>
          <Route path="/" element={<Home />} />
          <Route path="/deck" element={<Deck />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/game" element={<Game />} />
        </Route>
        <Route path="*" />
      </Routes>
    </HashRouter>
  );
}

export default AppRouter;
