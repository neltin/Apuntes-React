/**
 * React Router
 * ------------
 * https://reactrouter.com/docs/en/v6/getting-started/tutorial
 * Hay que instalar primero la dependencia con:
 *
 * npm install react-router-dom
 *
 * Luego de verificar en package.json la dependencia
 * Integramos en la app el react-router-dom
 * y importamos las paginas que vamos a Router, creadas previamente en una carpeta. Por ejemplo: pages
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Productos';

/**
 * En la funcion de la App
 * incorporamos las etiquetas correspondiente para el ruteo
 * Todo lo que en el BrowserRouter son las rutas de redireccion con su URL amigable asignado por <Route path="/">
 *
 * La incorporacion del seccion se hace con el element={}
 * <Route index element={<Home />} />
 *
 * Exact: Un booleano para definir si queremos que la ruta tiene o no que ser exacta para renderizar un componente.
 */
return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route exact path="/Productos" element={<Productos />} />
      </Routes>
    </BrowserRouter>
  </div>
);

/**
 * Navegador
 * ---------
 * Para crear un Navegador es preferible crear un component para compartir en todas las paginas. Ejemplo: NavBar
 *
 * Se incorpora la etiqueta Link para el Router
 * import { Link } from "react-router-dom";
 *
 * y cada etiqueta link usamos to="/" para la redireccion.
 * <Link to="/">Home</Link>
 * Esto tiene que ser igual que el <Route path="/Productos" />
 */
import * as React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Productos">Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

/**
 * Y en la App incorporamos el componente <NavBar />
 * dentro del componente <BrowserRouter> </BrowserRouter>
 */

return (
  <div>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route exact path="/Productos" element={<Productos />} />
      </Routes>
    </BrowserRouter>
  </div>
);

/**
 * Pasar parametros ID
 * -------------------
 * 1) Tenemos que asignar una router donde se vera los detalles de la vista individual.
 * En el path a la ruta le incorporamos :variable
 * Ejemplo: /Productos/:id
 * en element, el componete que manejara las vista individual.
 * element={<ProductoId />}
 */
 return (
    <Route exact path="/Productos/:id" element={<ProductoId />} />
 )

/**
 * Navegacion
 * ----------
 * 2) Los links de navegacion se redigiran al mismo del Route pero en ves de :id incorporamos y el numero de ID ${1} y las rutas iran entre corchetes {} y las comillas tienen que ser invertidas ` ` o dobles " " sino no agarra el numero ID.
 * 
 * to={`/productos/${1}`} 
 */ 

 return (
  <ul>
    <li><Link to={`/productos/${1}`}>Detalle de productos 1</Link></li>
    <li><Link to={`/productos/${2}`}>Detalle de productos 2</Link></li>
  </ul>
}

/**
 * Vista individual
 * ----------------
 * 3) Faltaria crear el componente donde se detalla la vista individual.
 *  
 * Importamos la funcion useParams que sirvira para capturar los parametros que le lleguen.
 * 
 * Dentro de la funcion capturamos los parametros con una conts = useParams();
 * const { id } = useParams();
 */
 import { useParams } from 'react-router-dom';

 export default function ProductosId() {
  const { id } = useParams();
  return (
    <div>
      <h1>Productos ID {id}</h1>
    </div>
  );
}