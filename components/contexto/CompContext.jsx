import React, { useState } from 'react';
import CompContext2 from './CompContext2';
import { ThemeContext } from './Contexts';

//import { createContext } from 'react';
//export const ThemeContext = createContext();

export default function CompContext() {
  const [theme, setTheme] = useState(true);
  //Me aparece en la consola una variable que viene del componente 3.
  console.log('theme:', theme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <p>
        En la consola que lo ejecuto en el componete 1m aparece una variable que
        viene del componente 3.
      </p>
      <hr />
      <CompContext2 />
    </ThemeContext.Provider>
  );
}
