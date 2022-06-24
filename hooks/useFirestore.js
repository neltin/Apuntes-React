import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

export const useFirestore = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('getData');

    setLoading(true);
    const Collection = getDocs(collection(db, 'items'));

    Collection.then((snap) => {
      const dataDB = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setData(dataDB);
    })
      .catch((error) => {
        console.log('error', error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    data,
    loading,
    error,
  };
};
