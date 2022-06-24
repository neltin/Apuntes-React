import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

import Tarjeta from '../components/info/Tarjeta';

export default function Productos() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const Collection = getDocs(collection(db, 'items'));

    Collection.then((snap) => {
      const dataDB = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setItems(dataDB);
    })
      .catch((error) => {
        console.log('error', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  console.log('item: ', items.length);

  return (
    <div>
      <h1>Pagina Productos</h1>
      <ul>
        <li>
          <Link to={`/productos/${1}`}>Detalle de productos 1</Link>
        </li>
        <li>
          <Link to={`/productos/${2}`}>Detalle de productos 2</Link>
        </li>
      </ul>
      <hr />
      <p>Render condicional con Looding es falso</p>
      {loading === false
        ? items.map((item, key) => <Tarjeta {...item} />)
        : 'No hay resultados'}

      <hr />
      {items.map((item) => (
        <Link to={`/productos/${item.id}`}>
          <div key={item.id}>
            <img src={item.image} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
