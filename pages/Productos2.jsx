import React, { useState, useEffect } from 'react';
import { useFirestore } from '../hooks/useFirestore';
import Tarjeta from '../components/info/Tarjeta';

const Productos2 = () => {
  const { data, error, loading } = useFirestore();

  if (loading) return <p>Loadding Data...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <h2>Firestore</h2>
      <p>
        Se creo un hook para usar firestore en una funcion{' '}
        <strong>useFirestore()</strong>. <br />
        El hook se encuentra en carpeta hooks. Haciendo mas limpio la
        informacion que en la pagina producto.
      </p>
      <hr />
      <p>
        <strong>Aca se le pasa con un componete Tarjeta:</strong>
      </p>

      {data.map((item, key) => (
        <Tarjeta {...item} />
      ))}
      <hr />
      <p>
        <strong>Aca se hace directamente:</strong>
      </p>

      {data.map((item) => (
        <div key={item.id}>
          <img src={item.image} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </>
  );
};

export default Productos2;
