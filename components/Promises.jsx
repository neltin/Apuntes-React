import React, {useState} from 'react';

export default function Promises() {
  const variable = new Promise((resolve, rejact) => {
    resolve('Devolucion de la informacion');
    rejact('es un error');
  });

  /**
   * Then: Actua como un Try - Recibe información sin problemas data -> Resolve
   * Catch: Recibe informacion sobre un error data -> Rejeact
   * Finally: Siempre se ejecuta 
   * Data: información que recibe
   * 
   * 
   * (data) =>{ Ejecucion de luego de recibir los datos }
  
  **/
  variable
    .then((data) => {
      console.log(data);
    })
    .catch((data) => {
      console.log(data);
    })
    .finally(() => {
      console.log('Me ejecute porque soy Finally');
    });
}
