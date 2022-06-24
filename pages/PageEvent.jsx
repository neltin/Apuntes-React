import React, { useEffect, useState } from 'react';
import Select from '../components/Select';

const vocales = ['a', 'e', 'i', 'o', 'u'];

export default function Category() {
  /**
   * Ejemplo de input vocales
   */
  const verVocales = (event) => {
    console.log('event', event.key);

    if (vocales.includes(event.key)) {
      alert('presionaste vocal ' + event.key);
      event.preventDefault();
    }
  };

  const options = [
    { value: 1, text: 'Rojo' },
    { value: 2, text: 'Verde' },
    { value: 3, text: 'Azul' },
  ];
  /**
   * Ejemplo de value Selected
   */

  const onSelct = (event) => {
    console.log('Evento capturado por padre', event.target.value);
  };
  /**
   * Ejemplo de formulario echo Nativo https://es.reactjs.org/docs/forms.html
   * Se puede usar igual:
   * https://formik.org/ , https://react-hook-form.com/
   * que son componentes armados
   */

  const [formData, SetforData] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    //Envia al Back-end
    try {
      console.log('console', JSON.stringify(formData));
      await fetch(
        'https://node-xihgnz--8989.local-corp.webcontainer.io/form-data',
        {
          method: 'POST',
          body: JSON.stringify(formData),
          mode: 'cors',
          headers: { 'content-Type': 'application/json' },
        }
      );
    } catch (error) {
      console.log('error', error);
    }

    console.log('formData', formData);
  };

  const handleChange = (event) => {
    //En la consola aparece el name
    console.log('evento en Chance: ', event.target.name);
    //Se remplaza la informacion
    SetforData({ ...formData, [event.target.name]: event.target.value });
  };

  console.log('formData------>', formData);

  return (
    <div>
      <h1>Pagina de Ejemplo de Eventos</h1>
      <p>Cuando se presiona una vocal te avisa con un Alert</p>
      <input onKeyDown={verVocales} />
      <br />
      <br />
      <hr />
      <div>
        <p>
          Estos es un ejemplo de Select con el evento onChange para saber el
          valor del <strong>value</strong>, se muestra en la consola.
        </p>
        <Select options={options} onSelect={onSelct} />
      </div>
      <div>
        <br />
        <br /> <hr />
        <p>Ejemplo de formulario</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            onChange={handleChange}
          />
          <input type="submit" value="value" />
        </form>
      </div>
    </div>
  );
}
