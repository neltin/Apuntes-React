import React, { useContext } from 'react';
import { ThemeContext2 } from './ContextProvider';

export default function Comp2() {
  const { theme, setTheme, ContsFunction } = useContext(ThemeContext2);

  return (
    <div>
      <p>
        <strong>{theme}</strong>
      </p>
      <button onClick={() => ContsFunction('Comp2')}>Click Alert Comp2</button>
    </div>
  );
}
