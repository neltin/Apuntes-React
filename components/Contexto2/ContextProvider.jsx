import React, { useState, createContext } from 'react';
export const ThemeContext2 = createContext();

export function ContextProvider({ children }) {
  const [theme, setTheme] = useState('Hola vengo del ContextProvider');
  const ContsFunction = (componente) => {
    alert('Hola hiciste click en el componete: ' + componente);
  };

  return (
    <ThemeContext2.Provider value={{ theme, setTheme, ContsFunction }}>
      {children}
    </ThemeContext2.Provider>
  );
}
