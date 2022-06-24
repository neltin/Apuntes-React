/**
 * Context
 * -------
 * En React es un aplicacion uni-direcional en donde un componente alimenta al otro
 * a la hora de pasar propiedades si un componete hijo que que necesita alguna
 * propiedad de uno de los primeros padres la cadena paso se hace tedio pero a su vez compleja.
 * Ejemplo:
 * La prop que esta en Comp1 hasta el Comp 4, <Componente1 prop={prop}/>
 *
 * Componente 1 --> Componente 2 --> Componente 3 --> Componente 4
 *
 * Context es una alternativa a no tener que pasar por todos los hijos intermedios
 * como una variable global.
 */

/**
 * Pasos:
 * ------
 * 1) Creamos un contexto o variable global en archivo, este se compartira a todos los hijos que necesites.
 * Ejemplo: Archivo Context.js
 * Importamos y utilizamos la función createContext()
 */
import React, { createContext } from 'react';
export const ThemeContext = createContext();

/**
 * 2) Luego el padre que le quiere transferir la variable a sus hijos debera importala y setearla, para eso utilizamos useState() para crear una const que tendra el valor global.
 * 3) Para asignar el valor tenemos que usar la variable global como componente y decirle que va a proveer un valor que seria la nueva const con .provider value={}
 * y lo encerrando en etiqueta el 1er hijo. 
 */
import React, { useState } from 'react';
import CompContext2 from './CompContext2'; //hijo
import { ThemeContext } from './Contexts'; //variable global

export default function CompContext() {
  const [theme, setThema] = useState("Hola");
  return (
    <ThemeContext.Provider value={theme}>
      <CompContext2 />
    </ThemeContext.Provider>
  );
}

/**
 * 4) Si uno de los hijo lo necesita deberia importar el componente de donde proviene la variable
 * usando useContext() y asignadolo dentro de parentesis para igualarlo a una constante que se va utilizar en la funcion. 
 * 
 * Si nos fijamos en  ejemplo: El hijo 33 no se le tubo que pasar ningun parametros sus hermanos, sino directo donde se guarda la variable global. 
*/
import React, { useContext } from 'react';
import { ThemeContext } from './Contexts';

export default function CompContext33() {
  const theme = useContext(ThemeContext);

  return (
    <div>
        { theme } //hola
    </div>
  );
}
/**
 * Contexto dinamico
 * -----------------
 * Podemos agregar nuevas valores a la variable global desde cualquier hijo y a su vez cualquiera de los otros hijos o padres podran usarlo ya que se guarda en una varia global.
 * 1) Pason ademas de la constante su funcion de seteo en el value del .provider 
 */

 export default function CompContext() {
   const [theme, setThema] = useState("Hola");

   return (
     <ThemeContext.Provider value={theme, setThema}>
       <CompContext2 />
     </ThemeContext.Provider>
   );
 }

 /**
  * El hijo que que va a sobreescribir o agregar una nueva valor 
  * Se utiliza un useEffect(()=>{},[]) para que lo haga una sola vez y se toma la funcion del set que es enviado en un array.
  */

  const thema = useContext(ThemeContext);
  
  useEffect(() => {
    thema.setTheme({ ...thema.theme, Comp3: 'componete 3' });
  }, []);
