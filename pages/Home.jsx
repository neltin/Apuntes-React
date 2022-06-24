import React, { useEffect, useState } from 'react';
import Promises from '../components/Promises';

export default function Home() {
  const [loder, setLoder] = React.useState();
  const [buscar, setBuscar] = React.useState();

  //Luego de 2seg carga la pagina
  useEffect(() => {
    setLoder(true);
    setTimeout(() => setLoder(false), 2000);
  }, []);

  if (loder) {
    return (
      <div>
        <h1>Looding...</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Pagina Home</h1>
      <p>Aca ejecutamos en la consola un ejemplo Promise</p>
      <Promises />
      <hr />
      <p>
        <strong>Ejemplo de renderizacion condicional</strong> Si hace click
        desaparece el input.
      </p>
      {buscar ? <input type="text" /> : ''}
      <br />
      <br />
      <button onClick={() => setBuscar(!buscar)}>
        {buscar ? 'Ocultar input' : 'Buscar'}
      </button>
    </div>
  );
}
