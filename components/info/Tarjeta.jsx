import React from 'react';

export default function Tarjeta({ id, title, description, image }) {
  console.log('id', id);
  return (
    <div key={id}>
      <img src={image} />
      <div>
        <p>
          Titulo: <strong>{title}</strong>
        </p>
        <p>
          Descripcion: <strong>{description}</strong>
        </p>
      </div>
    </div>
  );
}
