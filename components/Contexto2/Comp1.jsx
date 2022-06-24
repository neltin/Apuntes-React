import React, { useContext } from 'react';
import { ThemeContext2 } from './ContextProvider';
import Comp2 from './Comp2';

export default function Comp1() {
  const { theme, setTheme, ContsFunction } = useContext(ThemeContext2);

  return (
    <div>
      <p>
        <strong>{theme}</strong>
      </p>
      <button onClick={() => ContsFunction('Comp1')}>Click Alert Comp1</button>
      <Comp2 />
    </div>
  );
}
