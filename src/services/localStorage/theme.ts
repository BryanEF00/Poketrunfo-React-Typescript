const THEME = 'theme';

export const readTheme = (): string => {
  const read = localStorage.getItem(THEME);

  if (!read) {
    localStorage.setItem(THEME, 'light');
    return 'light';
  }

  return read;
};

export const saveTheme = (value: string) => localStorage.setItem(THEME, value);
