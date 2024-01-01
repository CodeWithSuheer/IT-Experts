import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // Read the theme preference from localStorage or default to false (light theme)
  const storedTheme = localStorage.getItem('isDarkTheme');
  const [isDarkTheme, setIsDarkTheme] = useState(storedTheme ? JSON.parse(storedTheme) : false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => {
      const newTheme = !prevTheme;
      localStorage.setItem('isDarkTheme', JSON.stringify(newTheme)); // Save to localStorage
      return newTheme;
    });
  };

  // Save to localStorage when the user is about to leave the page
  const handleBeforeUnload = () => {
    localStorage.setItem('isDarkTheme', JSON.stringify(isDarkTheme));
  };

  // Attach the beforeunload event listener
  useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export { ThemeProvider, useTheme };
