import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { doc, Timestamp, setDoc } from 'firebase/firestore';
import { nanoid } from 'nanoid';

const Cart = () => {
  const [loading, setLoading] = useState(false);
  //const [idItem, setidItem] = useState();

  const hacerPedido = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const buyer = doc(db, 'users', 'B2IwYTe7zyG8ISBDysQ4');

      //Creacion de datos
      const items = [
        'items/Wixcmem7L9gAehI4R1HI',
        'items/bur2WuY2Fl7WO02bcANl',
      ];

      const addData = {
        buyer,
        state: 'preparacion',
        total: 73000,
        date: Timestamp.now(),
        items,
        id: nanoid(),
      };

      const urlParam = doc(db, 'ordenes', addData.id);
      await setDoc(urlParam, addData);
      console.log('Se incorporaron estos datos', addData);
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
