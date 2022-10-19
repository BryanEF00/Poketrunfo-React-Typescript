import { useContext } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import AppContext from '../context/AppContext';
import { saveTheme } from '../services/localStorage/theme';

function ThemeSwitcher() {
  const { theme, state, setState } = useContext(AppContext);
  const checkTheme = theme === 'light' ? 'dark' : 'light';

  const handleThemeSwitch = () => {
    setState({ ...state, theme: checkTheme });
    saveTheme(checkTheme);
  };

  return (
    <button className="h-full px-5" type="button" onClick={handleThemeSwitch}>
      {theme === 'light' ? (
        <MdLightMode size={30} className="text-yellow-400" />
      ) : (
        <MdDarkMode size={30} className="text-white" />
      )}
    </button>
  );
}

export default ThemeSwitcher;
