import React from 'react';

export default function Component3({ theme }) {
  return (
    <div>
      <p>Soy el componente 3</p>
      <p>
        El tema esta en modo{' '}
        <strong style={{ color: 'red' }}>
          {theme ? 'activado' : 'Desactivado'}
        </strong>
      </p>
    </div>
  );
}
