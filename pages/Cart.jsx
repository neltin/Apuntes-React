import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { addDoc, collection, doc, Timestamp } from 'firebase/firestore';

const Cart = () => {
  const [loading, setLoading] = useState(false);
  //const [idItem, setidItem] = useState();

  const hacerPedido = async (event) => {
    event.preventDefault();
    setLoading(true);
    const urlParam = collection(db, 'ordenes');

    const buyer = doc(db, 'users', 'B2IwYTe7zyG8ISBDysQ4');

    //Creacion de datos
    const item1 = 'Wixcmem7L9gAehI4R1HI';
    const item2 = 'bur2WuY2Fl7WO02bcANl';

    const items = ['items/' + item1, 'items/' + item2];
    console.log('items: ', items);

    const addData = {
      buyer,
      state: 'preparacion',
      total: 73000,
      date: Timestamp.now(),
      items,
    };

    try {
      const Datos = await addDoc(urlParam, addData);
      console.log('Document iD: ', Datos.id);

      idItem = Datos.id;
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2>Pagina de Cart</h2>
      <button onClick={hacerPedido}>Hacer el pedido</button>
    </>
  );
};

export default Cart;
