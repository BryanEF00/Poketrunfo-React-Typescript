import { useContext } from 'react';
import AppContext from './context/AppContext';
import AppRouter from './routes/AppRouter';

function App() {
  const { theme } = useContext(AppContext);

  return (
    <div className={`${theme}`}>
      <AppRouter />
    </div>
  );
}

export default App;
