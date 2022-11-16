import { useContext } from 'react';
import AppContext from '../context/AppContext';
import { saveTheme } from '../services/localStorage/theme';
import DarkThemeIcon from '../assets/DarkThemeIcon.svg';
import LightThemeIcon from '../assets/LightThemeIcon.svg';

function ThemeSwitcher() {
  const { theme, state, setState } = useContext(AppContext);
  const checkTheme = theme === 'light' ? 'dark' : 'light';

  const handleThemeSwitch = () => {
    setState({ ...state, theme: checkTheme });
    saveTheme(checkTheme);
  };

  return (
    <button type="button" onClick={handleThemeSwitch}>
      {theme === 'light' ? (
        <div>
          <img className="w-16" src={LightThemeIcon} alt="Dark Theme Icon" />
        </div>
      ) : (
        <div className="w-12">
          <img src={DarkThemeIcon} alt="Light Theme Icon" />
        </div>
      )}
    </button>
  );
}

export default ThemeSwitcher;
