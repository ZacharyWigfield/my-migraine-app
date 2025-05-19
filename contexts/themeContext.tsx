import React, { createContext, useContext, useState } from 'react';

type Theme = 'migraineSafe' | 'light';

// Create a context to hold the current theme and a function to update it
// Fallback for if context is access outside of provider, which shouldn't happen
const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}>({
  theme: 'migraineSafe',
  setTheme: () => {},
});

// Provides the theme state and updater to all descendant components
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('migraineSafe');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to access the current theme and updater function
export const useTheme = () => useContext(ThemeContext);