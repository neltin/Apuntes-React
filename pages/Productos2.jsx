import React, { useState, useEffect } from 'react';
import { useFirestore } from '../hooks/useFirestore';
import Tarjeta from '../components/info/Tarjeta';

const Productos2 = () => {
  const { data, error, loading } = useFirestore();

  if (loading) return <p>Loadding Data...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <p>
        <strong>Aca se le pasa a un componete Tarjeta:</strong>
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
