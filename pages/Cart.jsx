import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import {
  collection,
  addDoc,
  doc,
  Timestamp,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';
import { nanoid } from 'nanoid';

const Cart = () => {
  const [loading, setLoading] = useState(false);
  const [Datos, setDatos] = useState([]);

  const hacerPedido = async () => {
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
        state: 'Preparación',
        total: 73000,
        date: Timestamp.now(),
        items,
        //id: nanoid(),
      };
      //Utilizamos nanoid() para generar id y luego usando setDoc() para guardar.
      // const urlParam = doc(db, 'ordenes', addData.id);
      //await setDoc(urlParam, addData);
      console.log('Se incorporaron estos datos', addData);

      // Guardar con AddDoc(), si no se utiliza nonoid()
      const docRef = await addDoc(collection(db, 'ordenes'), addData);
      const urlParam = doc(db, 'ordenes', docRef.id);
      await updateDoc(urlParam, { id: docRef.id });
      //Fin addDoc()
      setDatos([{ id: docRef.id, ...addData }, ...Datos]);
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoading(false);
    }
  };

  const eliminarPedido = async (id) => {
    try {
      await deleteDoc(doc(db, 'ordenes', id));
      alert('Se elimino pedido: ' + id);
      //Eliminamos de datos.
      setDatos(Datos.filter((item) => item.id !== id));
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2>Pagina de Cart</h2>
      <p>Funciones de Firestore, para agregar, eliminar y actualizar.</p>
      <p>
        La actualizacion solo esta de ejemplo en el codigo a la hora de
        incorporarle el id al pedido.
      </p>
      <p>
        <strong>Recomiendo leer el paso a paso</strong> en la carpeta
        apuntes/B11 - Firebase.jsx
      </p>
      <button onClick={hacerPedido}>
        {loading == true ? 'Loading...' : 'Hacer el pedido'}
      </button>
      <hr />
      {Datos.map((item) => (
        <div key={item.id}>
          <h3>Codigo de Compra: {item.id}</h3>
          <p>
            En <strong>{item.state}</strong>
          </p>
          <button onClick={() => eliminarPedido(item.id)}>Eliminar</button>
          <hr />
        </div>
      ))}
    </>
  );
};
//<button onClick={eliminarPedido, () => idEliminar(item.id)}
export default Cart;
