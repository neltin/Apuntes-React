/**
 * En React, los eventos se disparan a cada rato ya que se renderiza constantemente.
 * Para eso utilizaioms el useEffect()
 *
 * window.addEventListerner("click");
 * Luego es buena practica remover el evento creado para que no se ejecute en otra partes del dom
 * window.removeEventListener(click);
 */

useEffect(() => {
  window.removeEventListener('click');
  window.addEventListerner('click', (event) => {
    event.preventDefault();
    alert('hice click');
  });

  return window.removeEventListener('click');
}, []);

/**
 * Synthetic event
 * ---------------
 * Son eventos creados por react, de las cuales no hay que hacer ningun remove del evento porque react ya lo hace.
 */

<a onClick={() => alert('click')} />;

/**
 * Componentes transformado en eventos reutilizables
 * -------------------------------------------------
 * Se crea un componente que recive por parametros los items sus id
 * y el evento que es nuevamente enviado al componente que lo pidio para que pueda utilizarlo como quiera, con el evento onChance envia el selecionado.
 *
 * return onSelect(event);
 * */

import React from 'react';

export default function Select({ options, defaultOption, onSelect }) {
  return (
    <select
      onChange={(event) => {
        if (onSelect) return onSelect(event);
      }}
    >
      {options.map((item) => (
        <option value={item.value}>{item.text}</option>
      ))}
    </select>
  );
}

/**
 * Del otro lado deve llamarlo e enviarle los parametros
 * options sus valores, onSelect es una funcion que le devuelven el evento del onChance y lo utilaza para saber el value.
 */
const options = [
  { value: 1, text: 'Rojo' },
  { value: 2, text: 'Verde' },
  { value: 3, text: 'Azul' },
];

const onSelct = (event) => {
  console.log('Evento capturado por padre', event.target.value);
};

return <Select options={options} onSelect={onSelct} />;
