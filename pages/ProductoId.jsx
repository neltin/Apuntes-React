import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink, Outlet, useSearchParams } from 'react-router-dom';

import { db } from '../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

export default function ProductosId() {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const urlParam = collection(db, 'items');
    const q = query(urlParam, where('id', '==', id));

    const Collection = getDocs(q);

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

  console.log(items);
  return (
    <div>
      <h2>Pagina Productos ID</h2>
      {items.map((item) => (
        <div key={item.id}>
          <img src={item.image} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
