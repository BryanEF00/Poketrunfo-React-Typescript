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
    <button
      className="w-14 h-14 mx-2"
      type="button"
      onClick={handleThemeSwitch}
    >
      {theme === 'light' ? (
        <div>
          <img src={LightThemeIcon} alt="Dark Theme Icon" />
        </div>
      ) : (
        <div>
          <img
            className="w-12 mx-auto"
            src={DarkThemeIcon}
            alt="Light Theme Icon"
          />
        </div>
      )}
    </button>
  );
}

export default ThemeSwitcher;
