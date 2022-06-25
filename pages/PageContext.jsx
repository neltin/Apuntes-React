import * as React from 'react';
import Component1 from '../components/PropNormal/Component1';
import CompContext from '../components/contexto/CompContext';
import { ContextProvider } from '../components/Contexto2/ContextProvider';
import Comp1 from '../components/Contexto2/Comp1';
export default function Carts() {
  return (
    <div>
      <h2>Contexto</h2>
      <p>Ejemplo de paso de propiedades Normal entre componentes</p>
      <Component1 />
      <hr />
      <CompContext />
      <hr />
      <ContextProvider>
        <Comp1 />
      </ContextProvider>
    </div>
  );
}
