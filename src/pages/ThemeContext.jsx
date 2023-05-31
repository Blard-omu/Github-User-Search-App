import React, { createContext, useState } from 'react';
// creating context
const ThemeContextCreated = createContext({
  theme: 'light',
  toggleTheme: () => {},
});
// console.log(ThemeContextCreated);

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContextCreated.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContextCreated.Provider>
  );
};

export { ThemeContextCreated, ThemeContext };
