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
      <h2>Pagina Home</h2>
      <p>
        <strong>Ejemplo de renderizacion condicional:</strong>{' '}
      </p>
      <p>
        Se integra un setTimeout() para simular una carga, si esta cargando
        renderiza el <strong>Loading...</strong> sino renderiza la sección
      </p>
      <hr />
      <p>Si hace clickdesaparece el input.</p>
      {buscar ? <input type="text" /> : ''}
      <br />
      <br />
      <button onClick={() => setBuscar(!buscar)}>
        {buscar ? 'Ocultar input' : 'Buscar'}
      </button>
      <hr />
      <p>Aca ejecutamos en la consola un ejemplo Promise</p>
      <Promises />
    </div>
  );
}
